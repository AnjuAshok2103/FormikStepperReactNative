import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';

const MyDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  dark: true,
  roundness: 2,
  config: {},
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    //customColors
    brandColor: '#263A67',
    utiliron: '#A3BDE2',
    darkUtiliron: '#A3BDE2',
    text: '#001025',
    h1Text: '#E2EEFF',
    primaryText: '#D9DCEB',
    secondaryText: '#C2C2D2',
    tertiaryText: '#9191A8',

    water: '#437FD8',
    gas: '#DDBC54',
    electric: '#E04F42',

    accentBg: '#2C334A',
    pageBg: '#1D1D30',
    container: '#262938',

    success: '#54AD7D',
    warning: '#EEB62E',
    error: '#F57676',
    inActive: '#99A4CF',
    outline: '#4C4F68',
    link: '#44A5FF',

    hoverRow: '#313642',
    buttonElement: '#263A67',
    toastBg: '#DDF0FF',
    errorToastBg: '#FFE3E2',
    placeholder: '#A9B4B2',
    blue: '#5CC5ED',
    infoBlock: '#263A67',
    chipSuccess: '#54AD7D',
    chipError: '#F57676',
    chipAlert: '#EEB62E',
    timerRed: '#C91010',
    //
  },
  fonts: {
    ...NavigationDarkTheme.fonts,
    ...PaperDarkTheme.fonts,
  },
};
export default MyDarkTheme;
