import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChartBarIcon, HomeIcon, MagnifyingGlassIcon, TrophyIcon, UserIcon } from 'react-native-heroicons/solid';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#6231AD',
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'Home';
          } else if (route.name === 'Profile') {
            iconName = 'Profile';
          }
          else if (route.name === 'Leagues') {
            iconName = 'Leagues';
          }
          return <TabBarIcon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="Home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Leagues',
          tabBarIcon: ({ color, size }) => (
            <TrophyIcon name="Leagues" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassIcon name="Search" color={color} size={size} />
          ),
        }}
      />
           <Tab.Screen
        name="Leaderboard"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({ color, size }) => (
            <ChartBarIcon name="Leaderboard" color={color} size={size} />
          ),
        }}
      />
         <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <UserIcon name="Profile" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home1"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
