PHX_project_A2
=
###### Group project for [EC601](https://www.bu.edu/academics/eng/courses/eng-ec-601/)
###### [Our Trello Board](https://trello.com/b/Pe9N73kv/phx-projectboard)
###### A native iOS app for Boston University's Population Health Exchange (PHX) [website](https://populationhealthexchange.org/) 

#### The app will display:
0. An introduction to the app.
1. An sign up page with the option to sign up for the newsletter.
2. Institute Information (optional if the page exists on the website, otherwise do not display)
3. Events (displays page from the website, we will create a simplified version)
4. Podcasts (option to download)
5. Webinars (view live or stream recordings, option to download recordings)
6. Practically Speaking (option to download)
7. Blogs (option to download)
8. My Downloads (all of the above that have the option to download; once downloaded, objects should be easy to delete from the app and from the phone)
9. Feedback (goes to email?)

#### Required libraries

1. react native fetch blob to download files such as videos [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob)
2. react native vector icons [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
3. react native navigation v2 [react-native-navigation](https://github.com/wix/react-native-navigation)
4. react native elements [react-native-elements](https://react-native-training.github.io/react-native-elements)
5. react native video [react-native-video](https://www.npmjs.com/package/react-native-video)
6. react native audio toolkit [react-native-audio-toolkit](https://github.com/futurice/react-native-audio-toolkit)
7. react native button [react-native-button](https://github.com/ide/react-native-button)
8. react native app intro slider [react-native-app-intro-slider](https://github.com/Jacse/react-native-app-intro-slider)
9. react native file system [react-native-fs](https://github.com/itinance/react-native-fs)
10. react native forms [tcomb-form-native](https://github.com/gcanti/tcomb-form-native)

#### Useful link: general information about installing [libraries with native dependencies](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)


#### Technology Selection
- Backend:[Wordpress](https://wordpress.com) and MySQL database (provided by our client)
- Mobile Environment:[React Native](https://facebook.github.io/react-native/)
- Access to Backend data:[Rest API](https://www.restapitutorial.com/)
- Developer Environment: Xcode 10

#### System Diagram
![System Diagram](https://raw.githubusercontent.com/Zoe3542188/PHX_project_A2/Yanling/assets/SD_PHX.PNG?token=ASU62-AAAOxqZcAvv12ggj9Xoh-zEmb2ks5b7f4twA%3D%3D)

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
<img src="https://github.com/Zoe3542188/PHX_project_A2/blob/master/assets/demo.gif" width="300">
To test these features on your MAC, please go to the specific feature branch and check the readme file under that branch</br>
<a href="https://github.com/Zoe3542188/PHX_project_A2/tree/Feature_Navigation">*Navigation Feature</a></br>
<a href="https://github.com/Zoe3542188/PHX_project_A2/tree/Feature_Fetch">*Fetch Feature</a>
