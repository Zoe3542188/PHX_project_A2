import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";

// Courses Screen
class Courses extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>View Courses here</Text>
			</View>
		);
	}
}

export default Courses;