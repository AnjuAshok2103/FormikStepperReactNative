import { View, Text } from 'react-native';
import React from 'react';

export type Props = {
  stepInfoText: string;
};
const CustomText = ({ stepInfoText }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#263A76',
        borderLeftWidth: 5,
        borderLeftColor: '#44A5FF',
      }}
    >
      <Text style={{ color: 'white' }}>{stepInfoText}</Text>
    </View>
  );
};

export default CustomText;
