import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

//@Flow


class BioDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Personal Details',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'aquamarine', paddingLeft:10 }}>
         <Text style={{paddingTop:15,fontWeight:'bold', fontSize: 30}}>Personal Details:{'\n'}</Text>
      
        
        <Text>Phone Number: 0315-2019137</Text>

        <Text>Father Name: Rana Abdul Khalil (Late)</Text>
        
        <Text>Religion: Islam {'\n'}{'\n'}{'\n'}</Text>
        <Text>Nationality: Pakistani {'\n'}{'\n'}{'\n'}</Text>
        

        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      
    
       
      </View>
    );
  }
}
