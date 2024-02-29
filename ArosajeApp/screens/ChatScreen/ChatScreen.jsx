import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { TEXT_STYLES, COLORS, FONT_WEIGHTS } from '../../style/styles';// Importez vos styles

export function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simuler des messages existants au chargement du chat
    setMessages([
      {
        _id: 1,
        text: 'Bienvenue sur le chat !',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../../assets/Home/homePicture.png'),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1, // Utilisateur actuel ( à variabiliser )
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
