import * as React from 'react';
import { useTheme } from 'react-native-paper';
import MyDefaultTheme from '../themes/default';
import MyDarkTheme from '../themes/dark';

export type AppThemeType = typeof MyDefaultTheme | typeof MyDarkTheme;

export const useAppTheme = () => useTheme<AppThemeType>();
