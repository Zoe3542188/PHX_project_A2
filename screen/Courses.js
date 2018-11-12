import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";
import VideoComponent from './VideoComponent';

// Courses Screen
class Courses extends Component{
	render(){
		return(
        <View>
        	<VideoComponent />
        </View>
		);
	}
}

export default Courses;