import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Platform,
		Button,
		WebView
		} from "react-native";
import styles from "./style";
import VideoComponent from './VideoComponent';

class Webinars extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>View Courses here</Text>
      </View>
    );
  }
}

export default Webinars;


      
        // <View>
        // <VideoComponent />
        // </View>

