import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';

interface DecimalInputProps {
  type: 'text' | 'number' | 'email' | 'boolean' | 'array-of-objects';
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
          borderWidth: 1,
          borderColor: fieldError && isTouched ? 'red' : '#ccc',
          padding: 8,
          borderRadius: 8,
        }}
        value={String(value)}
        onChangeText={text => {
          const formattedValue = formatDecimal(text.replace(/[^0-9]/g, '')); // Remove non-numeric characters
          handleOnChange(formattedValue ? formattedValue : 0.0); // Update the form state
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
