import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		Linking,
		WebView,
		ScrollView,
		ActionSheetIOS,
		} from "react-native";
import styles from "./style";
import {Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
class speakingStack extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'Practically Speaking'
	        },
	      }
	    };
	  }
	  
  	goToScreen = () =>{
		Navigation.dismissModal(this.props.componentId);
	}

	goToVideo = (screenName) =>{
	Navigation.push(this.props.componentId,{
		component:{
			name: 'perspVideo',
			passProps: {
				video_iframe:this.props.video_iframe
			}
		}
	})
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
		      message: this.props.title,
		      subject: 'phxWebinar',
		    },
		    function(err){alert(err);},
		    function(e){});
	}
	render(){
		//const tempFrame = trim(this.props.video_iframe.replace('\"',''))
		const Webview =  <WebView
							originWhitelist={['*']}
			      	  		source={{html:this.props.video_iframe}}
			      	  		style={{width:320,height:200, marginTop:30,marginLeft:20}}
			      	  		scrollEnable = {false}
			      	  		scalesPageToFit = {false}
			      		/>;						
		let message = Webview;
		return(
			<View style={styles.container}>
				<Text style={{    
					color: 'black',
				    padding:2,
				    fontSize:18,
				    fontWeight:'bold',marginTop:20
				}}>
					{this.props.title}
				</Text>
				<View style={{flex:1, flexDirection:'column'}}> 
			      		<ScrollView style={{flex:1, flexDirection:'column', marginBottom:10}}>
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
					         		marginTop:-10
					         	}}>
					              <Text style={styles.webinarDate}>{this.props.author_name}</Text>
					              <Text style={styles.webinarAuthorName}>{this.props.date}</Text>
					              <View style={{flex: 1,flexDirection:'row'}}>
								   			  <MIcon style={{left:30,top:35}} name="apple-safari" size={30} color="#383838" onPress={()=>this.browser()}/>
								   			 	<Icon style={{left:45,top:35}} name="share-2" size={25} color="#383838" onPress={()=>this.showShareActionSheet()}/>
								   			 	<Icon style={{left:60,top:35}} name="mail" size={25} color="#383838" onPress={()=>this.contact()}/>
								   			 </View>
					            </View>
				            </View>
				            <View style={{}}>{message}</View>
				            <View style={{backgroundColor:"#E3EAE7", marginTop:35,marginLeft:20,marginRight:20, borderRadius:10}}>
				            	<Text style={styles.authorDescription}>{this.props.author_description}</Text>
				            </View>
				            <View style={{marginTop:10,marginLeft:20,marginRight:20}}>
				            <Text style={styles.authorDescription}>"{this.props.excerpt}"</Text>
				            </View>
			      			</ScrollView>
	      		</View>
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

export default speakingStack;
