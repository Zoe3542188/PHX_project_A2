import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";
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
				<Button title="Click me" onPress={()=>this.goToScreen('Clickme')} />
				<Button title="Don't click me" onPress={()=>alert("I said don't!")}/>
			</View>
		);
	}
}

export default WelcomeScreen;