import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Alert, Image, Platform, StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text } from 'react-native-paper';
import { DynamicStep } from '../components/DynamicStep';
import { Asset, MainStackParamsList, StepDefinition } from '../types';
import {
  buildValidationSchema,
  toCamelCase,
} from '../utils/buildValidationSchema';
import CircularProgress from '../components/CircularProgress';
import { styles } from '../styles';
import { formDefinitionSimple } from '../utils/formDefinitionSimple';
import { dnp } from '../utils/dnp';
import { dnpfm } from '../utils/dnpfm';
import { dnpfmNevada } from '../utils/dnfpmNevada';
import {
  initialWindowMetrics,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useAppTheme } from '../hooks/useAppTheme';
import { CustomThemeContext } from '../context/CustomThemeContext';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { filterApplianceArray, formatAddress, formatTimeMM_SS } from '../utils';
import { FM18E } from '../utils/FM18E';

type HomeScreenProps = NativeStackScreenProps<MainStackParamsList, 'Home'>;

const Home = ({ navigation, route }: HomeScreenProps) => {
  const { orderType } = route.params;
  const { colors } = useAppTheme();
  const { isDarkTheme } = useContext(CustomThemeContext);
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [selectedFormDefinition, setSelectedFormDefinition] =
    useState(formDefinitionSimple);
  const [stepIndex, setStepIndex] = useState(0); // track parent step
  const [subStepIndex, setSubStepIndex] = useState<number | null>(null); // track substep if inside one
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Helper booleans
  const isLastParentStep = stepIndex === selectedFormDefinition.length - 1;
  const hasSubSteps = !!selectedFormDefinition[stepIndex].subSteps;
  const isInSubStep = subStepIndex !== null;
  const isLastSubStep =
    isInSubStep &&
    subStepIndex === selectedFormDefinition[stepIndex].subSteps!.length - 1;

  // ✅ Show button if:
  // - You're on a parent step (no substep) AND it's not the last step
  // - OR you're inside a substep AND it's not the last substep
  const showSafetyTimerButton =
    (!isInSubStep && !isLastParentStep) || (isInSubStep && !isLastSubStep);

  let premiseData = {
    premise: '5201730205',
    accountId: '910001730205',
    customerId: '1102369347',
    installationType: 'GAS',
    type: 'TC 08P',
    status: 'SCHEDULED',
    tech: {
      id: 'AXA1',
      name: 'ANJU',
    },
    notification: {
      customerName: 'JANE DOE',
      email: 'jane-doe@localhost.localdomain',
      ivrNumber: '7022345678',
      smsNumber: '7022345678',
    },
    serviceAddress: {
      street1: '147, Amrapali Marg',
      street2: 'Vaishali Nagar',
      city: 'Jaipur',
      state: 'Rajasthan',
      zip: '302021',
      latitude: 26.91129,
      longitude: 75.74872,
      formattedAddress:
        '147, Amrapali Marg Vaishali Nagar, Jaipur, Rajasthan 302021',
      abbreviatedStreet: '147, Amrapali Marg Vaishali Nagar',
    },
    description: '2lb Tenant Change On',
    appointmentWindow: '04:00PM-06:00PM',
    timestamp: '2025-09-11T12:08:17Z',
  };
  const handleSheetChanges = useCallback((index: number) => {}, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        onPress={() => {
          bottomSheetRef.current?.close();
        }}
        pressBehavior={true ? 'collapse' : 'close'}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const switchTimer = () => {
    setIsRunning(prev => !prev);
  };

  const handleSelectOrder = (orderType: string) => {
    if (orderType === 'DNP') {
      setSelectedFormDefinition(dnp);
    } else if (orderType === 'DNPFM') {
      setSelectedFormDefinition(dnpfm);
    } else if (orderType === 'FM18E') {
      setSelectedFormDefinition(FM18E);
    } else {
      setSelectedFormDefinition(dnpfmNevada);
    }
  };

  const currentStep =
    subStepIndex !== null
      ? selectedFormDefinition[stepIndex].subSteps![subStepIndex]
      : selectedFormDefinition[stepIndex];

  // Calculate the basePath based on the current step and substep
  const getBasePath = (
    currentStepIndex: number,
    currentSubStepIndex: number | null,
  ): string => {
    const parentStepKey = toCamelCase(
      selectedFormDefinition[currentStepIndex].title,
    );
    if (currentSubStepIndex === null) {
      return parentStepKey;
    }
    const currentSubStep =
      selectedFormDefinition[currentStepIndex].subSteps![currentSubStepIndex];
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
          } else if (field.inputType === 'multi-select') {
            // ✅ multi-select should start as an array
            currentObject[stepKey][field.name] = [];
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
      const prevStep = selectedFormDefinition[stepIndex - 1];
      setSubStepIndex(prevStep.subSteps ? prevStep.subSteps.length - 1 : null);
    }
  };

  const goForward = () => {
    if (currentStep.subSteps && currentStep.subSteps.length > 0) {
      // enter into first substep
      setSubStepIndex(0);
    } else if (
      subStepIndex !== null &&
      subStepIndex < selectedFormDefinition[stepIndex].subSteps!.length - 1
    ) {
      // go to next substep
      setSubStepIndex(subStepIndex + 1);
    } else if (subStepIndex !== null) {
      // finished substeps → move to next parent step
      setSubStepIndex(null);
      if (stepIndex < selectedFormDefinition.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    } else {
      // normal parent step → move forward
      if (stepIndex < selectedFormDefinition.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    }
  };

  function openSheet() {
    bottomSheetRef.current?.present();
  }

  // ⚠️ Use useMemo to create initialValues and validationSchema dynamically
  const initialValues = createInitialValues(selectedFormDefinition);

  const validationSchema = buildValidationSchema(selectedFormDefinition);

  // console.log('initialValues', initialValues);
  // console.log('buildSchema', validationSchema);

  useEffect(() => {
    !isDarkTheme && StatusBar.setBarStyle('light-content');
    orderType && handleSelectOrder(orderType);
  }, [orderType]);

  useEffect(() => {
    let timer = null; // Allow timer to be null initially

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      timer && clearInterval(timer);
      setIsRunning(false);
      console.log('Timer reached zero!');
    }

    return () => {
      if (timer) clearInterval(timer);
      console.log('clear timer');
    };
  }, [isRunning, timeLeft]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.brandColor,
        paddingTop:
          Platform.OS === 'android'
            ? initialWindowMetrics?.insets.top
            : insets.top,
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          filterApplianceArray(values);
          Alert.alert('Submitted!', JSON.stringify(values, null, 2));
        }}
        enableReinitialize
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
                  steps={selectedFormDefinition.length}
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
                extraScrollHeight={10} // 👈 pushes input above keyboard
                keyboardShouldPersistTaps="handled"
              >
                <View
                  style={{
                    ...styles.flex1,
                    ...styles.stepOverlapStyle,
                    backgroundColor: colors.container,
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
                  backgroundColor: colors.container,
                }}
              >
                {stepIndex === 0 && subStepIndex === null ? (
                  <Button
                    theme={{ roundness: 1 }}
                    mode="contained"
                    onPress={() => navigation.goBack()}
                    textColor={colors.utiliron}
                    buttonColor="transparent"
                    style={[
                      {
                        borderWidth: 1,
                        borderColor: isDarkTheme
                          ? colors.utiliron
                          : colors.link,
                      },
                    ]}
                  >
                    Cancel
                  </Button>
                ) : (
                  <Button
                    mode="contained"
                    onPress={goBack}
                    theme={{ roundness: 1 }}
                    textColor={colors.utiliron}
                    buttonColor="transparent"
                    style={[
                      {
                        borderWidth: 1,
                        borderColor: isDarkTheme
                          ? colors.utiliron
                          : colors.link,
                      },
                    ]}
                  >
                    Back
                  </Button>
                )}

                {stepIndex === selectedFormDefinition.length - 1 &&
                subStepIndex === null ? (
                  <Button
                    mode="contained"
                    theme={{ roundness: 1 }}
                    onPress={() => handleSubmit()}
                    buttonColor={colors.brandColor}
                    style={{ borderColor: 'transparent' }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    mode="contained"
                    theme={{ roundness: 1 }}
                    onPress={goForward}
                    disabled={!isStepValid}
                    buttonColor={colors.brandColor}
                    style={{ borderColor: 'transparent' }}
                  >
                    Next
                  </Button>
                )}
              </View>
            </View>
          );
        }}
      </Formik>

      <BottomSheetModal
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          style={[
            styles.contentContainer,
            {
              paddingHorizontal: 16,
              gap: 10,
              paddingBottom:
                Platform.OS === 'ios'
                  ? insets.bottom
                  : initialWindowMetrics?.insets.bottom,
              paddingTop: 10,
            },
          ]}
        >
          <View style={{ alignSelf: 'flex-start' }}>
            <Text numberOfLines={2}>
              {formatAddress(premiseData.serviceAddress.abbreviatedStreet)}
            </Text>
            <Text>
              {formatAddress(
                premiseData.serviceAddress.city,
                premiseData.serviceAddress.state,
                premiseData.serviceAddress.zip,
              )}
            </Text>
          </View>

          {/*Card */}
          <View
            style={{
              backgroundColor: colors.accentBg,
              borderRadius: 12,
              padding: 16,
              gap: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ gap: 10 }}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Text>Account</Text>
                <Text>{premiseData.accountId}</Text>
              </View>

              <View>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Text>Premise</Text>
                  <Text>{premiseData.premise}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Text>Meter</Text>
                  <Text>{premiseData.customerId}</Text>
                </View>
              </View>
            </View>
            <View style={{ gap: 10, alignItems: 'center' }}>
              <View
                style={{
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  backgroundColor: colors.gas,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{ width: 20, height: 30 }}
                  source={require('../assets/images/fire_light_white.png')}
                />
              </View>
              <Text>GAS</Text>
            </View>
          </View>

          {isRunning && (
            <View>
              <Text>{formatTimeMM_SS(timeLeft)}</Text>
            </View>
          )}
          {showSafetyTimerButton && (
            <View style={{ width: '100%', bottom: 0 }}>
              <Button
                mode="contained"
                textColor={isDarkTheme ? colors.primaryText : colors.container}
                buttonColor={isRunning ? colors.timerRed : colors.brandColor}
                style={{ borderColor: 'transparent', borderRadius: 4 }}
                onPress={switchTimer}
              >
                {!isRunning
                  ? 'Switch On Safety Timer'
                  : ' Switch off Safety Timer'}
              </Button>
            </View>
          )}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};
export default Home;
