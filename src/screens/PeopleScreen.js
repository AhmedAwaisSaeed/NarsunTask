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
      allData: [],
      refresh: false,
      loader: false,
      tags: [],
    };
  }

  componentDidMount() {
    this.setState({
      loader: true,
    });

    fetch('https://www.quartrly.com:5558/users/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('response is=', responseJson);

        if (responseJson.success) {
          this.setState({
            loader: false,
            allData: responseJson.data,
          });
        } else {
          this.setState({
            loader: false,
          });

          alert('data not found');
        }
      })
      .catch(error => {
        console.log('error is', error);
        console.error(error);
      });
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

    if (this.state.loader) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#212121',
          }}>
          <ActivityIndicator size="large" color="#366E3D" />
        </View>
      );
    } else {
      return (
        <>
          <View style={{flex: 1, backgroundColor: '#212121'}}>
            <ScrollView>
              {filteredData.map(item => {
                return (
                  <UserReview item={item} tags={this.state.tags}></UserReview>
                );
              })}
            </ScrollView>
          </View>
        </>
      );
    }
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
