import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native'
import {registerScreens} from './screen/registerScreens';
import AppContainer from './screen/AppContainer';

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


// import React from 'react';
// import {AppRegistry} from 'react-native';
// import AppContainer from './screen/AppContainer';

// class phx extends React.Component {
//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// }

// AppRegistry.registerComponent('phx', () => phx);