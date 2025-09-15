import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamsList } from '../types';
import { styles } from '../styles';
import { dnp } from '../utils/dnp';
import { dnpfm } from '../utils/dnpfm';
import { formDefinition } from '../utils/formDefinition';
import { formDefinitionSimple } from '../utils/formDefinitionSimple';

export type MainScreenProps = NativeStackScreenProps<
  MainStackParamsList,
  'Main'
>;
const Main = ({ navigation, route }: MainScreenProps) => {
  let orderList = ['DNP', 'DNPFM', 'DNPFM Nevada'];

  const handleSelectOrder = (orderType: string) => {
    let selectedFormDefinition = formDefinitionSimple;
    if (orderType === 'DNP') {
      selectedFormDefinition = dnp;
    } else if (orderType === 'DNPFM') {
      selectedFormDefinition = dnpfm;
    } else {
      selectedFormDefinition = formDefinition;
    }
    // Navigate and pass the form definition as a parameter
    navigation.navigate('Home', {
      formDefinition: selectedFormDefinition,
      orderType: orderType,
    });
  };

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <TouchableOpacity
        style={{ padding: 5 }}
        onPress={() => {
          handleSelectOrder(item);
        }}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={[styles.flex1]}>
      <FlatList
        data={orderList}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        initialNumToRender={12} // ✅ render a few items initially
        maxToRenderPerBatch={10} // ✅ render more items as you scroll
        windowSize={5} // ✅ keeps a few screens worth of items mounted
        removeClippedSubviews // ✅ unmounts items that scroll off-screen
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: 50, // height of each row
          offset: 50 * index,
          index,
        })}
      />
    </View>
  );
};

export default Main;
