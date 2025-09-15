import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamsList } from '../../types';
import Home from '../../screens/Home';
import Other from '../../screens/Other';
import Main from '../../screens/Main';

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen name="Main" component={Main}></MainStack.Screen>
      <MainStack.Screen name="Other" component={Other}></MainStack.Screen>
      <MainStack.Screen name="Home" component={Home}></MainStack.Screen>
    </MainStack.Navigator>
  );
}
