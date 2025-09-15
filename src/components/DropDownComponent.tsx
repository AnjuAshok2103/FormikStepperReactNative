import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Menu, Text } from 'react-native-paper';
import Icon from '@react-native-vector-icons/material-design-icons';
import { useFormikContext } from 'formik';
import { get } from '../utils';
export type Option = { label: string; value: string; disabled?: boolean };
type DropdownOptions = Option[] | Record<string, Option[]>;

interface DropdownProps {
  label: string;
  options: DropdownOptions;
  selectedValue: string | null;
  path: string;
  name: string;
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  path,
  name,
}) => {
  const [visible, setVisible] = useState(false);
  const { values, handleChange, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<any>();
  // Use the full path for Formik's functions and value access
  const fullPath = `${path}.${name}`;
  const value = get(values, fullPath);
  const fieldError = get(errors, fullPath); // Retrieve the error for the full path
  const isTouched = get(touched, fullPath); // Check if the field has been touched
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontWeight: '600' }}>{label}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: fieldError && isTouched ? 'red' : '#ccc',
          borderRadius: 8,
        }}
      >
        <View style={{ margin: 10 }}>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
                onPress={() => setVisible(true)}
              >
                <View>
                  <Text>
                    {selectedValue
                      ? (Array.isArray(options)
                          ? options.find(o => o.value === selectedValue)?.label
                          : Object.values(options)
                              .flat()
                              .find(o => o.value === selectedValue)?.label) ??
                        label
                      : `Select ${label}`}
                  </Text>
                </View>
                <Icon name="chevron-down" size={20} color={'black'} />
              </TouchableOpacity>
            }
          >
            <ScrollView style={{ maxHeight: 250 }}>
              {Array.isArray(options) && // Flat list
                options.map(opt => (
                  <Menu.Item
                    key={opt.value}
                    disabled={opt.disabled}
                    onPress={() => {
                      onSelect(opt.value);
                      setVisible(false);
                    }}
                    title={opt.label}
                  />
                ))}
            </ScrollView>
          </Menu>
        </View>
      </View>
    </View>
  );
};
