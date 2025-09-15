import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-paper';
import { useFormikContext } from 'formik';
import { get } from '../utils';

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
      <Text>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 14,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 14 }}>{getSwitchText(label, value)}</Text>

        <Switch
          value={value}
          onValueChange={on => setFieldValue(fullPath, on)}
        />
      </View>
    </View>
  );
};

export default CustomSwitch;
