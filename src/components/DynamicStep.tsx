import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DynamicField } from './DynamicField';
import { StepDefinition } from '../types';
import CustomText from './inputs/CustomText';

interface Props {
  step: StepDefinition;
  basePath: string; // Add a basePath prop here
  onNext?: (subStep: StepDefinition) => void;
}

export const DynamicStep: React.FC<Props> = ({ step, onNext, basePath }) => {
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
              style={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                marginBottom: 10,
              }}
              onPress={() => onNext?.(sub)}
            >
              <Text>{sub.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
