import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Animation1Screen} from '../screens/Animation1Screen';
import {SlidesScreen} from '../screens/SlidesScreen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animation1" component={Animation1Screen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
