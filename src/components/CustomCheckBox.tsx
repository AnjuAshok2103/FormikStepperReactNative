import { View, Text } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { useFormikContext } from 'formik';
import { get } from '../utils';
import CustomText from './inputs/CustomText';
import { useAppTheme } from '../hooks/useAppTheme';

interface Props {
  name: string;
  label: string;
  path: string;
}
const CustomCheckBox = ({ name, path, label }: Props) => {
  const { values, setFieldValue } = useFormikContext();
  const fullPath = `${path}.${name}`;
  const value = get(values, fullPath);
  const { colors } = useAppTheme();
  return (
    <View
      style={{
        gap: 4,
      }}
    >
      <Checkbox.Item
        mode="android"
        label={label}
        onPress={() => {
          setFieldValue(fullPath, !value);
        }}
        status={value ? 'checked' : 'unchecked'}
        position="trailing"
        labelStyle={{
          fontSize: 16,
          fontWeight: 400,
          textTransform: 'capitalize',
          color: colors.h1Text,
        }}
        color={colors.link}
        style={{ marginHorizontal: 0, paddingHorizontal: 0 }}
      />
    </View>
  );
};

export default CustomCheckBox;
