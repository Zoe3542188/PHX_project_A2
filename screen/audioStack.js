import React, { Component } from "react";
import {
		Alert,
		View,
		Image,
		Text,
		StyleSheet,
		Linking,
		ScrollView,
		TouchableHighlight,
		ActionSheetIOS,
		} from "react-native";
import styles from "./style";
import {Navigation} from 'react-native-navigation';
import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/Feather';
import ZIcon from 'react-native-vector-icons/Zocial'
import {Button} from 'react-native-elements';
import {Downloads} from './Downloads.js'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class audioStack extends Component{
	constructor(){
		super()
		this.state={isplaying:false};
	}

	goToScreen = () =>{
		this.player.pause()
		Navigation.dismissModal(this.props.componentId);
	}

  stream() {
    this.player.play()
    this.setState({
    	isplaying:!this.state.isplaying
    })
  }

  pause(){
  	this.player.pause()
  	this.setState({
    	isplaying:!this.state.isplaying
    })
  }

  stop(){
  	this.player.destroy()
  	this.setState({
    	isplaying:false
    })
  }

  download() {
  		Alert.alert('Download started','Refresh downloads tab to view file')
		const dirs = RNFetchBlob.fs.dirs
		RNFetchBlob.config({
		    // add this option that makes response data to be stored as a file,
		    // this is much more performant.
		    fileCache : true,
		    appendExt : 'mp3',
	//			  path : dirs.DocumentDir + '/podcasts/podcast.mp3'
			  path : dirs.DocumentDir + '/podcasts/' + this.props.file_name + '.mp3'			  
		  })
		  .fetch('GET', this.props.podcast_url, {
		    //some headers ..
		  })
		   // listen to download progress event
	    .progress((received, total) => {
	        console.log('progress', received / total)
	    })
		  .then((res) => {
		    // the temp file path
		    console.log('The file saved to ', res.path())
		    //alert(res.path())
		    Alert.alert('Finished',this.props.file_name+' Downloaded')
		    Downloads.viewFiles();
		  })  	
  }

  itunes() {
  	Linking.openURL(this.props.itunes_url);
  }
  browser() {
  	Linking.openURL(this.props.origin_url);
  }
  contact(){
  	Linking.openURL('https://populationhealthexchange.org/contact-us/')
  }
  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
		      url: this.props.podcast_url,
		      message: 'Check out this podcast from PHX:\n\n'+this.props.title+'\n',
		      subject: 'phxPodcast',
		    },
		    function(err){alert(err);},
		    function(e){});
	}
  componentDidMount(){
  	this.player = new Player(this.props.podcast_url);
  }

  	render() {
  		const initial = <View style={{backgroundColor:'#27deff',flex:1, flexDirection:'row'}}>
  											<Text style={{left:10,top:30, fontWeight:'bold',fontSize:15}}>Stream podcast</Text>
  											<Icon style={{left:170,top:25}} name="stop-circle" size={25} color="#383838" onPress={()=>this.stop()}/>
							   				<Icon style={{left:190,top:25}} name="play" size={25} color="#383838" onPress={()=>this.stream()}/>	
											</View>;
		const pause = <View style={{backgroundColor:'#27deff',flex:1, flexDirection:'row'}}>
									   	<Text style={{left:10,top:30, fontWeight:'bold',fontSize:15}}>Stream podcast</Text>
									   	<Icon style={{left:170,top:25}} name="stop-circle" size={25} color="#383838" onPress={()=>this.stop()}/>
						   				<Icon style={{left:190,top:25}} name="pause" size={25} color="#383838" onPress={()=>this.pause()}/>
										</View>;
			let message;
  		if(this.state.isplaying){message = pause}
  		else{message = initial}
   		return( 
   			<View style={{flex:1}}>
   				{message}
	   			<View style={{height:590}}>
		   			<ScrollView>
		   				<Text style={{fontWeight:'bold',fontSize:20,marginTop:10,marginLeft:12,marginRight:10}}>{this.props.title}</Text>
		   				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			   				<Image
			        	  		source={{uri:this.props.img_url}}
			        	  		style={{width:330, height:180, borderRadius:10,margin:20,marginTop:10}}
					      />
				      </View>
				      <View style={{flex: 1,flexDirection:'row'}}>
		   			  	<ZIcon style={{left:30,top:-5}} name="itunes" size={28} color="#383838" onPress={()=>this.itunes()}/>
		   			  	 <MIcon style={{left:50,top:-2}} name="apple-safari" size={32} color="#383838" onPress={()=>this.browser()}/>
		   			 	<Icon style={{left:70}} name="share-2" size={25} color="#383838" onPress={()=>this.showShareActionSheet()}/>
		   			 	<Icon style={{left:90}} name="download" size={25} color="#383838" onPress={()=>this.download()}/>
		   			 	<Icon style={{left:110}} name="mail" size={25} color="#383838" onPress={()=>this.contact()}/>
		   			 </View>
		   			  <Text style={{marginLeft:12,marginRight:12,fontSize:16,fontStyle:'italic'}}>"{this.props.description}"</Text>
		   			</ScrollView>
	   			</View>
					<View style={{height: 60}}>
				    <Button
			      	  large
			          buttonStyle = {{left:130,width: 80, height: 60}}	
			          textStyle={{fontSize: 15, color:'#0693e3'}}	      	  		      	  
			      	  backgroundColor="white"
			          title="Back"
			          onPress={()=> this.goToScreen()}
			    	/>  
					</View>
   			</View>
   		);
  	}
}
export default audioStack;