
import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import {LogoTitle} from "./index"
import { ActionConst, Actions } from "react-native-router-flux";


//@Flow

class ObjectiveScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      title: 'Muhammad Tayyab Rana',

    
    };
  };
  
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white', paddingLeft: 5, }}>
        <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>Objective:</Text>
      
        <Text style={styles.para}>
        My Objective to become a team player within organization to deliver what I capable of not just what I have got from my experience. Also, I would take it as an opporutnity to learn from the seniors who will help altogether to grow the organization. 
        </Text>
        

   {/*     Button title="Submit" onPress= {() => 
          // this.props.navigation.navigate('Home', {
          //     fullName: 'Ahmed Shabbir',
          //     userName: 'Ahmed1922',
          //     password: '123'
          //   })}
   //>
 */}
        
        
        

         
       
  
        
      <Button
        onPress={() =>   Actions.education() }
        title="Education" style={{backgroundColor:'red', marginBottom:3}}
      />
      <Text ></Text>


      <Button
        onPress={() =>   Actions.experience() }
        title="Experience" style={{backgroundColor:'red', margin:3}}
      />

      <Text></Text>
      <Text></Text>
{/*       
      <Button
        onPress={() =>   Actions.login() }
        title="Login" style={{backgroundColor:'red', margin:3}}
      /> */}

      </View>
    );
  }

 
}



export {ObjectiveScreen};

const styles ={
  'para':{
    'fontSize': 15,
    'paddingTop':15,
     'paddingLeft':5, 
     'paddingBottom':80
  }
}