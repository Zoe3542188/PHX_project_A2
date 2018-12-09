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
class videoStack extends Component{
	static get options() {
	    return {
	      topBar: {
	        title: {
	          text: 'Webinar Components'
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

  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
		      url: this.props.video_url,
		      message: this.props.title,
		      subject: 'phxWebinar',
		    },
		    function(err){alert(err);},
		    function(e){});
	}
	render(){
		const Webview =  <WebView
			      	  		source={{uri:this.props.video_url}}
			      	  		style={{width:370,height:200}}
			      	  		contentInset={{top:5,bottom:340}}
			      	  		scrollEnable = {false}
			      		/>;
		const Upcoming =<View style={styles.upComingDescription}>
						<Text> 
							COMING SOON! This event has not started yet. Please check back at later date or see the website for more information.
						</Text>					
			      		<Image
			      	  		source={{uri:this.props.video_url}}
			      	  		style={{width:340,height:220,marginTop:5}}
			      		/>
			      		</View>
							
		let message;
		var flag = this.props.video_url.includes("jpg");
		if(flag){
			message = Upcoming;
		}
		else{
			message = Webview;
		}
		return(
			<View style={styles.container}>
				<Text style={styles.flatListTitleWeb}>
					{this.props.title}
				</Text>
				<View style={{flex:1, flexDirection:'column'}}> 
					<View>
			      		{message}
			      	</View>
			      	<View style={{marginTop:-330, height:320, width:370}}>
			      		<ScrollView style={{flex:1, flexDirection:'column'}}>
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
					         		height:100
					         	}}>
					              <Text style={styles.webinarDate}>{this.props.author_name}</Text>
					              <Text style={styles.webinarAuthorName}>{this.props.date}</Text>
					              <View style={{flex: 1,flexDirection:'row'}}>
								   			  <MIcon style={{left:30,top:35}} name="apple-safari" size={30} color="#383838" onPress={()=>this.browser()}/>
								   			 	<Icon style={{left:45,top:35}} name="share-2" size={25} color="#383838" onPress={()=>this.showShareActionSheet()}/>
								   			 </View>
					            </View>
				            </View>
				            <View style={{backgroundColor:"#E3EAE7", marginTop:35,marginLeft:20,marginRight:20, borderRadius:10}}>
				            	<Text style={styles.authorDescription}>{this.props.author_description}</Text>
				            </View>
				            <View style={{marginTop:10,marginLeft:20,marginRight:20}}>
				            <Text style={styles.authorDescription}>"{this.props.excerpt}"</Text>
				            </View>
			      			</ScrollView>
		      		</View>
	      		</View>
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

export default videoStack;
