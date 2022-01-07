import 'react-native-gesture-handler';
import * as React from 'react';
import {StackNavigation} from './src/navigation/StackNavigation';
import {ThemeProvider} from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <StackNavigation />
    </ThemeProvider>
  );
}
