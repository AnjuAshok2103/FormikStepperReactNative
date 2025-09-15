import { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Circle, Text as SVGText, Svg } from 'react-native-svg';
import Icon from '@react-native-vector-icons/material-design-icons';
import { styles } from '../styles';

interface CircularProgressProps {
  size: number;
  text: string;
  strokeWidth: number;
  steps: number;
  activeStep: number;
  textDescription: string;
  openSheet?: Function;
}
const CircularProgress = (props: CircularProgressProps) => {
  const {
    size,
    strokeWidth,
    text,
    activeStep,
    steps,
    textDescription,
    openSheet,
  } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const percentage = (activeStep / steps) * 100;
  const svgProgress = circum - (circum * percentage) / 100;

  return (
    <View style={styles.progressCircle}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={'#ABACBE'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <Circle
          stroke={'green'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum}`}
          strokeDashoffset={svgProgress}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />

        {/* Text */}
        <SVGText
          fontSize={10}
          fontWeight="bold"
          x={size / 2}
          y={size / 2 + 5}
          textAnchor="middle"
          fill={'black'}
        >
          {`${activeStep} of ${steps}`}
        </SVGText>
      </Svg>
      <View
        style={{
          ...styles.flex1,
          ...styles.flexDirectionR,
          ...styles.justifySpaceBetween,
          ...styles.marginLeft20,
        }}
      >
        <View style={[styles.flexDirectionC, styles.flexShrink1]}>
          {/* Force vertical stacking */}
          <Text
            style={{
              ...styles.mediumVariantTextSize,
              color: '#ABACBE',
              ...styles.textTransformCapitalise,
            }}
            numberOfLines={2}
          >
            {textDescription}
          </Text>
          <Text
            style={{
              ...styles.largeTextSize,
              ...styles.fontW400,
              color: 'green',
              ...styles.textTransformCapitalise,
            }}
            numberOfLines={2}
          >
            {text}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            ...styles.justifyC_center,
          }}
          onPress={() => {
            openSheet && openSheet();
          }}
        >
          <Icon name={'information-outline'} size={25} color={'#ABACBE'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CircularProgress;
