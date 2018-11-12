import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { WebView, View, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import styles from "./style";

// VideoComponent plays video within the app
export default class VideoComponent extends React.Component {

  renderVideo () {
      return(
        // <Video
        //   source={{uri: "https://github.com/Zoe3542188/PHX_project_A2/blob/master/assets/demo.mp4"}}
        //   style={{ width: 800, height: 800 }}
        //   muted={true}
        //   repeat={true}
        //   resizeMode={"cover"}
        //   volume={1.0}
        //   rate={1.0}
        //   ignoreSilentSwitch={"obey"}

        // />
        <WebView
          source={{uri: "https://github.com/Zoe3542188/PHX_project_A2/blob/master/assets/demo.mp4"}}
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