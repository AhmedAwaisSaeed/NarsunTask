import 'react-native-gesture-handler';
import * as React from 'react';
import { Image,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResultScreen from './src/screens/Results';
import HomeScreen from './src/screens/Home';
import NotificationScreen from './src/screens/Notifications';
import ProfileScreen from './src/screens/Profile';
import { width } from './src/UtilMethods/Utils';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    
    tabBarOptions={{
      activeTintColor: '#366E3C',
        showLabel: false,
        activeBackgroundColor:"#222222",
        inactiveBackgroundColor:"#222222",
        
    
    }}>

<Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/home.png')} name="home" style={{width: width('8'), height: width('8'),tintColor:color}} />
          ),
        }}
      />

    <Tab.Screen
        name="Results"
        component={ResultScreen}
        options={{
          tabBarLabel: 'Results',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/people.png')} name="results" style={{width: width('8'), height: width('8'),tintColor:color}} />
          ),
        }}
      />

    <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color,size }) => (
            <Image source={require('./src/assets/notification.png')} name="notification" style={{width: width('8'), height: width('8'),tintColor:color}} />
          ),
        }}
      />


<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color,size }) => (
            <Image source={require('./src/assets/usericon.png')} name="profile" style={{width: width('8'), height: width('8'), tintColor:color}} />
          ),
        }}
      />


      
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <MyTabs />
    </NavigationContainer>
  );
}