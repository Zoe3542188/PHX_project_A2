import {Navigation} from 'react-native-navigation';

export function registerScreens() {
	Navigation.registerComponent('Welcome', () => require('./Welcome').default);
	Navigation.registerComponent('Clickme', () => require('./Clickme').default);
	Navigation.registerComponent('Webinars', () => require('./Webinars').default);
	Navigation.registerComponent('Podcasts', () => require('./Podcasts').default);
	Navigation.registerComponent('Courses', () => require('./Courses').default);
	Navigation.registerComponent('Feedback', () => require('./Feedback').default);
	Navigation.registerComponent('Main', () => require('./Main').default);
	Navigation.registerComponent('LogIn', () => require('./LogIn').default);
}

// import Welcome from "./screen/Welcome.js";
// import Clickme from "./screen/Clickme.js";
// import Webinars from "./screen/Webinars.js";
// import Podcasts from "./screen/Podcasts.js";
// import Courses from "./screen/Courses.js";
// import Feedback from "./screen/Feedback.js";


