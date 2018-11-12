import {Button, View} from "react-native";

const React = require("react-native");
const { StyleSheet } = React;

export default{
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},

    flexRow:{
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
	}
}