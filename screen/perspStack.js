import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		WebView,
		ScrollView,
		Dimensions,
		Linking,
		ActionSheetIOS,
		Alert,
		} from "react-native";
import styles from "./style";
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';  
import {Button,Tile} from 'react-native-elements';
import HTML from 'react-native-render-html';
import {startStacks, startTabs} from './startMainTab';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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

  goToScreen = () =>{
		Navigation.dismissModal(this.props.componentId);
  }
  browser() {
  	Linking.openURL(this.props.origin_url);
  }

  contact(){
  	Linking.openURL('https://populationhealthexchange.org/contact-us/')
  }
  

  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
		      url: this.props.origin_url,
		      message: 'Check out this article from PHX:\n\n'+this.props.title+'\n',
		      subject: 'phx Perspectives',
		    },
		    function(err){alert(err);},
		    function(e){});
	}
	render(){
		let message;
		if(this.props.content === '""'){
			message = this.props.alter_content;
			message = message.replace('"','').replace(/[\\]/g,'');
      message = message.replace(/n\"/g,'');
      message = message.replace(/n\</g,"\<\/br\>\<")
      message = message.replace(/n\</g,"")
      message = message.replace(/\<ul\>/g,"")
      message = message.replace(/\<\/ul\>/g,"")
		}
		else{
			message = this.props.content;
			message = message.replace('"','').replace(/[\\]/g,'');
      message = message.replace(/n\"/g,'');
      message = message.replace(/n\</g,"\<\/br\>\<")
      message = message.replace(/n\</g,"")
      message = message.replace(/\<ul\>/g,"")
      message = message.replace(/\<\/ul\>/g,"")}
		return(
			<View style={styles.container}>	
				<ScrollView style={{top:0,marginBottom:20,height:400}}>
				<Tile
						titleStyle={{color: 'white',
							    padding:2,
							    fontSize:20,
							    fontWeight:'800',
								marginTop:120}}
					  imageSrc={{uri:this.props.img_url}}
					  title={this.props.title}
					  featured
					/>
		      		<View style={{
				          	  	flex:1,
				          	  	flexDirection:'row'}}> 
				          		<Image
				          	  		source={{uri:this.props.author_img}}
				          	  		style={{width:100, height:100, borderRadius:50, left:20, top:10}}
				          		/>
					         	<View style={{
					         		flex:1,
					         		flexDirection:'column',
					         		height:100,
					         	}}>
					              <Text style={styles.webinarDate}>{this.props.author_name}</Text>
					              <Text style={styles.webinarAuthorName}>{this.props.date}</Text>
					          </View>
					    </View>	 
					  <View style={{backgroundColor:"#E3EAE7", marginTop:35,marginLeft:20,marginRight:20, borderRadius:10}}>
				      <Text style={styles.authorDescription}>{this.props.author_description}</Text>
				    </View>
	          <View style={{flex: 1,flexDirection:'row',marginTop:-10,marginBottom:30}}>
		   			  <MIcon style={{left:30,top:33}} name="apple-safari" size={30} color="#383838" onPress={()=>this.browser()}/>
		   			 	<Icon style={{left:45,top:35}} name="share-2" size={25} color="#383838" onPress={()=>this.showShareActionSheet()}/>
		   			 	<Icon style={{left:60,top:35}} name="mail" size={25} color="#383838" onPress={()=>this.contact()}/>
		   			</View>
					<View style={{margin:10}}>
						<HTML 
							html={message}
							tagsStyles = {{p:{fontSize:16,letterSpacing:0.6},strong:{fontWeight:'bold'},a:{fontStyle: 'italic'},a:{color:'#2990a4',fontWeight:'500'}}}
							onLinkPress={(event, href)=>{Linking.openURL(href)}}
						/>
					</View>
				</ScrollView>
		       	<Button
		      	  large	      	  
		      	  icon={{name: 'download', type: 'font-awesome', size:12}}
		          buttonStyle = {{left:-10,width: 80, height: 60}}	
		          textStyle={{fontSize: 15, color:'#0693e3'}}	      	  		      	  
		      	  backgroundColor="white"
		          title="Back"
		          onPress={()=> this.goToScreen()}
			    />       			
			</View>
		);
	}
}

export default perspStack;