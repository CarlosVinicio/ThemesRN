import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);
  const {colors} = theme;
  const onPressButton = () => {
    if (theme.currentTheme === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <Text>Tema</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[style.button, {backgroundColor: colors.primary}]}
          onPress={onPressButton}>
          <Text style={[style.textButton, {color: 'white'}]}>Botón</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    width: 150,
    height: 50,
    marginTop: 20,
  },
  textButton: {fontSize: 22, textAlign: 'center', color: 'white'},
});
