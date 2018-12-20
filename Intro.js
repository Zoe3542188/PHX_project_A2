
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {startTabs} from './startMainTab';
import styles from "./style";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    startTabs();
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    startTabs();
  };
  render() {
    //If false show the Intro Slides
    // if (this.state.showRealApp) {
    //   //Real Application
    //   return (
    //     <View>
    //       <Text>
    //         This will be your screen when you click Skip from any slide or Done
    //         button at last
    //       </Text>
    //     </View>
    //   );
    // } else {
      //Intro slides
      return (
        <AppIntroSlider
          style={{marginTop:-100}}

          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    //}
  }
}
 
const slides = [
  {
    key: 's1',
    text: 'PHX is a resource hub and continuing education experience for health.',
    title: 'Population Health Exchange',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require('../assets/img/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Population Health Exchange',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'The world’s health needs are changing, and the aspirations of public health are evolving apace.',
    image: require('../assets/img/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Population Health Exchange',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'A lifelong learning initiative.',
    image: require('../assets/img/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Population Health Exchange',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'Learn for life.',
    image: require('../assets/img/4.png'),
    imageStyle: styles.image,
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Population Health Exchange',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'We invite you to spend time on our app exploring topics, courses, and articles that further your lifelong learning goals.',
    image: require('../assets/img/5.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6437b',
  },
];
