import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ArrowLongUpIcon,
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftIcon,
  PencilIcon,
  PencilSquareIcon,
} from 'react-native-heroicons/solid';

const Profile = () => {
  return (
    <View className=" mx-5 mt-5 ">
      <View className="flex-row items-center justify-between">
        <Image
          className=" w-10 h-10"
          source={require('../../assets/Group12465.png')}
        />

        <Text className="text-xl text-gray-600">Profile</Text>
        <TouchableOpacity className="relative">
          <View
            className="bg-[#6231AD] absolute right-0 z-10 py-1  px-2 -top-2 "
            style={styles.messageCount}>
            <Text className="text-center text-white">1</Text>
          </View>

          <ChatBubbleLeftIcon color="#727682" size={40} />
        </TouchableOpacity>
      </View>
      <View className="  flex-col justify-center items-center mt-10 space-y-4">
        <View className="relative">
          <TouchableOpacity
            className="border p-1  rounded-full
       absolute z-10  right-0 bottom-0 bg-white">
            <PencilSquareIcon size={20} color={'#727682'} className="" />
          </TouchableOpacity>
          <Image
            className="  z-0 w-24 h-24"
            source={require('../../assets/Ellipse1.png')}
          />
        </View>
        <View className=" flex-col space-y-3">
          <Text className="text-lg text-black text-center ">Jina Simons</Text>
          <Text className=" text-center text-[#727682] text-base ">
            6000 Pts
          </Text>

          <Text className="text-[#727682]  text-lg  font-semibold">
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 ">
          <ArrowRightOnRectangleIcon color={'#727682'} size={30} />

          <Text className="text-[#727682]  text-xl  ">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className=" mt-10">
        <View className='flex-row justify-center z-10 top-5'>
          <Image
            className=" w-9 h-10 "
            source={require('../../assets/Group11345.png')}
          />
        </View>

        <View className=" border px-4 py-6 flex-row  justify-between   border-[#EEEAF3]  rounded">
          <View className="flex-col space-y-2">
            <Text className="text-base text-[#727682] font-semibold">
              Under or Over
            </Text>
            <View className="flex-row items-center  space-x-2">
              <Image
                className=" w-10 h-10"
                source={require('../../assets/Group12234.png')}
              />

              <Text className=" text-3xl font-bold">81%</Text>
            </View>
          </View>
          <View className="flex-col space-y-2">
            <Text className="text-base text-[#727682] font-semibold">
              Top 5
            </Text>
            <View className="flex-row items-center  space-x-2">
              <Image
                className=" w-10 h-10"
                source={require('../../assets/Group12233.png')}
              />

              <Text className=" text-3xl font-bold">-51%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  messageCount: {borderRadius: 50},
});
