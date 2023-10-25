import React, {useState} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Secoundcard from './Secoundcard';
import First from './First';
import Profile from '../Profile/Profile';

const {height, width} = Dimensions.get('window'); // Use 'window' instead of 'screen'

const FirstRoute = () => (
  <View className="bg-white flex-1">
    <ScrollView>
      <View className="mx-5 my-5">
        <First />
      </View>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View className="bg-[#F6F3FA] flex-1">
    <ScrollView>
      <Secoundcard />
    </ScrollView>
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#6231AD'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#6231AD' : 'black',
          fontFamily: 'Montserrat-Regular',
          fontSize: 14,
        }}>
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
    <View className="flex-col space-y-5">
      <Profile />
      <View className="bg-[#F6F3FA] flex-1 " style={{padding:3}}>
        </View>

        <TabView
          style={{height: 600}}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          swipeEnabled={true}
        />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
