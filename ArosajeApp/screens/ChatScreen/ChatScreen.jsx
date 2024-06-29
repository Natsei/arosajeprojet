import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MessageBubble from '../MessageBubble/MessageBubble';
import { io } from 'socket.io-client';
import global from "../../global";
import useSWR from "swr";
import { ChevronLeft } from "lucide-react-native";
import * as style from "../../style/styles"; // Importez vos styles

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const token = global.token;

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then(
    (res) => res.json()
  );

const socket = io('http://localhost:3001', {
  auth: {
    token,
  },
});

socket.on('connect_error', (err) => {
  console.error('Erreur de connexion :', err.message);
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const { data: chatData, error } = useSWR("http://localhost:3000/api/chat/getLesDiscussions", fetcher);

  const requestUser = useSWR(
    "http://localhost:3000/api/utilisateurs/getById?id=" + global.userId,
    fetcher
  );

  useEffect(() => {
    if (chatData) {
      setMessages(chatData);
    }
  }, [chatData]);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [message, ...prevMessages]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleSend = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        _id: generateRandomNumber(10000, 1000000),
        userId: global.userId,
        userDetails: {
          id: global.userId,
          prenom: requestUser.prenom,
          nom: requestUser.nom,
          cheminPhoto: requestUser.cheminPhoto
        },
        lastMessage: {
          content: inputText,
          datePublication: new Date()
        }
      };

      socket.emit('sendMessage', {
        destinataireId: 'clseowwcj0000we7endwgj9lb', // Remplacez par l'ID du destinataire réel
        contenu: inputText,
      });

      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("AccueilScreen")}>
        <ChevronLeft color="black" size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>Chat</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <MessageBubble
            message={item.lastMessage.content}
            isCurrentUser={item.userId === global.userId} // Remplacez par l'ID de l'utilisateur actuel
          />
        )}
        keyExtractor={(item) => generateRandomNumber(10000, 10000000).toString()}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Message"
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color="#34C759" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: windowWidth * 0.06,
    fontWeight: style.FONT_WEIGHTS.bold,
    textAlign: "center",
    marginBottom: windowHeight * 0.05,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ECECEC',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
});
