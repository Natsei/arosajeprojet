import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBubble = ({ message, isCurrentUser }) => {
  return (
    <View style={[styles.container, isCurrentUser ? styles.currentUser : styles.otherUser]}>
      <View style={[styles.bubble, isCurrentUser ? styles.bubbleCurrentUser : styles.bubbleOtherUser]}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  currentUser: {
    justifyContent: 'flex-end',
  },
  otherUser: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 10,
  },
  bubbleCurrentUser: {
    backgroundColor: '#34C759',
    alignSelf: 'flex-end',
  },
  bubbleOtherUser: {
    backgroundColor: '#F1F1F1',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
});

export default MessageBubble;