import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';

interface MenuItem {
  name: string;
  icon: string;
  component?: any;
}

const menu = [
  {name: 'Animation1', icon: 'cube-outline', component: 'Animation1'},
  {name: 'SlidesScreen', icon: 'checkbox', component: 'SlidesScreen'},
  {
    name: 'ChangeThemeScreen',
    icon: 'build-outline',
    component: 'ChangeThemeScreen',
  },
];

export const HomeScreen = () => {
  const navigation = useNavigation();

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const renderItem = (item: MenuItem) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        onPress={() => navigation.navigate(item.component)}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={item.icon} size={20} style={{color: colors.primary}} />
          <Text style={{...style.titleList, color: colors.text}}>
            {item.name}
          </Text>
        </View>
        <Icon
          name={'arrow-forward'}
          size={20}
          style={{color: colors.primary}}
        />
      </TouchableOpacity>
    );
  };

  const renderHeaderList = () => {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Opciones</Text>
      </View>
    );
  };

  const renderItemSeparator = () => {
    return (
      <View style={{...style.separator, borderColor: theme.divideColor}} />
    );
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <SafeAreaView>
        <FlatList
          data={menu}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.name}
          ListHeaderComponent={() => renderHeaderList()}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  titleList: {marginLeft: 10, fontSize: 20},
  separator: {marginBottom: 10, borderBottomWidth: 2, opacity: 0.4},
});
