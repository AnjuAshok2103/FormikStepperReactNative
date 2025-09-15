/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/main';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const navigationRef = useNavigationContainerRef();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <PaperProvider>
          <NavigationContainer ref={navigationRef}>
            <MainStackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
