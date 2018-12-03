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
	// goToScreen = (screenName) =>{
	// 	Navigation.push(this.props.componentId,{
	// 		component:{
	// 			name: screenName
	// 		}
	// 	})
	// }

  goToScreen = () =>{
		Navigation.dismissModal(this.props.componentId);
  }

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.flatListTitleWeb}>
					{this.props.title}
				</Text>
	      		<Image
	      	  		source={{uri:this.props.img_url}}
	      	  		style={{width:300, height:300, margin:5}}
	      		/>
				<Text style = {{margin: 30}}>
					{this.props.description}
				</Text>	 

		        <Button
		          onPress={()=> this.goToScreen()}
		          title="Go back"
		        />	        			
			</View>
		);
	}
}

export default perspStack;