import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

import t from 'tcomb-form-native';

// var _ = require('lodash');

// const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
// stylesheet.textbox.normal.borderWidth = 0;
// stylesheet.textbox.error.borderWidth = 0;
// stylesheet.textbox.normal.marginBottom = 0;
// stylesheet.textbox.error.marginBottom = 0;

// stylesheet.textboxView.normal.borderWidth = 0;
// stylesheet.textboxView.error.borderWidth = 0;
// stylesheet.textboxView.normal.borderRadius = 0;
// stylesheet.textboxView.error.borderRadius = 0;
// stylesheet.textboxView.normal.borderBottomWidth = 1;
// stylesheet.textboxView.error.borderBottomWidth = 1;
// stylesheet.textboxView.normal.marginBottom = 5;
// stylesheet.textboxView.error.marginBottom = 5;
// // change the defalut select height
// stylesheet.pickerTouchable.normal.height = 36;
// stylesheet.pickerTouchable.error.height = 36;
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

// const Search = t.struct({
//   search: t.list(t.String)
// });

// const Transformer = t.struct({
//   format: t.Function, // from value to string, it must be idempotent
//   parse: t.Function   // from string to value
// });

// const listTransformer = {
//   format: function (value) {
//     return Array.isArray(value) ? value.join(' ') : value;
//   },
//   parse: function (str) {
//     return str ? str.split(' ') : [];
//   }
// };

const User = t.struct({
  email: t.String,
  firstname: t.String,
  lastname: t.String,
  country: Country,
  state: t.String,
  city: t.String,
  // search: Search,
  terms: t.Boolean
});

// defalut value
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
    // search: {
    //   factory: t.form.Textbox,
    //   transformer: listTransformer,
    //   help: 'Keywords are separated by spaces'
    // },
    terms: {
      label: 'Send me the latest on PHX programs, news and events',
    },
  },
  // stylesheet: stylesheet,
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
          value={value}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.loginScreenButton}
          // onPress={() => navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  loginScreenButton:{
    marginRight:0,
    marginLeft:0,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#5CB3FF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});