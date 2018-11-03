# PHX_project_A2_Fetch_Feature_Branch
###### project for EC601
#### Introduction
We are using Rest api to fetch data from [phx official website](http://populationhealthexchange.org)</br>
[Fetch API](https://facebook.github.io/react-native/docs/network) is also used in this part

#### Initialization
1. Have an initialized ReactNative project, please follow the installation guide [here](https://github.com/Zoe3542188/PHX_project_A2/tree/master#installation)
2. Install react-native-htmlview package:
`npm install react-native-htmlview`

#### Utilization
To run this feature on your MAC, please follow these steps:</br>
1. put [tryAuth.js](https://github.com/Zoe3542188/PHX_project_A2/blob/Feature_Fetch/tr) under your main project folder
2. Go to the main folder and change your index.js file:</br>
- add `import {tryAuth} from './tryAuth.js';` in the header
- change `AppRegistry.registerComponent(appName, () => App);` to `AppRegistry.registerComponent(appName, () => tryAuth);`
3. Run your app(`react-native start` and `react-native run-ios` in another window)
