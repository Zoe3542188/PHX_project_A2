import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

//const appId = "1047121222092614"

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}> Sign Up for the PHX Newsletter </Text>
            <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Button
              buttonStyle={styles.SubmitButton}
              onPress={() => this.SubmitPress()}
              title="Submit"
            />
          <FormLabel>Name</FormLabel>
            <CheckBox
              center
              title='Click Here to Remove This Item'
              iconRight
              iconType='material'
              checkedIcon='clear'
              uncheckedIcon='add'
              checkedColor='red'
              checked={this.state.checked}
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  SubmitPress() {

  }


}
