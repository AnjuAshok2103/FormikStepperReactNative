import { View, Text } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { useFormikContext } from 'formik';
import { get } from '../utils';
import CustomText from './inputs/CustomText';

interface Props {
  name: string;
  label: string;
  path: string;
  stepInfoText: string;
}
const CustomCheckBox = ({ name, path, label, stepInfoText }: Props) => {
  const { values, setFieldValue } = useFormikContext();
  const fullPath = `${path}.${name}`;
  const value = get(values, fullPath);
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
        style={{ marginHorizontal: 0, paddingHorizontal: 0 }}
      />
    </View>
  );
};

export default CustomCheckBox;
