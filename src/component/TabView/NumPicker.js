import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, Image} from 'react-native';

function NumPicker({}) {
  const [selectedNumber, setSelectedNumber] = useState(1); // Default selected number is 1

  const numberItems = [];
  for (let i = 1; i <= 20; i++) {
    numberItems.push(<Picker.Item key={i} label={i.toString()} value={i} />);
  }

  return (
    <View className=" ">
      <Picker
        selectedValue={selectedNumber}
        onValueChange={(itemValue, itemIndex) => setSelectedNumber(itemValue)}>
        {numberItems}
      </Picker>
    
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-base text-[#B5C0C8]">You can win</Text>
          <Text className="text-base font-bold text-[#03A67F]"> $2000</Text>
        </View>

        <View className="flex-row items-center space-x-3">
          <Text className="text-base text-[#B5C0C8]">Total</Text>
          <Image
            className=" w-5 h-5"
            source={require('../../assets/25498.png')}
          />
          <Text className=' font-bold text-base'>{selectedNumber}</Text>
        </View>
      </View>
    </View>
  );
}

export default NumPicker;
