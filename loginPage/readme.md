#### set up the enviroment by following the [official tutorial](https://facebook.github.io/react-native/docs/getting-started)
#### install react-native-components and icons with npm:
```npm i react-native-elements --save``` 

```npm i --save react-native-vector-icons```
#### if get "Installing ERROR | Unexpected end of JSON input while parsing near ' : '", try this first
```npm cache clean --force```
#### If you built other react-native project on your laptop before, then you need to delete all the files in user/library/developer/Xcode/DerivedData/
#### Or you will get an bundle file notFound err

#### Then Do 
```react-native start --reset-cache```
#### Open another Terminal and do 
```react-native run-ios```
