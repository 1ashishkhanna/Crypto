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
          className=" w-8 h-8"
          source={require('../../assets/Group12465.png')}
        />

        <Text
          style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}
          className=" text-gray-600 font-semibold">
          Profile
        </Text>
        <TouchableOpacity className="relative">
          <View
            style={{width: 16, height: 16}}
            className="bg-[#6231AD] absolute   rounded-full -right-1 z-10  -top-1 ">
            <Text
              style={{fontFamily: 'Montserrat-Regular', fontSize: 11}}
              className="text-center    text-white">
              1
            </Text>
          </View>

          <ChatBubbleLeftIcon color="#727682" size={30} />
        </TouchableOpacity>
      </View>
      <View className="  flex-col justify-center items-center mt-10 space-y-4">
        <View className="relative">
          <TouchableOpacity
            className="border p-1  rounded-full
       absolute z-10  right-0 bottom-0 bg-white border-[#727682]">
            <PencilSquareIcon size={15} color={'#727682'} className="" />
          </TouchableOpacity>
          <Image
            style={{width: 75, height: 75}}
            className="  z-0 "
            source={require('../../assets/Ellipse1.png')}
          />
        </View>
        <View className=" flex-col space-y-1">
          <Text
            style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
            className=" text-black text-center ">
            Jina Simons
          </Text>
          <Text
            style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
            className=" text-center text-[#727682]  ">
            6000 Pts
          </Text>

          <Text
            style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
            className="text-[#727682]  font-semibold   ">
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 ">
          <ArrowRightOnRectangleIcon color={'#727682'} size={25} />

          <Text
            style={{fontFamily: 'Montserrat-Regular', fontWeight: 500, fontSize:14}}
            className="text-[#727682]   ">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" mt-3">
        <View className="flex-row justify-center z-10 top-4">
          <Image
            style={{width: 26.867, height: 31}}
            source={require('../../assets/Group11345.png')}
          />
        </View>

        <View className=" border px-4 py-6 flex-row  justify-between   border-[#EEEAF3]  rounded">
          <View className="flex-col space-y-2">
            <Text
              style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
              className="text-base text-[#727682] font-bold">
              Under or Over
            </Text>
            <View className="flex-row items-center  space-x-2">
              <Image
                style={{width: 32, height: 32}}
                source={require('../../assets/Group12234.png')}
              />

              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: 800,
                  fontSize: 24,
                }}
                className="  font-bold">
                81%
              </Text>
            </View>
          </View>
          <View className="flex-col space-y-2">
            <Text
              style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
              className="text-base text-[#727682] font-bold">
              Top 5
            </Text>
            <View className="flex-row items-center  space-x-2">
              <Image
                style={{width: 32, height: 32}}
                source={require('../../assets/Group12233.png')}
              />

              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: 800,
                  fontSize: 24,
                }}
                className="">
                -51%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
