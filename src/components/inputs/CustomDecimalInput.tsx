import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../hooks/useAppTheme';
import { DataType } from '../../types';

interface DecimalInputProps {
  type: DataType;
  path: string; // Add a basePath prop here
  handleOnChange: any;
  handleBlur: any;
  value: any;
  fullPath: string;
  fieldError: any;
  isTouched: boolean;
}

export const DecimalInput: React.FC<DecimalInputProps> = ({
  type,
  handleBlur,
  value,
  fieldError,
  isTouched,
  handleOnChange,
}) => {
  const { colors } = useAppTheme();

  const formatDecimal = (value: string): string => {
    if (!value) {
      return '00.00';
    }
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      return '00.00';
    }
    return (numericValue / 100).toFixed(2); // Convert to decimal format
  };

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
          const formattedValue = formatDecimal(text.replace(/[^0-9]/g, '')); // Remove non-numeric characters
          handleOnChange(formattedValue || '0.00');
        }}
        onBlur={handleBlur}
        keyboardType="decimal-pad"
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
