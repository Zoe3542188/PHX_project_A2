import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';  
import {startStacks, startTabs} from './startMainTab'
import {Navigation} from 'react-native-navigation';

class perspStack extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'PHX Perspectives'
	        },
	      }
	    };
	  }
	goToScreen = (screenName) =>{
		Navigation.push(this.props.componentId,{
			component:{
				name: screenName
			}
		})
	}

	render(){
		return(
			<View style={styles.container}>
				<Text>Stuff: {this.props.text}</Text>
				<Text>Other stuff: {this.props.img_url}</Text>

				<Image source ={{uri:this.props.img_url}}/>

		        <Button
		          onPress={()=> this.goToScreen('Main')}
		          title="Go back"
		        />
		        <Button
		          onPress={startTabs}
		          title="Home"
		        />			        			
			</View>
		);
	}
}

export default perspStack;