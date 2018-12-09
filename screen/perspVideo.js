import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		Button,
		WebView,
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
	          text: 'Speaking'
	        },
	      }
	    };
	  }



	render(){
		const cool = '<iframe style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" src="https://cdnapisec.kaltura.com/p/2159741/sp/215974100/embedIframeJs/uiconf_id/35602621/partner_id/2159741?iframeembed=true&amp;playerId=kplayer&amp;entry_id=1_4ana2lsq&amp;flashvars[streamerType]=auto" width="320" height="180" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
		alert(this.props.video_iframe)
		return(
				<WebView
					originWhitelist={['*']}
					source={{html:this.props.video_iframe}}
				/>       			
		);
	}
}

export default perspStack;