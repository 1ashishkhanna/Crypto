import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Secoundcard from './Secoundcard';
import First from './First';

const FirstRoute = () => (
  <View className=" flex-1 bg-white">
    <ScrollView>
      <First />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View className=" flex-1 bg-[#F6F3FA]">
    <ScrollView>
      <Secoundcard />
    </ScrollView>

  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#6231AD'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => (
      <Text
        className=" text-base py-4"
        style={{color: focused ? '#6231AD' : 'black'}}>
        {route.title}
      </Text>
    )}
  />
);

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Games played'},
    {key: 'second', title: 'Badges'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      swipeEnabled={true}
    />
  );
};

export default App;
