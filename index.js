import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native'
import {registerScreens} from './screen/registerScreens';

// register screens
registerScreens();

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
