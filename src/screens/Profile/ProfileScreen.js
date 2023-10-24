import {ScrollView, SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Profile from '../../component/Profile/Profile';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className=" flex-1  bg-white">
      <ScrollView>
        <Profile />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
