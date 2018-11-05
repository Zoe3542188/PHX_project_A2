import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";

import {startTabs} from './startMainTab'
import {Navigation} from 'react-native-navigation';

class StackNav extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'Stack'
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
	backFromScreen = () =>{
		Navigation.pop(this.props.componentId)
	}	
	render(){
		return(
			<View style={styles.container}>
				<Text>Welcome here!</Text>
		        <Button
		          onPress={()=> this.goToScreen('Webinars')}
		          title="View next screen"
		        />
		        <Button
		          onPress={()=> this.goToScreen('Main')}
		          title="Go back"
		        />
		        <Button
		          onPress={startTabs}
		          title="HOME"
		        />			        			
			</View>
		);
	}
}

export default StackNav;