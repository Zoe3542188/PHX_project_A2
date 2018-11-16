import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		Linking
		} from "react-native";
import styles from "./style";
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';  
import {Button} from 'react-native-elements';
import {startStacks, startTabs} from './startMainTab';
import {Navigation} from 'react-native-navigation';
import {FlatListItem} from './displayPodList';

class audioStack extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'Podcast Player'
	        },
	      }
	    };
	  }
	goToScreen = () =>{
		Navigation.dismissModal(this.props.componentId);
	}

  stream() {
    new Player(this.props.podcast_url).play();
  }

  download() {
  	Linking.openURL(this.props.itunes_url);
  }

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.flatListTitleWeb}>
					{this.props.title}
				</Text>
	      		<Image
	      	  		source={{uri:this.props.img_url}}
	      	  		style={{width:300, height:300, margin:5}}
	      		/>
				<Text style = {{margin: 30, marginTop:5, marginBottom:5}}>
					{this.props.description}
				</Text>	 
				<View style={{flex:1, flexDirection:'row'}}>   		
			        <Button
			      	  large
			      	  icon={{name: 'podcast', type: 'font-awesome', size:12}}
			          buttonStyle = {{width: 160, height: 60, margin:5, borderRadius:6,marginLeft:5}}	
			          textStyle={{fontSize: 13 }}	      	  		      	  
			      	  backgroundColor="#3897f1"
			          onPress={()=> this.stream()}
			          title="Play podcast"
			        />
			        <Button
			      	  large
			      	  icon={{name: 'download', type: 'font-awesome', size:12}}
			          buttonStyle = {{width: 160, height: 60,margin:5, borderRadius:6, marginLeft:-25}}	
			          textStyle={{fontSize: 13 }}	      	  
			      	  backgroundColor="#3897f1"
			          onPress={()=> this.download()}
			          title="Download podcast"
			        />
			    </View>	  
			    <Button
		      	  large
		      	  icon={{name: 'download', type: 'font-awesome', size:12}}
		          buttonStyle = {{width: 180, height: 60}}	
		          textStyle={{fontSize: 13, color:'black'}}	      	  		      	  
		      	  backgroundColor="white"
		          title="Back to main"
		          onPress={()=> this.goToScreen()}
			    />	    
			</View>
		);
	}
}

export default audioStack;