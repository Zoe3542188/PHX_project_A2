import {Navigation} from 'react-native-navigation';

export function registerScreens() {
	Navigation.registerComponent('Welcome', () => Welcome);	
	Navigation.registerComponent('Clickme', () => Clickme);
	Navigation.registerComponent('Webinars', () => Webinars);
	Navigation.registerComponent('Podcasts', () => Podcasts);
	Navigation.registerComponent('Courses', () => Courses);
	Navigation.registerComponent('Feedback', () => Feedback);
}

// import Welcome from "./screen/Welcome.js";
// import Clickme from "./screen/Clickme.js";
// import Webinars from "./screen/Webinars.js";
// import Podcasts from "./screen/Podcasts.js";
// import Courses from "./screen/Courses.js";
// import Feedback from "./screen/Feedback.js";


