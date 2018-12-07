import React, { Component } from "react";
import {
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
URL = "https://media.blubrry.com/free_associations/s/dts.podtrac.com/redirect.mp3/populationhealthexchange.org/wp-content/podcasts/fa/Free_Associations_Episode_36.mp3"
class trySound extends Component{
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
		    alert('audio downloaded')
		  })  	
  }

  itunes() {
  	Linking.openURL(this.props.itunes_url);
  }

  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
		      url: this.props.podcast_url,
		      message: this.props.file_name,
		      subject: 'phxPodcast',
		    },
		    function(err){alert(err);},
		    function(e){});
	}
  componentDidMount(){
  	this.player = new Player(this.props.podcast_url);
  }

  	render() {
  		const initial = <View style={{backgroundColor:'white',flex:1, flexDirection:'row'}}>
  											<Text style={{left:120,top:30, fontWeight:'bold',fontSize:15}}>{this.props.short_title}</Text>
  											<Icon style={{left:170,top:25}} name="refresh-ccw" size={25} color="#383838" onPress={()=>this.stop()}/>
							   				<Icon style={{left:190,top:25}} name="play" size={25} color="#383838" onPress={()=>this.stream()}/>	
											</View>;
			const pause = <View style={{backgroundColor:'white',flex:1, flexDirection:'row'}}>
									   	<Text style={{left:120,top:30, fontWeight:'bold',fontSize:15}}>{this.props.short_title}</Text>
									   	<Icon style={{left:170,top:25}} name="refresh-ccw" size={25} color="#383838" onPress={()=>this.stop()}/>
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
		   			  <Text style={{marginLeft:12,marginRight:12,fontSize:16,fontStyle:'italic'}}>"{this.props.description}"</Text>
		   			 <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end',flexDirection:'row'}}>
		   			  <ZIcon style={{right:70,top:27}} name="itunes" size={30} color="#383838" onPress={()=>this.itunes()}/>
		   			 	<Icon style={{right:50,top:20}} name="share-2" size={25} color="#383838" onPress={()=>this.showShareActionSheet()}/>
		   			 	<Icon style={{right:30,top:20}} name="download" size={25} color="#383838" onPress={()=>this.download()}/>
		   			 </View>
		   			</ScrollView>
	   			</View>
					<View style={{height: 60}}>
				    <Button
		      	  large
		          buttonStyle = {{left:130,width: 80, height: 60}}	
		          textStyle={{fontSize: 15, color:'black'}}	      	  		      	  
		      	  backgroundColor="white"
		          title="Back"
		          onPress={()=> this.goToScreen()}
			    	/>  
					</View>
   			</View>
   		);
  	}
}
export default trySound;