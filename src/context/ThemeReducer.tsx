import {Theme} from '@react-navigation/native';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  divideColor: string;
}

type ThemeAction =
  | {type: 'set_light_theme'; payload: ThemeState}
  | {type: 'set_dark_theme'; payload: ThemeState};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return action.payload;
    case 'set_dark_theme':
      return action.payload;
    default:
      return state;
  }
};
