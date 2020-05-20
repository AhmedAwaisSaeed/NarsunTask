import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

  const TopBar = (props)=>{
    return (
      <>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.SideMenuIconView}
            onPress={() => props.openSideMenu()}>
            <Image
              style={styles.SideMenuImageStyle}
              source={require('../assets/menu.png')}></Image>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              // backgroundColor:"blue",
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.boldTextStyle}>Results</Text>
          </View>

          <View
            style={{
              flex: 1,
              // backgroundColor:"orange",
              paddingRight: 15,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.boldTextStyle}>Icon</Text>
          </View>
        </View>
      </>
    );
  }
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#354AAA',
  },

  SideMenuIconView: {
    flex: 1,
    // backgroundColor:"green",
    paddingLeft: 15,
    justifyContent: 'center',
  },
  SideMenuImageStyle: {
    height: 50,
    width: 30,
    tintColor: '#FFFF',
    resizeMode: 'contain',
  },

  boldTextStyle: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#FFFF',
  },
});
export default TopBar;
