import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		ScrollView,
		TextInput, 
		TouchableWithoutFeedback, 
		Keyboard,
		Alert,
		WebView,
		KeyboardAvoidingView
		} from "react-native";
import styles from "./style";
import { Button, CheckBox } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import {startTabs} from './startMainTab';

// Feedback form screen
class Feedback2 extends Component{
  constructor() {
    super();
    this.state = {
      url:'https://populationhealthexchange.org/contact-us/',
      helper:false,
    };
  }


  render() {
    return (
        <WebView
          ref={(ref) => this.myWebView = ref} 
          source={{uri:this.state.url}}
          contentInset = {{top:0,bottom:0}}
          style={{marginTop:-60,marginBottom:-455}}
        />
    );
  }
}

export default Feedback2;