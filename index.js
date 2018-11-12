import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native'
import {registerScreens} from './screen/registerScreens';

// register screens
registerScreens();

// import {name as appName} from './app.json';
// import Intro from './screen/Intro.js';
// AppRegistry.registerComponent(appName,()=>Intro);

// launch navigation root
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