import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

//@Flow



class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('./img/profile.jpg')}
          style={{ width: 30, height: 30, marginRight:10,justifyContent:'flex-end'}}
        />
      );
    }
  }


  export {LogoTitle};
