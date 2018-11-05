import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native'
// import {registerScreens} from './screen/screens';

// registerScreens();

import Welcome from "./screen/Welcome.js";
import StackNav from "./screen/StackNav.js";
import Webinars from "./screen/Webinars.js";
import Podcasts from "./screen/Podcasts.js";
import Courses from "./screen/Courses.js";
import Feedback from "./screen/Feedback.js";
import Main from "./screen/Main.js";
import SignUp from "./screen/SignUp.js";
import Fetch from "./screen/Fetch.js";


Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('StackNav', () => StackNav);
Navigation.registerComponent('Webinars', () => Webinars);
Navigation.registerComponent('Podcasts', () => Podcasts);
Navigation.registerComponent('Courses', () => Courses);
Navigation.registerComponent('Feedback', () => Feedback);
Navigation.registerComponent('Main', () => Main);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Fetch', () => Fetch);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack:{
      	id:'AppStack',
      	children:[
      		{
      			component:{
      				name:'SignUp'
      			},                 
          },          
      	]
      }
    }
  })
})


// import Clickme from "./screen/Clickme.js";
// import Webinars from "./screen/Webinars.js";
// import Podcasts from "./screen/Podcasts.js";
// import Courses from "./screen/Courses.js";
// import Feedback from "./screen/Feedback.js";

// Navigation.registerComponent('Welcome', () => Welcome);
// Navigation.registerComponent('Clickme', () => Clickme);
// Navigation.registerComponent('Webinars', () => Webinars);
// Navigation.registerComponent('Podcasts', () => Podcasts);
// Navigation.registerComponent('Courses', () => Courses);
// Navigation.registerComponent('Feedback', () => Feedback);
