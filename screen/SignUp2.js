import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

import styles from "./style";

import t from 'tcomb-form-native';
import {startTabs} from './startMainTab';
import {Navigation} from 'react-native-navigation';

const Form = t.form.Form;
// change the defalut select height
t.form.Form.stylesheet.pickerTouchable.normal.height = 36;
t.form.Form.stylesheet.pickerTouchable.error.height = 36;
t.form.Form.stylesheet.textbox.normal.borderWidth = 0;
t.form.Form.stylesheet.textbox.error.borderWidth = 0;
t.form.Form.stylesheet.textbox.normal.marginBottom = 0;
t.form.Form.stylesheet.textbox.error.marginBottom = 0;

t.form.Form.stylesheet.textboxView.normal.borderWidth = 0;
t.form.Form.stylesheet.textboxView.error.borderWidth = 0;
t.form.Form.stylesheet.textboxView.normal.borderRadius = 0;
t.form.Form.stylesheet.textboxView.error.borderRadius = 0;
t.form.Form.stylesheet.textboxView.normal.borderBottomWidth = 1;
t.form.Form.stylesheet.textboxView.error.borderBottomWidth = 1;
t.form.Form.stylesheet.textboxView.normal.marginBottom = 5;
t.form.Form.stylesheet.textboxView.error.marginBottom = 5;

// multi-select option
const Country = t.enums({
  US: 'United States of America',
  CN: 'China',
  GB: 'United Kingdom',
  AU: 'Australia',
  FR: 'France',
  JP: 'Japan',
  KR: 'Korea',
  RU: 'Russia',
  IN: 'India',
  KR: 'Korea',
  IT: 'Italy',
  CA: 'Canada',
  GER: 'Germany'
});

const User = t.struct({
  email: t.String,
  firstname: t.String,
  lastname: t.String,
  country: Country,
  state: t.String,
  city: t.String,
  terms: t.Boolean
});

// default value
const value = {
  terms: true               
};

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 15,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 15,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Please insert a valid email',
      placeholder: 'phx@gmail.com'
    },
    firstname: {
      error: 'Please insert valid firstname',
      placeholder: 'David'
    },
    lastname: {
      error: 'Please insert valid lastname',
      placeholder: 'Anderson'
    },
    country: {
      nullOption: {value: '', text: 'Choose your country'},
      order: 'asc',
      error: 'Please choose a country'
    },
    state: {
      error: 'Please insert a valid state',
      placeholder: 'Massachusetts'
    },
    city: {
      error: 'Please insert a valid city',
      placeholder: 'Boston'
    },
    terms: {
      label: 'Send me the latest on PHX programs, news and events',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  SubmitPress() {
    startTabs();
  }
 
  render() {
    return (
      <View style={styles.formcontainer}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
          value={value}
        />
        <TouchableOpacity
          //onPress={this.handleSubmit}
          style={styles.loginScreenButton}
          onPress={() => this.SubmitPress()}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}