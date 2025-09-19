import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { MD3LightTheme as PaperDefaultTheme } from 'react-native-paper';

const MyDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  roundness: 2,
  config: {
    fontFamily: [
      'Inter-Regular',
      'Inter-Black',
      'Inter-Bold',
      'Inter-ExtraBold',
      'Inter-ExtraLight',
      'Inter-Light',
      'Inter-Medium',
      'Inter-SemiBold',
      'Inter-Thin',
    ],
  },
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    //using new colors mentioned in Figma
    //customColors
    brandColor: '#0F356A',
    utiliron: '#0F356A',
    darkUtiliron: '#A3BDE2',
    text: '#E2EEFF',
    h1Text: '#001025',
    primaryText: '#393A3E',
    secondaryText: '#484964',
    tertiaryText: '#797a8a',

    water: '#4C91F1',
    gas: '#F0CA53',
    electric: '#EF6357',

    accentBg: '#F0F1FA',
    pageBg: '#F6F6F9',
    container: '#FDFDFD',

    success: '#00A129',
    warning: '#EEA62E',
    error: '#C91010',
    inActive: '#ABACBE',
    outline: '#CDCDCD',
    link: '#2B62AF',

    hoverRow: '#F6F6FB',
    buttonElement: '#DBE5F5',
    toastBg: '#DDF0FF',
    errorToastBg: '#FFE3E2',
    placeholder: '#b8b8b8',
    blue: '#29C5F6',
    infoBlock: '#DDF0FF',
    chipSuccess: '#E4F5DA',
    chipError: '#FFE3E2',
    chipAlert: '#FFF3DD',
    timerRed: '#C91010',
  },
  fonts: {
    ...NavigationDefaultTheme.fonts,
    ...PaperDefaultTheme.fonts,
  },
};
export default MyDefaultTheme;
