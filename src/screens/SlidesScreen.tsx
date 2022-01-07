import React, { useState } from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {items, Slide} from '../data/SlideShow.data';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SlidesScreen = () => {
  const {width: widthScreen} = Dimensions.get('screen');
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          //backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        layout="default"
        onSnapToItem={(index: number) => {
          setActiveIndex(index);
        }}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 20,
          backgroundColor: '#5856D6',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontWeight: 'bold',
  },
});
