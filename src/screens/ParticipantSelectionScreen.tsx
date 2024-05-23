import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type ParticipantSelectionScreenProps = {
  navigation: NavigationProp<any>;
};

const ParticipantSelectionScreen = ({ navigation }: ParticipantSelectionScreenProps) => {
  const [numberOfParticipants, setNumberOfParticipants] = useState('');

  const handleStartDiscussion = () => {
    navigation.navigate('DiscussionScreen', { numberOfParticipants });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>参加人数を入力してください</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numberOfParticipants}
        onChangeText={setNumberOfParticipants}
      />
      <Button
        title="開始"
        onPress={handleStartDiscussion}
      />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default ParticipantSelectionScreen;
