import React,{Component} from  'react';
import
{
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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class ControlPanel extends Component {
constructor(props) {
super(props);
this.state={
}
}
render(){
return (
<>

 <SafeAreaView style={{flex:1,backgroundColor:"#354AAA"}}>

     <View><Text style={styles.boldTextStyle}>Side Menu</Text></View>

</SafeAreaView>
</>
);
}
}
const styles = StyleSheet.create({
    boldTextStyle:{
        fontSize:hp('2%'),
                fontWeight:"bold",
                color:"#FFFF"
    
      }
});
export default ControlPanel;