import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button,
		ViewPropTypes,
		TouchableHighlight
		} from "react-native";
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';
import styles from "./style";

// stream podcast
class audioStream extends Component{

  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }
	stream() {
	  // Disable button while recording and playing back
	  this.setState({disabled: true});

	  // Start recording
	  let rec = new Recorder("filename.mp4").record();

	  // Stop recording after approximately 3 seconds
	  setTimeout(() => {
	    rec.stop((err) => {
	      // NOTE: In a real situation, handle possible errors here

	      // Play the file after recording has stopped
	      new Player("filename.mp4")
	      .play()
	      .on('ended', () => {
	        // Enable button again after playback finishes
	        this.setState({disabled: false});
	      });
	    });
	  }, 3000);
	}

	render(){
		return(
			<View style={styles.container}>
        <Button
          onPress={()=>this.stream()}
          title="Listen to podcast"
        />			        			
			</View>
		);
	}

}

export default audioStream;

