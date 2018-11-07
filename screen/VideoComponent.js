import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import styles from "./style";

// VideoComponent plays video within the app
export default class VideoComponent extends React.Component {

  renderVideo () {
      return(
        <Video
          source={{uri: ""}}
          style={{ width: 800, height: 800 }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}

        />
      )
  }

  render () {
    return (
      <View>
        {this.renderVideo()}
      </View>
    )
  }
}