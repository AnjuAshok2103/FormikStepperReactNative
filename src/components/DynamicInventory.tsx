import { Text, TouchableOpacity, View } from 'react-native';
import { get } from '../utils';
import { useFormikContext } from 'formik';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  path: string; // Path in Formik values, e.g. "applianceInventory[0]"
}
export const DynamicInventory = ({ path }: Props) => {
  const { values, setFieldValue } = useFormikContext<any>();

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

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingHorizontal: 20,
      }}
    >
      {/* Appliance Name - Fixed Width */}
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 14 }} numberOfLines={2}>
          {currentItem.label}
        </Text>
      </View>

      {/* Counters Container - Takes remaining space */}
      <View
        style={{
          flexDirection: 'row',
          flex: 3,
        }}
      >
        {/* Inventory Counter - Takes half of remaining space */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            // backgroundColor: 'pink',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 1, padding: 5 }}
              onPress={() => handleDecrement('inventory')}
            >
              <Text style={{ fontSize: 16 }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>{currentItem.inventory}</Text>
            <TouchableOpacity
              style={{ borderWidth: 1, padding: 5 }}
              onPress={() => handleIncrement('inventory')}
            >
              <Text style={{ fontSize: 16 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stubs Counter - Takes other half of remaining space */}
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
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 1, padding: 5 }}
              onPress={() => handleDecrement('stubs')}
            >
              <Text style={{ fontSize: 16 }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>{currentItem.stubs}</Text>
            <TouchableOpacity
              style={{ borderWidth: 1, padding: 5 }}
              onPress={() => handleIncrement('stubs')}
            >
              <Text style={{ fontSize: 16 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
