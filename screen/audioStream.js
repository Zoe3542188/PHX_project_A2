import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button,
		ViewPropTypes,
		TouchableHighlight,
		Image
		} from "react-native";
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';
import styles from "./style";
import {startTabs} from './startMainTab';

// stream podcast
class audioStream extends Component{

  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }
	_onPress() {
	  // Disable button while recording and playing back
	  this.setState({disabled: true});

	  // // Start recording
	  // let rec = new Recorder("filename.mp4").record();

	  // // Stop recording after approximately 3 seconds
	  // setTimeout(() => {
	  //   rec.stop((err) => {
	      // NOTE: In a real situation, handle possible errors here

	      // Play the file after recording has stopped
	      new Player('https://populationhealthexchange.org/wp-content/podcasts/fa/Free_Associations_Episode_34.mp3').play()
	      // .play()
	      // .on('ended', () => {
	      //   // Enable button again after playback finishes
	      //   this.setState({disabled: false});
	      // });
	  //   });
	  // }, 3000);
	}

	_onPress2(){
		startTabs();
	}

	render(){
		return(
			<View style={styles.container}>
	        <Button
	          onPress={() => this._onPress()}
	          title="Listen to podcast"
	        />			        			
			</View>
		);
	}

}

export default audioStream;

