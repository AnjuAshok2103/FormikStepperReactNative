import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useFormikContext } from 'formik';
import { get } from '../utils';
import { useAppTheme } from '../hooks/useAppTheme';
import Icon from '@react-native-vector-icons/material-design-icons';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
export type Option = { label: string; value: string; disabled?: boolean };
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface DropdownProps {
  label: string;
  options: Option[];
  path: string;
  name: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  path,
  name,
}) => {
  const [visible, setVisible] = useState(false);
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();

  const fullPath = `${path}.${name}`;
  const value = get(values, fullPath);
  const fieldError = get(errors, fullPath);
  const isTouched = get(touched, fullPath);
  const { colors } = useAppTheme();

  const getLabelForValue = (val: string | null) => {
    if (!val) return `Select ${label}`;
    return options.find(o => o.value === val)?.label ?? `Select ${label}`;
  };

  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontSize: 16, fontWeight: 400, color: colors.h1Text }}>
        {label}
      </Text>
      <TouchableOpacity
        style={[
          styles.selector,
          {
            borderColor:
              fieldError && isTouched ? colors.error : colors.outline,
          },
        ]}
        onPress={() => setVisible(true)}
      >
        <Text
          style={{ color: colors.primaryText, fontSize: 16, fontWeight: '400' }}
        >
          {getLabelForValue(value)}
        </Text>
        <Icon name="chevron-down" size={24} color="#555" />
      </TouchableOpacity>

      {/* Modal Dropdown */}
      <Modal
        transparent
        animationType="none"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View
            style={[styles.modalBackdrop, { backgroundColor: colors.backdrop }]}
          >
            <View
              style={[
                styles.modalContent,

                {
                  backgroundColor: colors.container,
                  maxHeight: SCREEN_HEIGHT * 0.4,
                },
              ]}
            >
              <FlatList
                data={options}
                keyExtractor={item => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    disabled={item.disabled}
                    style={styles.option}
                    onPress={() => {
                      setFieldValue(fullPath, item.value);
                      setVisible(false);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: item.disabled
                          ? colors.secondaryText
                          : colors.primaryText,
                      }}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <Divider />}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    maxHeight: '60%',
    borderRadius: 4,
    padding: 16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 12,
  },
  option: {
    paddingVertical: 12,
  },
  closeButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
