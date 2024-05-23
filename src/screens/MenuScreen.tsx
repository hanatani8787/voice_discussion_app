import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type MenuScreenProps = {
  navigation: NavigationProp<any>;
};

const MenuScreen = ({ navigation }: MenuScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>メニュー</Text>
      <Button
        title="閲覧"
        onPress={() => navigation.navigate('ViewScreen')}
      />
      <Button
        title="投稿"
        onPress={() => navigation.navigate('ParticipantSelectionScreen')}
      />
      <Button
        title="履歴"
        onPress={() => navigation.navigate('HistoryScreen')}
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
});

export default MenuScreen;
