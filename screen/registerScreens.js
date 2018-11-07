import {Navigation} from 'react-native-navigation';

export function registerScreens() {
	Navigation.registerComponent('Welcome', () => require('./Welcome').default);
	Navigation.registerComponent('StackNav', () => require('./StackNav').default);
	Navigation.registerComponent('Webinars', () => require('./Webinars').default);
	Navigation.registerComponent('Podcasts', () => require('./Podcasts').default);
	Navigation.registerComponent('Courses', () => require('./Courses').default);
	Navigation.registerComponent('Feedback', () => require('./Feedback').default);
	Navigation.registerComponent('Main', () => require('./Main').default);
	Navigation.registerComponent('SignUp', () => require('./SignUp').default);
	Navigation.registerComponent('Fetch', () => require('./Fetch').default);
	Navigation.registerComponent('getMediaURL', () => require('./getMediaURL').default);
}

import Welcome from "./Welcome.js";
import StackNav from "./StackNav.js";
import Webinars from "./Webinars.js";
import Podcasts from "./Podcasts.js";
import Courses from "./Courses.js";
import Feedback from "./Feedback.js";
import Main from "./Main.js";
import SignUp from "./SignUp.js";
import Fetch from "./Fetch.js";
import getMediaURL from "./getMediaURL.js";