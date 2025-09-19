import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-paper';
import { useFormikContext } from 'formik';
import { get } from '../utils';
import { useAppTheme } from '../hooks/useAppTheme';

interface Props {
  label: string;
  name: string;
  path: string;
}

export interface switchText {
  text: 'On' | 'Off' | 'Passed' | 'Failed';
}
const CustomSwitch = ({ label, name, path }: Props) => {
  const { values, setFieldValue } = useFormikContext();
  const fullPath = `${path}.${name}`;
  const value = get(values, fullPath);
  const { colors } = useAppTheme();
  const getSwitchText = (
    label: string,
    isOn: boolean,
  ): 'On' | 'Off' | 'Passed' | 'Failed' => {
    if (label.includes('Drop')) {
      return isOn ? 'Passed' : 'Failed';
    }
    return isOn ? 'On' : 'Off';
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{ color: colors.h1Text, fontSize: 16, fontWeight: 400 }}
        numberOfLines={2}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 14,
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: 400, color: colors.tertiaryText }}
        >
          {getSwitchText(label, value)}
        </Text>

        <Switch
          style={{
            transform: [{ scaleX: 1 }, { scaleY: 1 }],
          }}
          color={colors.link}
          trackColor={{
            true: colors.link,
            false: colors.inActive,
          }}
          thumbColor={'white'}
          ios_backgroundColor={colors.inActive}
          value={value}
          onValueChange={on => {
            setFieldValue(fullPath, on);
          }}
        />
      </View>
    </View>
  );
};

export default CustomSwitch;
