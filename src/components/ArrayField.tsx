import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useFormikContext } from 'formik';
import { DynamicInventory } from './DynamicInventory';
import { Text } from 'react-native-paper';
import { get } from '../utils';
import { InitialData } from '../types';
import CustomText from './inputs/CustomText';

interface Props {
  name: string;
  label: string;
  path: string;
  initialData: InitialData[];
  stepInfoText?: string;
}

export const ArrayField = ({ name, path, stepInfoText }: Props) => {
  const { values } = useFormikContext<any>();

  const listToRender = get(values, `${path}.${name}`);

  if (!listToRender || !Array.isArray(listToRender)) {
    return <Text>No list to render</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Header Row */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20, // Add some padding to match the image
          marginBottom: 10,
        }}
      >
        {/* Empty view for alignment with the item name */}
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Inventory</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Stubs</Text>
        </View>
      </View>
      {/* List of Appliance Items */}
      {listToRender.map((_, index) => (
        <DynamicInventory
          key={`${path}.${name}[${index}]`}
          path={`${path}.${name}[${index}]`}
        />
      ))}
    </View>
  );
};
