import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { get } from '../utils';
import { useFormikContext } from 'formik';
import { useAppTheme } from '../hooks/useAppTheme';
import { useContext } from 'react';
import { CustomThemeContext } from '../context/CustomThemeContext';
import { Divider } from 'react-native-paper';
import Icon from '@react-native-vector-icons/material-design-icons';

interface Props {
  path: string; // Path in Formik values, e.g. "applianceInventory[0]"
}
export const DynamicInventory = ({ path }: Props) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const { colors } = useAppTheme();
  const { isDarkTheme } = useContext(CustomThemeContext);
  // Always read from Formik
  const currentItem = get(values, path);

  const handleIncrement = (fieldName: string) => {
    const currentValue = get(values, `${path}.${fieldName}`) || 0;
    setFieldValue(`${path}.${fieldName}`, currentValue + 1);
  };

  const handleDecrement = (fieldName: string) => {
    const currentValue = get(values, `${path}.${fieldName}`) || 0;
    if (currentValue > 0) {
      setFieldValue(`${path}.${fieldName}`, currentValue - 1);
    }
  };

  if (!currentItem) {
    return null;
  }

  const Inventory = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 4,
          backgroundColor: isDarkTheme ? colors.inActive : colors.accentBg,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleDecrement('inventory')}
        >
          <Icon
            name="minus"
            color={
              currentItem.inventory === 0
                ? colors.outline
                : isDarkTheme
                ? colors.pageBg
                : colors.primaryText
            }
            style={{
              opacity: isDarkTheme && currentItem.inventory === 0 ? 0.6 : 1,
            }}
            size={20}
          />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.outline,
            height: '100%',
            width: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={{ fontSize: 20 }}>{currentItem.inventory}</Text>
        <Divider
          style={{
            backgroundColor: colors.outline,
            height: '100%',
            width: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => handleIncrement('inventory')}
        >
          <Icon
            name="plus"
            color={
              currentItem.inventory === 10
                ? colors.outline
                : isDarkTheme
                ? colors.pageBg
                : colors.primaryText
            }
            style={{
              opacity: isDarkTheme && currentItem.inventory === 10 ? 0.6 : 1,
            }}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Stubs = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'orange',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 4,
          backgroundColor: isDarkTheme ? colors.inActive : colors.accentBg,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleDecrement('stubs')}
        >
          <Icon
            name="minus"
            color={
              currentItem.stubs === 0
                ? colors.outline
                : isDarkTheme
                ? colors.pageBg
                : colors.primaryText
            }
            style={{
              opacity: isDarkTheme && currentItem.stubs === 0 ? 0.6 : 1,
            }}
            size={20}
          />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.outline,
            height: '100%',
            width: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={{ fontSize: 20 }}>{currentItem.stubs}</Text>
        <Divider
          style={{
            backgroundColor: colors.outline,
            height: '100%',
            width: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleIncrement('stubs')}
        >
          <Icon
            name="plus"
            color={
              currentItem.stubs === 10
                ? colors.outline
                : isDarkTheme
                ? colors.pageBg
                : colors.primaryText
            }
            style={{
              opacity: isDarkTheme && currentItem.stubs === 10 ? 0.6 : 1,
            }}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 8,
      }}
    >
      {/* Appliance Name - Fixed Width */}
      <View style={{ flex: 2 }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'left',
            fontWeight: 600,
            color: colors.h1Text,
          }}
          numberOfLines={2}
        >
          {currentItem.label}
        </Text>
      </View>

      {/* Counters Container - Takes remaining space */}
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          flex: 3,
        }}
      >
        {/* Inventory Counter - Takes half of remaining space */}
        {Inventory()}
        {/* Stubs Counter - Takes other half of remaining space */}
        {Stubs()}
      </View>
    </View>
  );
};
