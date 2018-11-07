import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button,
		ViewPropTypes
		} from "react-native";
import styles from "./style";
import PropTypes from 'prop-types';

import RNAudioStreamer from 'react-native-audio-streamer';

// stream podcast
class audioStream extends Component{

	// constructor () {
	// 	super();
	// 	this.player = null;
	// }

	reactAudioStream = () =>{
			RNAudioStreamer.setUrl("https://populationhealthexchange.org/wp-content/podcasts/fa/Free_Associations_Episode_34.mp3");
			RNAudioStreamer.play();
	}

	render(){
		return(
			<View style={styles.container}>
        <Button
          onPress={this.reactAudioStream}
          title="Listen to podcast"
        />			        			
			</View>
		);
	}

}

export default audioStream;

