import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, ScrollView, WebView, Alert} from 'react-native';
import styles from "./style";
import {startTabs} from './startMainTab';
import {Navigation} from 'react-native-navigation';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'https://populationhealthexchange.org/newsletter-signup/'
    }
  }

  _handleSubmit(webViewUrl){
    if(webViewUrl.url === 'https://populationhealthexchange.org/newsletter-signup/'){
               
       //startTabs();
    }
    else{
      //Alert.alert('Sumbitted',"SignUp Done!")
      //startTabs();
       Alert.alert('Sumbitted',"SignUp Done!",[
                  {text:'ok',onPress:()=>startTabs(),style:'cancle'}
                ],)
    }
  }
  render() {
    return (
        <View style={{flex:1,flexDirection:'row',Bottom:300}}>
        <WebView
          source={{uri:this.state.url}}
          onNavigationStateChange = {this._handleSubmit.bind(this)}
          style={{marginTop:-70,marginBottom:-500}}
        />
        </View>
    );
  }
}