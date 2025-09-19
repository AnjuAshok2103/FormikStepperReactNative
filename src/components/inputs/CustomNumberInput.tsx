import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../hooks/useAppTheme';
import { DataType } from '../../types';

interface NumberInputProps {
  type: DataType;
  path: string; // Add a basePath prop here
  handleOnChange: any;
  handleBlur: any;
  value: any;
  fullPath: string;
  fieldError: any;
  isTouched: boolean;
}

export const CustomNumberInput: React.FC<NumberInputProps> = ({
  type,
  handleBlur,
  value,
  fieldError,
  isTouched,
  handleOnChange,
}) => {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          backgroundColor: colors.container,
          width: '100%',
          fontSize: 16,
          fontWeight: '400',
          paddingHorizontal: 0,
          height: 40,
        }}
        theme={{
          colors: {
            primary: colors.h1Text,
          },
        }}
        outlineStyle={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: fieldError && isTouched ? colors.error : colors.outline,
        }}
        mode="outlined"
        textColor={colors.h1Text}
        placeholderTextColor={colors.inActive}
        value={value}
        onChangeText={text => {
          const value = text.replace(/^0+/, ''); // removes leading zeros
          handleOnChange(value);
        }}
        onBlur={handleBlur}
        keyboardType="number-pad"
        returnKeyType="done"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  errorContainer: {
    marginTop: 4,
  },
});
