import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {EducationScreen, ExperienceScreen, ObjectiveScreen, LoginForm} from "./src/Pages";
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="objective" component={ObjectiveScreen} title="Objective" initial={true} />
          <Scene key="experience" component={ExperienceScreen} title="Experience" />
          <Scene key="education" component={EducationScreen} title="Education" />
          {/* <Scene key="login" component={LoginForm} title="Login" /> */}
        </Scene>
      </Router>

    )
  }
}