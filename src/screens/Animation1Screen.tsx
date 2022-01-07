import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Animation1Screen = () => {
  const {top} = useSafeAreaInsets();
  const [text, setText] = useState();
  return (
    <View style={{...styles.container, marginTop: top}}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="texto"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    borderRadius: 8,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
  },
});
