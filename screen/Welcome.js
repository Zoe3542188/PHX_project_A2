import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";
import { startTabs, startStacks} from './startMainTab';
import { Navigation } from "react-native-navigation";

class WelcomeScreen extends Component{

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
				<Button title="See more" onPress = {startStacks}/>
				<Button title="Back to home" onPress = {startTabs}/>
			</View>
		);
	}
}

export default WelcomeScreen;
