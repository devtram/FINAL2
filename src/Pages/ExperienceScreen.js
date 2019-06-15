
import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import {LogoTitle} from "./index"
import { ActionConst, Actions } from "react-native-router-flux";

//@Flow

class ExperienceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      title: 'Muhammad Tayyab Rana',

    
    };
  };
  

  render() {
    return (
      
      <View>

      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EXPERIENCE:</Text>
      
      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Computer Operator:</Text>  {'\n'}
      - 15th July 2007 - 31st Dec 2007 (Paramount Lace Company)  {'\n'}
      - Data Entry And Office Related work  {'\n'}

      {'\n'}
      </Text>

      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Medical Transcriptionist:</Text>  {'\n'}
      - 15th July 2008 - 31st July 2010 (Labest Pathological Lab.)  {'\n'}
      - X-ray, Ultrasound, Laboratory Reports Typing and Other Office Related Work  {'\n'}

      {'\n'}
      </Text>

      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Excel iMacro, VBA Programming </Text>  {'\n'}
      - 15th July 2009 - Present (SEOCLIFF)  {'\n'}
      - Data Entry And Office Related work  {'\n'}

      {'\n'}
      </Text>

      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Presentation Designs:</Text>  {'\n'}
      - Jan 2011 - Present (Upwork, Fiverr)  {'\n'}
      - Design corporate level presentations for meetings, conferences, webinars, courses, infographics, etc.  {'\n'}
      {'\n'}
      </Text>
         
      

 
  
      <Button
        onPress={() =>   Actions.objective() }
        title="Objective" style={{backgroundColor:'red', margin:3}}
      />
      <Text></Text>

        
      <Button
        onPress={() =>   Actions.education() }
        title="Education" style={{backgroundColor:'red', marginBottom:3}}
      />
      <Text ></Text>


     
      </View>
     
    );
  }
}

export {ExperienceScreen}


const styles ={
  'para':{
    'fontSize': 15,
    'paddingTop':15,
     'paddingLeft':5, 
     'paddingBottom':80
  }
}