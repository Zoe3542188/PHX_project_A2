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
	          text: 'Stack Navigation'
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
		        <Button
		          onPress={()=> this.goToScreen('Welcome')}
		          title="View next screen"
		        />
		        <Button
		          onPress={()=> this.goToScreen('displayPodList')}
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