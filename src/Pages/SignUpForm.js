import React, { Component } from "react";
import {Alert} from "react-native";
import { CustomButton, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser} from "../actions"
import Router from "../Router";

class SignUpForm extends Component {
    onEmailChange(text){
    this.props.emailChanged(text);
  //lert.alert(text+" and password is")

    }

      onPasswordChange(text){
      this.props.passwordChanged(text);
      }
  
      onSignUp(email,password){
       
        console.log("Your Email is"+email+" "+password)
        this.props.loginUser(email,password);


        }
      
      
  
  

  render() {
    




    return (
      <Card>
        <CardSection>
          <Input autoCorrect placeholder="user@gmail.com" label="Email: "
          onChangeText={this.onEmailChange.bind(this)}  value={this.props.email}/>
        </CardSection>
        <CardSection>
          <Input secureTextEntry placeholder="password" label="password" value={this.props.password}  onChangeText={this.onPasswordChange.bind(this)}   />
        </CardSection>
        <CardSection>
          <CustomButton onPress={() => this.onSignUp(this.props.email,this.props.password)}> Sign Up</CustomButton>
        </CardSection>
      </Card>
                  

    );
  }
}
//export default connect(null,emailChanged) (LoginForm);

export {SignUpForm}