
import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

//@Flow

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./img/profile.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
      
    ),
    
  };

  render() {
    return (
      <View>

           
      
      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>OBJECTIVE</Text>
      
<Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>To work in a respectable and reputable corporation and achieve the maximum opportunities.
In this view of following facts. If I will be get an opportunity to serve under you kind contrl, I would justify my selection. {'\n'}{'\n'}{'\n'}</Text>
         
    <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Resume Details"
      />    


     </View>

    );
  }
}