<<<<<<< Feature_Fetch
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
=======
PHX_project_A2
=
###### project for [EC601](https://www.bu.edu/academics/eng/courses/eng-ec-601/)
###### [Our Trello Board](https://trello.com/b/Pe9N73kv/phx-projectboard)
##### This is an iOS version of BU [PopulationHealthExchange](https://populationhealthexchange.org/) website

#### The app will display:
1. Institute Information (optional if the page exists on the website, otherwise do not display)
2. Events (displays page from the website, we will create a simplified version)
3. Podcasts (option to download)
4. Webinars (view live or stream recordings, option to download recordings)
5. Practically Speaking (option to download)
6. Blogs (option to download)
7. My Downloads (all of the above that have the option to download; once downloaded, objects should be easy to delete from the app and from the phone)
8. Feedback (goes to email?)

#### Technology Selection
- Backend:[Wordpress](https://wordpress.com) and MySQL database (provided by our client)
- Mobile Environment:[React Native](https://facebook.github.io/react-native/)
- Access to Backend data:[Rest API](https://www.restapitutorial.com/)
- Developer Environment: Xcode 10

#### System Diagram
![System Diagram](https://raw.githubusercontent.com/Zoe3542188/PHX_project_A2/Yanling/assets/SD_PHX.PNG)

#### Installation
###### We are still developing the app, if you want to see our developer version, please follow these steps:
1. Download [Xcode 10](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (you must have a MAC OS)
2. [Setup ReactNative enviroment](https://facebook.github.io/react-native/docs/getting-started)
3. [Install node.js](https://nodejs.org)
4. Test your enviroment by initialize a default react-native app</br>
open your command prompt</br>
`react-native init YOUR_APP_NAME`</br>
`cd YOUR_APP_NAME`</br>
`react-native start reset-cache`</br>
open another command window</br>
cd to the same path</br>
`react-native run-ios`</br>
you should able to see this page if you setup successfully.</br>
![initPage](https://facebook.github.io/react-native/docs/assets/GettingStartediOSSuccess.png)

#### Features Utilization
###### By far, we have two major features has been realized 
- UI interface with navigators</br>
[![UI Demo](http://img.youtube.com/vi/bFZB7Die13k/0.jpg)](http://www.youtube.com/watch?v=bFZB7Die13k)
- Fetch data via Rest api from wordpress backend</br>
![wp-json](https://github.com/Zoe3542188/PHX_project_A2/blob/Yanling/assets/wp-json.PNG)

To test these features on your MAC, please go to the specific feature branch and check the readme file under that branch
- [Navigation Feature](https://github.com/Zoe3542188/PHX_project_A2/tree/Feature_Navigation)
- [Fetch Feature](https://github.com/Zoe3542188/PHX_project_A2/tree/Feature_Fetch)
>>>>>>> master
