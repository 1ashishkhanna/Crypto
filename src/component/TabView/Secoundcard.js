import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';


const Secoundcard = () => {
  return (
    <View className="flex-col mx-5 my-5 space-y-4 ">
      <TouchableOpacity className="border p-4 flex-row space-x-4 rounded-lg border-[#EEEAF3] bg-white">
        <Image
        style={{width:60,height:60}}
          source={require('../../assets/Group12664.png')}
        />
        <View className=" flex-1">
          <View className="flex-row space-x-3">
            <Text  style={{fontFamily: 'Montserrat-Regular', fontSize: 14}} className="font-bold text-[#333]">
              First Stripe Earned
            </Text>
            <Text
            style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
            className="font-bold text-[#FFA600]">x 3</Text>
          </View>

          <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 14}} className="  text-[#727682] ">
            Top 10% of highest spending players in a month
          </Text>
        </View>
      </TouchableOpacity>
 
      <TouchableOpacity className="border p-4 flex-row space-x-4 rounded-lg border-[#EEEAF3] bg-white">
        <Image
        style={{width:60,height:60}}
          source={require('../../assets/Group12664.png')}
        />
        <View className=" flex-1">
          <View className="flex-row space-x-3">
            <Text  style={{fontFamily: 'Montserrat-Regular', fontSize: 14}} className="font-bold text-[#333]">
              First Stripe Earned
            </Text>
            <Text
            style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
            className="font-bold text-[#FFA600]">x 3</Text>
          </View>

          <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 14}} className="  text-[#727682] ">
            Top 10% of highest spending players in a month
          </Text>
        </View>
      </TouchableOpacity>
 
      <TouchableOpacity className="border p-4 flex-row space-x-4 rounded-lg border-[#EEEAF3] bg-white">
        <Image
        style={{width:60,height:60}}
          source={require('../../assets/Group12664.png')}
        />
        <View className=" flex-1">
          <View className="flex-row space-x-3">
            <Text  style={{fontFamily: 'Montserrat-Regular', fontSize: 14}} className="font-bold text-[#333]">
              First Stripe Earned
            </Text>
            <Text
            style={{fontFamily: 'Montserrat-Regular', fontSize: 14}}
            className="font-bold text-[#FFA600]">x 3</Text>
          </View>

          <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 14}} className="  text-[#727682] ">
            Top 10% of highest spending players in a month
          </Text>
        </View>
      </TouchableOpacity>
 
  
      
  
    </View>
  );
};

export default Secoundcard;
