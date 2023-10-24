import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import TabView from '../../component/TabView/TabView';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <>
      <SafeAreaView className=" flex-1 bg-white">
        <TabView />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
