import { Navigation } from "react-native-navigation";
import Welcome from "./screen/Welcome.js";
import Clickme from "./screen/Clickme.js";

//AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('Clickme', () => Clickme);
//Navigation.registerComponent('Welcome', () => Welcome);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack:{
      	id:'AppStack',
      	children:[
      		{
      			component:{
      				name:'Welcome'
      			},
      		},
      	]
      }
    }
  })
})