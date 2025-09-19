// context/CustomThemeContext.tsx
import React, { createContext, JSX, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MyDarkTheme from '../themes/dark';
import MyDefaultTheme from '../themes/default';

// Define the theme preference types
export type AppTheme = 'DARK' | 'LIGHT' | 'SYSTEM';

interface CustomThemeProps {
  currentAppTheme: AppTheme;
  isDarkTheme: boolean;
  theme: any;
  switchTheme: (newTheme: AppTheme) => void;
}

export const CustomThemeContext = createContext<CustomThemeProps>({
  currentAppTheme: 'SYSTEM',
  isDarkTheme: false,
  theme: MyDefaultTheme,
  switchTheme: () => {},
});

interface CustomThemeContextProviderProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export default function CustomThemeContextProvider(
  props: CustomThemeContextProviderProps,
) {
  const systemScheme = useColorScheme();
  const [currentAppTheme, setCurrentAppTheme] = useState<AppTheme>('SYSTEM');

  // A helper variable to determine the *actual* color scheme
  const actualColorScheme =
    currentAppTheme === 'SYSTEM' ? systemScheme : currentAppTheme.toLowerCase();

  // The theme object to be passed to PaperProvider and NavigationContainer
  const theme = actualColorScheme === 'dark' ? MyDarkTheme : MyDefaultTheme;

  const isDarkTheme = actualColorScheme === 'dark';

  const contextValue = useMemo(
    () => ({
      currentAppTheme,
      isDarkTheme,
      theme,
      switchTheme: (newTheme: AppTheme) => {
        setCurrentAppTheme(newTheme);
      },
    }),
    [currentAppTheme, isDarkTheme, theme],
  );

  return (
    <CustomThemeContext.Provider value={contextValue}>
      {/* PaperProvider should be a child of the context provider */}
      <PaperProvider theme={theme}>{props.children}</PaperProvider>
    </CustomThemeContext.Provider>
  );
}
