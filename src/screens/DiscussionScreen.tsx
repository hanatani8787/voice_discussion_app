import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Voice from '@react-native-community/voice';

const DiscussionScreen = () => {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (e) => {
    setTranscript(e.value[0]);
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('ja-JP');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ディスカッション</Text>
      <Button title="音声認識開始" onPress={startRecognizing} />
      <Text style={styles.transcript}>{transcript}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  transcript: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});

export default DiscussionScreen;
