import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useAppTheme } from '../../hooks/useAppTheme';
import { CustomThemeContext } from '../../context/CustomThemeContext';

export type Props = {
  stepInfoText: string;
};
const CustomText = ({ stepInfoText }: Props) => {
  const { colors } = useAppTheme();
  const { isDarkTheme } = useContext(CustomThemeContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        backgroundColor: isDarkTheme ? colors.utiliron : colors.infoBlock,
        borderLeftWidth: 5,
        borderLeftColor: colors.link,
      }}
    >
      <Text style={{ color: isDarkTheme ? colors.pageBg : colors.primaryText }}>
        {stepInfoText}
      </Text>
    </View>
  );
};

export default CustomText;
