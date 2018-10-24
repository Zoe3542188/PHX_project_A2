import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";

class Podcasts extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>Listen to podcasts here</Text>
			</View>
		);
	}
}

export default Podcasts;