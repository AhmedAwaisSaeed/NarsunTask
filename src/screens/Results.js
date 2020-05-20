import React,{Component} from 'react';
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
import SearchInput, { createFilter } from 'react-native-search-filter';
import TopNavigation from '../components/TopNavigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const KEYS_TO_FILTERS = ['name', 'rating','tags'];

class Results extends Component {


  constructor(props) {
  super(props);
  this.state={
    search:'',
    allData:[],
    refresh:false,
    loader:false,
    tags:[
      "ss",
      "dd",
      "ee"
    ]
  }
  }


  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  onSearch = (search)=>{

    console.log("search is=",search);
    this.setState({
      search:search,
      
    })
    

  }


  render(){
    
    if(this.state.loader)
    {
      return(
        
      
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
   
      )
    }
    
    else{
  return (
    <>
      <Drawer
      type="overlay"
      tapToClose={true}
      openDrawerOffset={0.2}
      onClose={this.closeControlPanel}
      ref={(ref) => this._drawer = ref}
      content={<ControlPanel>
        </ControlPanel>
        }>
      <SafeAreaView style={{flex:1,backgroundColor:"#212121"}}>
        

        <TopBar
        openSideMenu={this.openControlPanel}></TopBar>



          <View style={{flexDirection:"row",backgroundColor:"#FFFF",height:50,borderWidth:0,borderRadius:15,margin:5}}>
            
          <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",paddingRight:20}}>
              
            </View>


            <TextInput
            style={{fontWeight:"700",flex:1}}
             onChangeText={(search) => this.onSearch(search)}
             value={this.state.search}
             placeholder="Search for a person or #tag"
             placeholderTextColor="#9B9B9B"
            >

            </TextInput>


            <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",paddingRight:20}}>
              <Image source={require('../assets/search.png')}></Image>
            </View>




          </View>


          <View style={{flex:1}}>
                <TopNavigation
                searchTerm={this.state.search}
                ></TopNavigation>
          

{/* SearchBarEnd */}





        </View>
      </SafeAreaView>
      </Drawer>
    </>
  );
      }
 }
};

const styles = StyleSheet.create({
  starBackground:{
    backgroundColor:"green"
  },

  boldTextStyle:{
    fontSize:hp('2%'),
            fontWeight:"bold",
            color:"#FFFF"

  },
  whiteText:{
    fontSize:hp('2%'),
    fontWeight:"bold",
    color:"#FFFF"

  },
  yellowText:{
    fontSize:hp('2%'),
    fontWeight:"bold",
    color:"#D4BA52"
  }
  
  
});

export default Results;
