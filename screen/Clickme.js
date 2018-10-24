import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";

class Clickme extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>Welcome here!</Text>
			</View>
		);
	}
}

export default Clickme;