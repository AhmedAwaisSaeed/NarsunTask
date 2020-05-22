import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopScreen from '../screens/TopScreen';
import TagsScreen from '../screens/TagsScreen';
import PeopleScreen from '../screens/PeopleScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TopTab = createMaterialTopTabNavigator();

const TopNavigation = (props) => {

    const PeopleScreenTwo = () => (
        <PeopleScreen searchTerm={props.searchTerm} allData={props.allData} />
      );
      
    let term=props.searchTerm;
    // console.warn("props=",props.searchTerm);
    return (
        <TopTab.Navigator
        
        tabBarOptions={{
          activeTintColor:"#366E3C",
          inactiveTintColor:"#FFFF",
          style: { backgroundColor: '#222222' },
          indicatorStyle:{
            backgroundColor:"#366E3C"
          },
          labelStyle:{

                  fontSize: hp('2%'),
                  fontWeight: '700',
                  color: '#FFFF',

          }
        }}
        >
        <TopTab.Screen name="Top" component={TopScreen} />

        
        {/* <TopTab.Screen name="People" component={() => <PeopleScreen searchTerm={term} />}  */}
         <TopTab.Screen name="People" component={PeopleScreenTwo} 
        // initialParams={{ searchTerm: term }}
        />
        <TopTab.Screen name="Tags" component={TagsScreen} />
      </TopTab.Navigator>
    )
}

export default TopNavigation;

const styles = StyleSheet.create({

})
