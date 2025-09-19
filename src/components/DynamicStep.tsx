import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DynamicField } from './DynamicField';
import { StepDefinition } from '../types';
import CustomText from './inputs/CustomText';
import Icon from '@react-native-vector-icons/material-design-icons';
import { Divider } from 'react-native-paper';
import { useAppTheme } from '../hooks/useAppTheme';
import { CustomThemeContext } from '../context/CustomThemeContext';

interface Props {
  step: StepDefinition;
  basePath: string; // Add a basePath prop here
  onNext?: (subStep: StepDefinition) => void;
}

export const DynamicStep: React.FC<Props> = ({ step, onNext, basePath }) => {
  const { colors } = useAppTheme();
  const { isDarkTheme } = useContext(CustomThemeContext);
  return (
    <View style={{ flex: 1, padding: 20, gap: 8 }}>
      <View style={{ gap: 10 }}>
        {step.fields && step.stepInfoText && (
          <View>
            <CustomText stepInfoText={step.stepInfoText} />
          </View>
        )}
        {step.fields &&
          step.fields.map(field => (
            <DynamicField
              key={field.name}
              {...field}
              path={basePath}
              stepInfoText={step.stepInfoText}
            />
          ))}
      </View>
      {step.subSteps && (
        <View style={{ marginTop: 20 }}>
          {step.subSteps.map((sub, i) => (
            <TouchableOpacity
              key={`${sub.title}${i}`}
              onPress={() => onNext?.(sub)}
            >
              <View
                style={{
                  padding: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: isDarkTheme ? colors.primaryText : colors.h1Text,
                  }}
                >
                  {sub.title}
                </Text>
                <TouchableOpacity onPress={() => onNext?.(sub)}>
                  <Icon
                    name="chevron-right"
                    size={18}
                    color={colors.secondaryText}
                  />
                </TouchableOpacity>
              </View>
              <Divider style={{ backgroundColor: colors.outline }} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
