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
		padding:5,
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
 };
