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
class Home extends Component {
constructor(props) {
super(props);
this.state={
}
}
render(){
return (
<>
<StatusBar barStyle='light-content' />
 <SafeAreaView style={{flex:1}}>
<View><Text>Home</Text></View>
</SafeAreaView>
</>
);
}
}
const styles = StyleSheet.create({
 scrollView: {
flex:1,
backgroundColor:'pink'
},
});
export default Home;