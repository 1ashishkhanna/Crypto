import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import TabView from '../../component/TabView/TabView';
import Profile from '../../component/Profile/Profile';

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
        {/* <ScrollView>
          <Profile />
          <View style={styles.tabview}>
            <TabView />
          </View>
        </ScrollView> */}
        <ScrollView className="flex-1 ">
          <TabView />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
