import {Button, View} from "react-native";

const React = require("react-native");
const { StyleSheet } = React;

 export default {
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },  
  button: {
    padding: 20,
    fontSize: 20,
    backgroundColor: 'white',
  },
  slider: {
    height: 10,
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  containerView: {
    flex: 1,
  },
  commentTextInput: {
    height: 240,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },  
  image: {
    width: 200,
    height: 200,
   },   
  flexRow: {
    flexDirection:'row',
    height:150,
    },
  flexColumn:{
    flexDirection:'column',
    alignItems:'stretch',
  },
  itemImageDisplay:{
    flex:1,
    height: 150,
    flexDirection:'row',

  },
  flatListItem: {
    color: '#1f201f',
    padding: 5,
    fontSize: 16,  
  },
  flatListTitle: {
    color: 'black',
    padding:5,
    fontSize:22,
    fontWeight:'bold',
  },
  flatListItemWeb: {
    color: '#1f201f',
    padding: 2,
    fontSize: 13,  
  },
  flatListTitleWeb: {
    color: 'black',
    padding:2,
    fontSize:18,
    fontWeight:'bold',
  },  
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 130,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },  
  SubmitButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },  
  formcontainer: {
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  loginScreenButton:{
    marginTop:10,
    marginLeft:200,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black',
    height:50,
    width:120,
  },
  loginText:{
    color:'black',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop:5
  },
  webinarAuthorName: {
    color: '#1f201f',
    padding: 2,
    fontSize: 13,  
    bottom:-35,
    left:30,
  },
  webinarDate: {
    color: 'black',
    padding:2,
    fontSize:18,
    fontWeight:'bold',
    bottom:-40,
    left:30,
    right:10,
    marginRight:60
  },
  authorDescription:{
    color: 'black',
    padding: 18,
    fontSize: 15,  
    fontStyle:'italic',
  },  
  upComingDescription:{
    color: 'black',
    padding: 18,
    fontSize: 15,  
    fontStyle:'italic',
    height:630,
    width:370,
  },
  headerView:{
    height:66,
    borderStyle:'solid',
    borderWidth:0.2,
    borderTopColor:'white',
    borderLeftColor:'white',
    borderRightColor:'white',
    borderBottomColor:'#919292',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  headerFont:{
    fontWeight:'600',
    fontSize:18,
    marginTop:23,
  },
 };