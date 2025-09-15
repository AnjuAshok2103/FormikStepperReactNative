import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-paper';
import { DynamicStep } from '../components/DynamicStep';
import { Asset, MainStackParamsList, StepDefinition } from '../types';
import {
  buildValidationSchema,
  toCamelCase,
} from '../utils/buildValidationSchema';
import CircularProgress from '../components/CircularProgress';
import { styles } from '../styles';

type HomeScreenProps = NativeStackScreenProps<MainStackParamsList, 'Home'>;

const Home = ({ navigation, route }: HomeScreenProps) => {
  const { formDefinition, orderType } = route.params;

  const [stepIndex, setStepIndex] = useState(0); // track parent step
  const [subStepIndex, setSubStepIndex] = useState<number | null>(null); // track substep if inside one

  const currentStep =
    subStepIndex !== null
      ? formDefinition[stepIndex].subSteps![subStepIndex]
      : formDefinition[stepIndex];

  // Calculate the basePath based on the current step and substep
  const getBasePath = (
    currentStepIndex: number,
    currentSubStepIndex: number | null,
  ): string => {
    const parentStepKey = toCamelCase(formDefinition[currentStepIndex].title);
    if (currentSubStepIndex === null) {
      return parentStepKey;
    }
    const currentSubStep =
      formDefinition[currentStepIndex].subSteps![currentSubStepIndex];
    const subStepKey = toCamelCase(currentSubStep.title);
    return `${parentStepKey}.subSteps.${subStepKey}`;
  };

  // CENTRALIZED BASE PATH CALCULATION
  const basePath = getBasePath(stepIndex, subStepIndex);

  const createInitialValues = (
    steps: StepDefinition[],
  ): Record<string, any> => {
    const result: Record<string, any> = {};

    const processSteps = (
      currentSteps: StepDefinition[],
      currentObject: Record<string, any>,
    ) => {
      currentSteps.forEach(step => {
        const stepKey = toCamelCase(step.title);
        currentObject[stepKey] = {};

        step.fields?.forEach(field => {
          // Initialize values based on the field type
          if (field.type === 'boolean') {
            currentObject[stepKey][field.name] = false;
          } else if (field.type === 'number') {
            currentObject[stepKey][field.name] = 0.0; // Use 0.0 for numbers
          } else if (
            field.type === 'array-of-objects' &&
            field.inputType === 'image-selector'
          ) {
            // Special case for photos/images
            currentObject[stepKey][field.name] = [] as Asset[];
          } else if (
            field.type == 'text' &&
            field.inputType === 'signature-editor'
          ) {
            currentObject[stepKey][field.name] = '';
          } else if (field.type === 'array-of-objects' && field.initialData) {
            currentObject[stepKey][field.name] = field.initialData.map(
              item => ({
                ...item,
                inventory: item.inventory ?? 0,
                stubs: item.stubs ?? 0,
              }),
            );
          } else {
            currentObject[stepKey][field.name] = '';
          }
        });

        if (step.subSteps) {
          currentObject[stepKey]['subSteps'] = {};
          processSteps(step.subSteps, currentObject[stepKey]['subSteps']);
        }
      });
    };

    processSteps(steps, result);
    return result;
  };

  const initialValues = createInitialValues(formDefinition);
  const validationSchema = buildValidationSchema(formDefinition);

  const goBack = () => {
    if (subStepIndex !== null && subStepIndex > 0) {
      // go back within substeps
      setSubStepIndex(subStepIndex - 1);
    } else if (subStepIndex !== null && subStepIndex === 0) {
      // exit substeps back to parent step
      setSubStepIndex(null);
    } else if (stepIndex > 0) {
      // go back to previous parent step
      setStepIndex(stepIndex - 1);
      const prevStep = formDefinition[stepIndex - 1];
      setSubStepIndex(prevStep.subSteps ? prevStep.subSteps.length - 1 : null);
    }
  };

  const goForward = () => {
    if (currentStep.subSteps && currentStep.subSteps.length > 0) {
      // enter into first substep
      setSubStepIndex(0);
    } else if (
      subStepIndex !== null &&
      subStepIndex < formDefinition[stepIndex].subSteps!.length - 1
    ) {
      // go to next substep
      setSubStepIndex(subStepIndex + 1);
    } else if (subStepIndex !== null) {
      // finished substeps → move to next parent step
      setSubStepIndex(null);
      if (stepIndex < formDefinition.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    } else {
      // normal parent step → move forward
      if (stepIndex < formDefinition.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    }
  };

  function openSheet() {}
  console.log('initialValues', initialValues);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values =>
        Alert.alert('Submitted!', JSON.stringify(values, null, 2))
      }
      validateOnMount
      validateOnBlur
      validateOnChange
    >
      {({ handleSubmit, isValid, errors, values }) => {
        // Check for any errors at or below the current basePath
        const hasErrors = (obj: any, path: string): boolean => {
          const parts = path.split('.');
          let current = obj;
          for (const part of parts) {
            if (current === undefined || current === null) {
              return false;
            }
            current = current[part];
          }
          // Check if the current object or any of its children have errors
          return (
            current !== undefined &&
            current !== null &&
            Object.keys(current).length > 0
          );
        };

        const isCurrentStepInvalid = hasErrors(errors, basePath);
        // New logic: Check if the current step is optional
        const isStepOptional = currentStep?.optional === true;

        // The step is valid if it's optional OR if it has no errors
        const isStepValid = isStepOptional || !isCurrentStepInvalid;

        return (
          <View style={{ flex: 1 }}>
            <View>
              <CircularProgress
                size={60}
                strokeWidth={5}
                text={currentStep.title}
                steps={formDefinition.length}
                activeStep={stepIndex + 1}
                textDescription={orderType}
                openSheet={openSheet}
              />
            </View>
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flexGrow: 1,
              }}
              enableOnAndroid={true}
              extraScrollHeight={80} // 👈 pushes input above keyboard
              keyboardShouldPersistTaps="handled"
            >
              <View
                style={{
                  ...styles.flex1,
                  ...styles.stepOverlapStyle,
                  backgroundColor: 'white',
                }}
              >
                <DynamicStep
                  step={currentStep}
                  onNext={goForward}
                  basePath={basePath}
                />
              </View>
            </KeyboardAwareScrollView>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}
            >
              {stepIndex === 0 && subStepIndex === null ? (
                <Button mode="contained" onPress={() => navigation.goBack()}>
                  Cancel
                </Button>
              ) : (
                <Button mode="contained" onPress={goBack}>
                  Back
                </Button>
              )}

              {stepIndex === formDefinition.length - 1 &&
              subStepIndex === null ? (
                <Button mode="contained" onPress={() => handleSubmit()}>
                  Submit
                </Button>
              ) : (
                <Button
                  mode="contained"
                  onPress={goForward}
                  disabled={!isStepValid}
                >
                  Next
                </Button>
              )}
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
export default Home;
