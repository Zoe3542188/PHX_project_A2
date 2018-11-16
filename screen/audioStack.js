import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet
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
	goToScreen = (screenName) =>{
		Navigation.push(this.props.componentId,{
			component:{
				name: screenName
			}
		})
	}

  stream() {
    new Player(this.props.podcast_url).play();
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
				<Text style = {{margin: 30}}>
					{this.props.description}
				</Text>	      		
		        <Button
		      	  large
		      	  icon={{name: 'podcast', type: 'font-awesome'}}
		          style = {{width: 300, height: 80}}		      	  		      	  
		      	  backgroundColor="#3897f1"
		          onPress={()=> this.stream()}
		          title="Play podcast"
		        />
		        <Button
		      	  large
		      	  icon={{name: 'download', type: 'font-awesome'}}
		          style = {{width: 300, height: 80}}		      	  		      	  
		      	  backgroundColor="#3897f1"
		          title="Download podcast"
		        />		        
		        <Button
		          onPress={startTabs}
		          backgroundColor="white"
		          color="black"
		          title="Home"
		        />	


			</View>
		);
	}
}

export default audioStack;