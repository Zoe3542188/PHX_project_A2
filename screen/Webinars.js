import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button
		} from "react-native";
import styles from "./style";

class Webinars extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>Watch webinars here</Text>
			</View>
		);
	}
}

export default Webinars;