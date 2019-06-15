import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import {EducationScreen, ExperienceScreen, ObjectiveScreen} from "./Pages/";

//@Flow

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
 
  Education: {
    screen: EducationScreen
  },
  Experience: {
    screen: ExperienceScreen
  },

  
  
});

//LEARN ABOUT NAVIGATION 'props'
//navigation events:
/* navigation - navigation props (optional, defaults to reading from React context)
onWillFocus - event listener
onDidFocus - event listener
onWillBlur - event listener
onDidBlur - event listener */



//leftside menu
const DrawerMenu = createAppContainer(MyDrawerNavigator);


export default class DrawerNav extends React.Component {
  render() {
    return <DrawerMenu />;
  }
}