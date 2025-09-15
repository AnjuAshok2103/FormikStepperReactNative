import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { FormikErrors, FormikValues } from 'formik';

interface Props {
  type: 'text' | 'number' | 'email' | 'boolean' | 'array-of-objects';
  path: string; // Add a basePath prop here
  handleOnChange: any;
  handleBlur: any;
  value: any;
  fullPath: string;
  fieldError: any;
  isTouched: boolean;
}

const CustomTextInput = ({
  type,
  handleBlur,
  value,
  fieldError,
  isTouched,
  handleOnChange,
}: Props) => {
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: fieldError && isTouched ? 'red' : '#ccc',
          padding: 8,
          borderRadius: 8,
        }}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        autoCapitalize="none"
        onChangeText={handleOnChange}
        onBlur={handleBlur}
        value={value}
        returnKeyType="done"
      />
    </View>
  );
};

export default CustomTextInput;
