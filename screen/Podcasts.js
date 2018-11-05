import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button,
		WebView
		} from "react-native";
import styles from "./style";

class Podcasts extends Component{
	render(){
		return(
	        <WebView
          		source={{uri: 'https://www.youtube.com/embed/60hOLAGdOi8?rel=0&amp;showinfo=0%22%20width=%22320%22%20height=%22180%22%20frameborder=%220%22%20allowfullscreen=%22allowfullscreen'}}
        		style={{marginTop: 20}}	        
	        />
		);
	}

}

export default Podcasts;