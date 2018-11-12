import React, { Component } from "react";
import {View,
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
import {startTabs} from './startMainTab'
import {Navigation} from 'react-native-navigation';
import {FlatListItem} from './displayPodList';

class audioStack extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'Podcast'
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

	streamAudio() {
    	new Player(FlatListItem.props.item.podcast_url).play();
  	}

	render(){
		return(
			<View style={styles.container}>
		        <Button
		          onPress={()=> this.streamAudio()}
		          title="Stream podcast"
		        />
		        <Button
		          onPress={()=> this.goToScreen('displayPodList')}
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

export default audioStack;