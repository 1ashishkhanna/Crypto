import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {InformationCircleIcon} from 'react-native-heroicons/outline';
import {ClockIcon, UserIcon} from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import NumPicker from './NumPicker';

const First = () => {
  const [open, setOpen] = useState(false);

  const couponopen = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const {height, width} = Dimensions.get('screen');
  return (
    <>
      <View>
        <Text className="text-lg font-semibold">Today’s Games</Text>
        <View className="mt-5 border border-[#EEEAF3]   flex-col ">
          <View className="   bg-[#6231AD]">
            <View>
              <View className="flex-row justify-between px-4 pt-4 ">
                <View className="flex-row space-x-2 items-center ">
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
                    className="text-[#D2BAF5] font-bold uppercase">
                    Under or Over
                  </Text>
                  <InformationCircleIcon color={'#D2BAF5'} size={18} />
                </View>
                <View className="flex-row space-x-2 items-center ">
                  <Text
                    className="text-[#D2BAF5]   "
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}>
                    Starting in
                  </Text>
                  <ClockIcon color={'#D2BAF5'} size={18} />
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                    className="text-[#D2BAF5] ">
                    03:23:12
                  </Text>
                </View>
              </View>

              <View className=" relative">
                <View className="px-4 py-3 z-20">
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                    className="text-[#D2BAF5] ">
                    Bitcoin price will be under
                  </Text>
                  <View className="flex-row items-center space-x-1">
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                      className="  text-white text-base ">
                      $24,524
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                      className="text-white  ">
                      at 7 a ET on 22nd Jan’21
                    </Text>
                  </View>
                </View>
              </View>
              <View className="absolute bottom-0 right-0">
                <View className=" ">
                  <Image
                    className="  w-32   h-14 "
                    source={require('../../assets/Ellipse315.png')}
                  />
                  <View className=" absolute right-2  bottom-0">
                    <Image
                      className=" w-20"
                      source={require('../../assets/Group12375.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className=" p-4  bg-white">
            <View className="  space-y-4">
              <View className=" flex-row justify-between">
                <View className=" flex-col space-y-1">
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
                    className="  text-[#B5C0C8]  uppercase ">
                    Prize Pool
                  </Text>
                  <Text className="  font-bold text-base">$12,000</Text>
                </View>
                <View className=" flex-col space-y-1">
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
                    className=" text-[#B5C0C8] uppercase ">
                    UNDER
                  </Text>
                  <Text className="   font-bold text-base">3.35X</Text>
                </View>
                <View className=" flex-col space-y-1">
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
                    className=" text-[#B5C0C8]  uppercase ">
                    OVER
                  </Text>
                  <Text className="t font-bold ">1.25X</Text>
                </View>
                <View className=" flex-col space-y-1">
                  <Text
                    style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
                    className=" text-[#B5C0C8]  uppercase ">
                    ENTERY FEES
                  </Text>
                  <View className="flex-row items-center space-x-2 justify-end">
                    <Text className="  font-bold text-base">5</Text>
                    <Image
                      className=" w-5 h-5"
                      source={require('../../assets/25498.png')}
                    />
                  </View>
                </View>
              </View>
              <View className="flex-col space-y-4">
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                  className=" font-bold  text-[#727682]">
                  What’s your prediction?
                </Text>

                <View className="flex-row   space-x-4">
                  <TouchableOpacity className="bg-[#452C55] py-3 px-5 flex-1   rounded-full flex-row items-center justify-center space-x-2   ">
                    <Image
                      className="w-3 h-4"
                      source={require('../../assets/Fill5.png')}
                    />
                    <Text
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                      className="text-white font-bold   text-center">
                      Under
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={couponopen}
                    className="bg-[#6231AD] py-3 px-5 flex-1   rounded-full flex-row items-center justify-center space-x-2   ">
                    <Image
                      className="w-3 h-4 rotate-180"
                      source={require('../../assets/Fill5.png')}
                    />
                    <Text
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                      className="text-white font-bold  text-center">
                      Over
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View className=" p-4 mt-2  flex-col space-y-4 bg-[#F6F3FA]">
            <View className="flex-row justify-between">
              <View className="flex-row items-center space-x-2">
                <UserIcon color={'#727682'} size={20} />
                <Text
                  style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                  className=' font-semibold   text-["#727682"]'>
                  355 Players
                </Text>
              </View>
              <TouchableOpacity className="flex-row items-center space-x-2">
                <Image
                  className="w-6 h-4"
                  source={require('../../assets/Vector.png')}
                />
                <Text
                  style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                  className=' font-semibold  text-["#727682"]'>
                  View chart
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex-row justify-center">
              <Progress.Bar
                progress={0.8}
                width={width - 70}
                height={8}
                color="#FE4190"
                className="bg-[#2DABAD] "
              />
            </View>
            <View className="flex-row justify-between">
              <View className="flex-row items-center space-x-2">
                <Text
                  style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                  className=" text-[#B5C0C8]">
                  232 predicted under
                </Text>
              </View>

              <Text
                style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                className=" text-[#B5C0C8]">
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={() => setOpen(false)}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView} className="z-10">
                <View className="mt-5 mx-5">
                  <View className="justify-center flex-row">
                    <TouchableOpacity
                      onPress={closeModal}
                      className="bg-[#B5C0C8] rounded w-12 h-1"></TouchableOpacity>
                  </View>

                  <View className=" my-5  flex-col space-y-4">
                    <Text className=" text-base font-semibold">
                      Your Prediction is Under
                    </Text>

                    <View className="">
                      <Text
                        style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}
                        className="  text-[#727682]  uppercase">
                        Entry tickets
                      </Text>
                      <NumPicker />
                    </View>

                    <TouchableOpacity
                      onPress={closeModal}
                      className="bg-[#6231AD] px-4 py-3   rounded-full  ">
                      <Text
                        style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
                        className="text-center text-white font-bold ">
                        Submit my prediction
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default First;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',

    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,

    shadowColor: '#000',
    width: '100%',
    height: '55%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
