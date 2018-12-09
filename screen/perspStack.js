import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		WebView,
		ScrollView,
		Dimensions,
		Linking,
		} from "react-native";
import styles from "./style";
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';  
import {Button} from 'react-native-elements';
import HTML from 'react-native-render-html';
import {startStacks, startTabs} from './startMainTab';
import {Navigation} from 'react-native-navigation';

class perspStack extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'PHX Perspectives'
	        },
	      }
	    };
	  }
	// goToScreen = (screenName) =>{
	// 	Navigation.push(this.props.componentId,{
	// 		component:{
	// 			name: screenName
	// 		}
	// 	})
	// }

  goToScreen = () =>{
		Navigation.dismissModal(this.props.componentId);
  }

	render(){
		return(
			<View style={styles.container}>	
				<Text style={{color: 'black',
							    padding:2,
							    fontSize:18,
							    fontWeight:'bold',
								marginTop:10}}>
					{this.props.title}
				</Text>
				<ScrollView style={{top:10,marginBottom:20,height:400}}>
		      		<Image
		      	  		source={{uri:this.props.img_url}}
		      	  		style={{width:330, height:180, borderRadius:10,margin:20}}
		      		/>	 
					<View style={{margin:20}}>
						<HTML 
							html={this.props.content}
							tagsStyles = {{p:{fontSize:15},strong:{fontWeight:'bold'},a:{fontStyle: 'italic'}}}
							onLinkPress={(event, href)=>{Linking.openURL(href)}}
						/>
					</View>
				</ScrollView>
		       	<Button
		      	  large
		      	  icon={{name: 'download', type: 'font-awesome', size:12}}
		          buttonStyle = {{width: 80, height: 60, bottom:10}}	
		          textStyle={{fontSize: 15, color:'black'}}	      	  		      	  
		      	  backgroundColor="white"
		          title="Back"
		          onPress={()=> this.goToScreen()}
			    />       			
			</View>
		);
	}
}

export default perspStack;