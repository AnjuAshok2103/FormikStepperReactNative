import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { MainStackParamsList } from '../types';
import * as Yup from 'yup';
import { formDefinitionSimple } from '../utils/formDefinitionSimple';

type OtherScreenProps = NativeStackScreenProps<MainStackParamsList>;
const Other = ({ navigation, route }: OtherScreenProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [subStepIndex, setSubStepIndex] = useState<number | null>(null);

  const currentStep =
    subStepIndex !== null
      ? formDefinitionSimple[stepIndex].subSteps![subStepIndex]
      : formDefinitionSimple[stepIndex];

  const goBack = () => {
    if (subStepIndex !== null && subStepIndex < 0) {
      //going back from substep to previous substep
      setSubStepIndex(subStepIndex - 1);
    } else if (subStepIndex !== null && subStepIndex == 0) {
      setSubStepIndex(null);
    } else {
      //going back to previous parent step
      setStepIndex(stepIndex - 1);
      const prevStep = formDefinitionSimple[stepIndex - 1];
      setSubStepIndex(prevStep.subSteps ? prevStep.subSteps.length - 1 : null);
    }
  };

  const goForward = () => {
    if (currentStep.subSteps && currentStep.subSteps.length - 1 > 0) {
      //enter into first substep
      setSubStepIndex(0);
    } else if (
      subStepIndex !== null &&
      subStepIndex < formDefinitionSimple[stepIndex].subSteps!.length - 1
    ) {
      //naviagte between substeps
      setSubStepIndex(subStepIndex + 1);
    } else if (subStepIndex !== null) {
      //finished  substep and move to next parent  step
      setSubStepIndex(null);
      if (stepIndex < formDefinitionSimple.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    } else {
      //normal parent step -> move to next parent
      if (stepIndex < formDefinitionSimple.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    }
  };

  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    horsepower: '',
    engineSize: '',
    engineType: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().required('Email  is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    horsepower: Yup.string().required('HorsePower is required'),
    engineSize: Yup.string().required('EngineSize is required'),
    engineType: Yup.string().required('EngineType is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
      validateOnMount
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ flex: 1 }}>
          <View>
            <Text>{`Step title: ${currentStep.title}`}</Text>

            {currentStep.fields?.map(field => {
              return (
                <Text key={`${field.name}-${field.type}`}>{field.name}</Text>
              );
            })}

            {currentStep.subSteps?.map(subStep => {
              return (
                <View key={`${subStep.title}`}>
                  <Text>{`SubStep: ${subStep.title}`}</Text>
                  {subStep.fields?.map(subStepField => {
                    return (
                      <Text key={`${subStepField.name}-${subStepField.type}`}>
                        {subStepField.name}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'space-between',
            }}
          >
            <Button
              title="Back"
              onPress={goBack}
              disabled={!(stepIndex > 0 || subStepIndex !== null)}
            />

            {stepIndex === formDefinitionSimple.length - 1 &&
            subStepIndex === null ? (
              <Button title="Submit" onPress={() => handleSubmit()} />
            ) : (
              <Button title="Next" onPress={goForward} />
            )}
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Other;
