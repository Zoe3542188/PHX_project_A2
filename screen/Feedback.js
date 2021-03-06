import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		ScrollView,
		TextInput, 
		TouchableWithoutFeedback, 
		Alert, 
		Keyboard,
		KeyboardAvoidingView
		} from "react-native";
import styles from "./style";
import { Button, CheckBox } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import {startTabs} from './startMainTab';

// Feedback form screen
class Feedback extends Component{
	constructor() {
    super();
    this.state = {

    }
  }

  // comment here
  render() {
    return (
    	<ScrollView>
	      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	        <View style={styles.loginScreenContainer}>
	          <View style={styles.loginFormView}>

	          <Text style={styles.logoText}> We want to hear from you! </Text>
	            <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
	            <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
	            <TextInput placeholder="Email address" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
	            <TextInput placeholder="Please share any feedback" placeholderColor="#c4c3cb" style={styles.commentTextInput} />

	            <Button
	              buttonStyle={styles.SubmitButton}
	              onPress={() => this.SubmitPress()}
	              title="Send Feedback"
	            />
	          </View>
	        </View>
	      </TouchableWithoutFeedback>
	      </KeyboardAvoidingView>
	    </ScrollView>
    );
	}
	SubmitPress() {
    startTabs();
  }
}

export default Feedback;