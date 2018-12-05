import React, { Component } from "react";
import {View,
		Image,
		Text,
		StyleSheet,
		Linking,
		WebView,
		ScrollView,
		} from "react-native";
import styles from "./style";
import {Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';

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

	render(){
		const Webview =  <WebView
			      	  		source={{uri:this.props.video_url}}
			      	  		style={{width:370,height:200}}
			      	  		contentInset={{top:5,bottom:340}}
			      	  		scrollEnable = {false}
			      		/>;
		const Upcomming = <Text style={styles.upComingDescription}>The Event is not avaliable here. Please view blew for additional infomation:)</Text>;
		let message;
		var flag = this.props.video_url.includes("jpg");
		if(flag){
			message = Upcomming;
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
					              <Button
							          buttonStyle = {{width: 150, height: 40, borderRadius:10,top:35,left:10}}	
							          textStyle={{fontSize: 12, color:'black'}}	      	  		      	  
							      	  backgroundColor="#B1E3F3"
							          title="View in Website"
							          onPress={()=> {Linking.openURL(this.props.video_url)}}
							    />
					            </View>
				            </View>
				            <View style={{backgroundColor:"#E3EAE7", marginTop:45,marginLeft:20,marginRight:20, borderRadius:10}}>
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