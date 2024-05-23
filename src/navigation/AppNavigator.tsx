import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../screens/MenuScreen';
import ParticipantSelectionScreen from '../screens/ParticipantSelectionScreen';
import DiscussionScreen, { DiscussionScreenProps } from '../screens/DiscussionScreen';
import HistoryScreen from '../screens/HistoryScreen';

export type RootStackParamList = {
  MenuScreen: undefined;
  ParticipantSelectionScreen: undefined;
  DiscussionScreen: { numberOfParticipants: string };
  HistoryScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: 'メニュー' }} />
        <Stack.Screen name="ParticipantSelectionScreen" component={ParticipantSelectionScreen} options={{ title: '参加人数選択' }} />
        <Stack.Screen name="DiscussionScreen" component={DiscussionScreen} options={{ title: 'ディスカッション' }} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ title: '履歴' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
