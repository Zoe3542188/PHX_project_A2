import {Navigation} from 'react-native-navigation';

export function registerScreens() {
	Navigation.registerComponent('Welcome', () => require('./Welcome').default);
	Navigation.registerComponent('Webinars', () => require('./Webinars').default);
	Navigation.registerComponent('Feedback', () => require('./Feedback').default);
	Navigation.registerComponent('Feedback2', () => require('./Feedback2').default);
	Navigation.registerComponent('Speaking', () => require('./Speaking').default);
	Navigation.registerComponent('SignUp', () => require('./SignUp').default);
	Navigation.registerComponent('SignUp2', () => require('./SignUp2').default);
	Navigation.registerComponent('SignUp3', () => require('./SignUp3').default);
	Navigation.registerComponent('audioStack', () => require('./audioStack').default);
	Navigation.registerComponent('perspStack', () => require('./perspStack').default);
	Navigation.registerComponent('Podcast', () => require('./Podcast').default);
	Navigation.registerComponent('Events', () => require('./Events').default);
	Navigation.registerComponent('Intro', () => require('./Intro').default);
	Navigation.registerComponent('Downloads', () => require('./Downloads').default);
	Navigation.registerComponent('videoStack', () => require('./videoStack').default);
	Navigation.registerComponent('perspVideo', () => require('./perspVideo').default);
	Navigation.registerComponent('speakingStack',()=>require('./speakingStack').default);
	Navigation.registerComponent('perspectives',()=>require('./perspectives').default);
}

import Welcome from "./Welcome.js";
import Webinars from "./Webinars.js";
import Feedback from "./Feedback.js";
import Feedback2 from "./Feedback2.js";
import Speaking from "./Speaking.js";
import SignUp from "./SignUp.js";
import SignUp2 from "./SignUp2.js";
import SignUp3 from "./SignUp3.js";
import audioStack from "./audioStack.js";
import perspStack from "./perspStack.js";
import Events from "./Events.js";
import Intro from "./Intro.js";
import Downloads from "./Downloads.js";
import videoStack from "./videoStack.js";
import perspVideo from "./perspVideo.js";
import speakingStack from "./speakingStack.js";
import perspectives from "./perspectives.js";
import Podcast from "./Podcast.js";
