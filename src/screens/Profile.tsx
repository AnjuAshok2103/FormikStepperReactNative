import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { AppTheme, CustomThemeContext } from '../context/CustomThemeContext';
import { useAppTheme } from '../hooks/useAppTheme';
import { MainStackParamsList } from '../types';

type ProfileScreenProps = NativeStackScreenProps<
  MainStackParamsList,
  'Profile'
>;
const Profile = ({ navigation, route }: ProfileScreenProps) => {
  const { colors } = useAppTheme();
  const { currentAppTheme, switchTheme } = useContext(CustomThemeContext);
  const [themeOptions, setThemeOptions] = useState([
    {
      key: 'system',
      value: 'SYSTEM',
    },
    {
      key: 'light',
      value: 'LIGHT',
    },
    {
      key: 'dark',
      value: 'DARK',
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {themeOptions.map(item => {
        return (
          <List.Item
            key={item.key}
            onPress={() => switchTheme(item.value as AppTheme)}
            title={item.value}
            titleStyle={{ color: colors.primaryText }}
            right={() =>
              currentAppTheme === item.value && (
                <List.Icon icon="check" color={colors.success} />
              )
            }
          />
        );
      })}
    </View>
  );
};

export default Profile;
