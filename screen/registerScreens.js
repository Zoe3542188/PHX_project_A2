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
	Navigation.registerComponent('VideoComponent', () => require('./VideoComponent').default);
	Navigation.registerComponent('audioStream', () => require('./audioStream').default);
	Navigation.registerComponent('AppContainer', () => require('./AppContainer').default);
	Navigation.registerComponent('displayPodList', () => require('./displayPodList').default);
}

import Welcome from "./Welcome.js";
import StackNav from "./StackNav.js";
import Webinars from "./Webinars.js";
import Podcasts from "./Podcasts.js";
import Courses from "./Courses.js";
import Feedback from "./Feedback.js";
import Main from "./Main.js";
import SignUp from "./SignUp.js";
import VideoComponent from "./VideoComponent.js";
import audioStream from "./audioStream.js";
import AppContainer from "./AppContainer.js";
import displayPodList from "./displayPodList.js";