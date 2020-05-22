import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Drawer from 'react-native-drawer';
import ControlPanel from '../components/ControlPanel';
import TopBar from '../components/TopBar';
import UserReview from '../components/UserReview';
import SearchInput, {createFilter} from 'react-native-search-filter';
import TopNavigation from '../components/TopNavigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const KEYS_TO_FILTERS = ['name', 'rating', 'tags'];

class PeopleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.searchTerm,
      allData: this.props.allData,
      refresh: false,
      loader: false,
      tags: [],
    };
  }

 

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  onSearch = search => {
    console.log('search is=', search);
    this.setState({
      search: search,
    });
  };

  render() {
    const filteredData = this.state.allData.filter(
      createFilter(this.state.search, KEYS_TO_FILTERS),
    );

    
      return (
        <>
          <View style={{flex: 1, backgroundColor: '#212121'}}>
            <ScrollView>
              {filteredData.map(item => {
                return (
                  <UserReview item={item} tags={this.state.tags} searchTerm={this.state.search}></UserReview>
                );
              })}

              
            </ScrollView>
          </View>
        </>
      );
    }
  
}

const styles = StyleSheet.create({
  starBackground: {
    backgroundColor: 'green',
  },

  boldTextStyle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#FFFF',
  },
  whiteText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#FFFF',
  },
  yellowText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#D4BA52',
  },
});

export default PeopleScreen;
