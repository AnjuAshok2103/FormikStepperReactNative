// MultiSelect.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useFormikContext } from 'formik';
import { get } from '../utils';
import CustomText from './inputs/CustomText';
const { height, width } = Dimensions.get('window');
type Option = { label: string; value: string; disabled?: boolean };

interface Props {
  name: string;
  options: Option[];
  label: string;
  path: string; // Add a basePath prop here
}

export const MultiSelect = ({ name, options, label, path }: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const fullPath = `${path}.${name}`; // Construct the full path here

  const selectedValues = get(values, fullPath) || [];
  const fieldError = get(errors, fullPath);
  const isTouched = get(touched, fullPath);

  const handlePress = (optionValue: string) => {
    const newValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((val: string) => val !== optionValue) // remove
      : [...selectedValues, optionValue]; // add

    setFieldValue(fullPath, newValues);
  };

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <ScrollView style={{ maxHeight: height - 250 }}>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handlePress(option.value)}
              disabled={option.disabled}
              style={{
                padding: 10,
                margin: 5,
                borderRadius: 5,
                borderWidth: 1,
                backgroundColor: selectedValues.includes(option.value)
                  ? 'lightblue'
                  : 'white',
                borderColor: isTouched && fieldError ? 'red' : 'gray',
              }}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
