import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamsList } from '../../types';
import Home from '../../screens/Home';
import Other from '../../screens/Other';
import Main from '../../screens/Main';
import Profile from '../../screens/Profile';
import Icon from '@react-native-vector-icons/material-design-icons';
import { useAppTheme } from '../../hooks/useAppTheme';
import { TouchableOpacity } from 'react-native';

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export function MainStackNavigator() {
  const { colors } = useAppTheme();
  const headerRight = (navigation: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="cog" color={colors.tertiaryText} size={24} />
      </TouchableOpacity>
    );
  };
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen
        name="Main"
        component={Main}
        options={({ navigation }) => ({
          headerRight: () => headerRight(navigation),
        })}
      ></MainStack.Screen>
      <MainStack.Screen name="Other" component={Other}></MainStack.Screen>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      ></MainStack.Screen>

      <MainStack.Screen name="Profile" component={Profile}></MainStack.Screen>
    </MainStack.Navigator>
  );
}
