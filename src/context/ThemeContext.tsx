import React, {createContext, useEffect, useReducer} from 'react';
import {useColorScheme} from 'react-native';
import {themeReducer, ThemeState} from './ThemeReducer';

const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  divideColor: 'grey',
  colors: {
    primary: 'blue',
    background: 'white',
    card: 'yellow',
    text: 'black',
    border: 'teal',
    notification: 'pink',
  },
};
const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  divideColor: 'white',
  colors: {
    primary: 'red',
    background: 'black',
    card: 'white',
    text: 'white',
    border: 'black',
    notification: 'black',
  },
};

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  //watcher para ver si el tema ha sido cambiado desde los ajustes del teléfono
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    watchColorThemeChages();
  }, [colorScheme]);

  const watchColorThemeChages = () => {
    colorScheme === 'dark' ? setDarkTheme() : setLightTheme();
  };

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme', payload: darkTheme});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme', payload: lightTheme});
  };

  const value = {
    setDarkTheme,
    setLightTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
