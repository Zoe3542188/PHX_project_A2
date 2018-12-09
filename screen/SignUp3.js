import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, WebView, Alert} from 'react-native';
import styles from "./style";
import{Button} from 'react-native-elements'
import {startTabs} from './startMainTab';
import {Navigation} from 'react-native-navigation';


export default class App extends Component {
    static get options(){
    return{
      topBar:{
        title:{
          text: 'SignUp',
      }},
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      url:'https://populationhealthexchange.org/newsletter-signup/'
    }
  }

  _handleSubmit(webViewUrl){
    //if(webViewUrl.url === 'https://populationhealthexchange.org/newsletter-signup/'){
    if(webViewUrl.url === 'https://populationhealthexchange.org/thank-you-newsletter/'){
             Alert.alert('Sumbitted',"SignUp Done!",[
                  {text:'ok',onPress:()=>startTabs(),style:'cancle'}
                ],)
    }
    else if(webViewUrl.url === 'https://populationhealthexchange.org/newsletter-signup/') {

    }
    else{
      alert('Please SignUp First')
    }
  }
  render() {
    return (
        <View style={{flex:1,flexDirection:'column',Bottom:300}}>
        <WebView
          source={{uri:this.state.url}}
          onNavigationStateChange = {this._handleSubmit.bind(this)}
          style={{marginTop:-80,marginBottom:10}}
        />
         <Button
              large
              buttonStyle = {{width: 150, height: 60, bottom:10,left:100}}  
              textStyle={{fontSize: 15, color:'black',fontWeight:'500'}}                         
              backgroundColor="white"
              title="Skip SignUp"
              onPress={()=> startTabs()}
          />
        </View>
    );
  }
}