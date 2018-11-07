PHX_project_A2
=
###### Group project for [EC601](https://www.bu.edu/academics/eng/courses/eng-ec-601/)
###### [Our Trello Board](https://trello.com/b/Pe9N73kv/phx-projectboard)
###### A native iOS app for Boston University's Population Health Exchange (PHX) [website](https://populationhealthexchange.org/) 

#### The app will display:
0. An sign up page with the option to sign up for the newsletter.
1. Institute Information (optional if the page exists on the website, otherwise do not display)
2. Events (displays page from the website, we will create a simplified version)
3. Podcasts (option to download)
4. Webinars (view live or stream recordings, option to download recordings)
5. Practically Speaking (option to download)
6. Blogs (option to download)
7. My Downloads (all of the above that have the option to download; once downloaded, objects should be easy to delete from the app and from the phone)
8. Feedback (goes to email?)

#### Required libraries

1. react native fetch blob to download files such as videos [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob)
2. react native vector icons [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
3. react native navigation v2 [react-native-navigation](https://github.com/wix/react-native-navigation)
4. react native elements [react-native-elements](https://react-native-training.github.io/react-native-elements)
5. react native video [react-native-video](https://www.npmjs.com/package/react-native-video)

#### Useful link: general information about installing [libraries with native dependencies](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)


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
![initPage](https://github.com/Zoe3542188/PHX_project_A2/blob/master/assets/demo.gif | width=100)
<img src="https://github.com/Zoe3542188/PHX_project_A2/blob/master/assets/demo.gif" width="100">
- Fetch data via Rest api from wordpress backend</br>
![wp-json](https://github.com/Zoe3542188/PHX_project_A2/blob/Yanling/assets/wp-json.PNG)

To test these features on your MAC, please go to the specific feature branch and check the readme file under that branch
- [Navigation Feature](https://github.com/Zoe3542188/PHX_project_A2/tree/Feature_Navigation)
- [Fetch Feature](https://github.com/Zoe3542188/PHX_project_A2/tree/Feature_Fetch)
