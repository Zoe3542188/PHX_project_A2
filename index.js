import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native'
// import {registerScreens} from './screen/screens';

// registerScreens();

import Welcome from "./screen/Welcome.js";
import Clickme from "./screen/Clickme.js";
import Webinars from "./screen/Webinars.js";
import Podcasts from "./screen/Podcasts.js";
import Courses from "./screen/Courses.js";
import Feedback from "./screen/Feedback.js";
import Main from "./screen/Main.js";
import LogIn from "./screen/LogIn.js";

Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('Clickme', () => Clickme);
Navigation.registerComponent('Webinars', () => Webinars);
Navigation.registerComponent('Podcasts', () => Podcasts);
Navigation.registerComponent('Courses', () => Courses);
Navigation.registerComponent('Feedback', () => Feedback);
Navigation.registerComponent('Main', () => Main);
Navigation.registerComponent('LogIn', () => LogIn);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack:{
      	id:'AppStack',
      	children:[
      		{
      			component:{
      				name:'LogIn'
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
