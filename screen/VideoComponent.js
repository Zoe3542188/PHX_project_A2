import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import styles from "./style";

export default class VideoComponent extends React.Component {

  renderVideo () {
      return(
        <Video
          source={{uri: "https://www.youtube.com/embed/60hOLAGdOi8?rel=0&amp;showinfo=0%22%20width=%22320%22%20height=%22180%22%20frameborder=%220%22%20allowfullscreen=%22allowfullscreen"}}
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