import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		FlatList,
		ScrollView,
		AsyncStorage,		
		Image,
		TouchableOpacity,
		TouchableHighlight,
		Alert,
		} from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/Feather';
import Swipeout from 'react-native-swipeout';
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';  
import {Button} from 'react-native-elements';
import { Navigation } from "react-native-navigation";
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

// Downloads Screen
class FlatListItem extends Component {
	constructor(props){
		super(props)
		this.player = new Player('file://'+this.props.item.path)
		this.state = {isplaying:false,isrefresh:false}
	}
	playFile() {
		this.player.play();
		this.setState({
    	isplaying:!this.state.isplaying
    })
	}

	pauseFile(){
			this.player.pause();
			this.setState({
	    	isplaying:!this.state.isplaying
	    })
	}

	stopFile(){
			this.player.destroy();
			this.setState({
	    	isplaying:false
	    })
	}

	deletion(){
		this.stopFile();
		this.deleteFile();
		this.props.parentFlatList.refresh();
		this.setState({isplaying:true})
	}

  deleteFile(){
  	//alert(this.props.children)
  	var path = RNFS.DocumentDirectoryPath + '/podcasts/'+this.props.item.name;
  	//alert(path)
  	//alert(this.props.item.path)
		return RNFS.unlink(path)
		  .then(() => {
		    console.log('FILE DELETED');
		  })
		  // `unlink` will throw an error, if the item to unlink does not exist
		  .catch((err) => {
		    console.log(err.message);
		  });
  }

  render() {   
  	const initial = <View style={{flex:1, flexDirection:'row'}}>   		
			  	<Icon style={{left:70,top:35}} name="refresh-ccw" size={25} color="#383838" onPress={()=>this.stopFile()}/>
 					<Icon style={{left:90,top:35}} name="play" size={25} color="#383838" onPress={()=>this.playFile()}/>					        
        </View>;
    const pause = <View style={{flex:1, flexDirection:'row'}}>   		
			  	<Icon style={{left:70,top:35}} name="refresh-ccw" size={25} color="#383838" onPress={()=>this.stopFile()}/>
 					<Icon style={{left:90,top:35}} name="pause" size={25} color="#383838" onPress={()=>this.pauseFile()}/>					        
        </View>;
    let message;
    if(!this.state.isplaying){message = initial}
    else{message = pause}
    const swipeSettings={
    	autoClose:true,
    	right:[
    			{
		        text: 'Delete',type:'delete',
		        onPress:()=>{   		
		        	Alert.alert(
			    			'Delete Podcast',
			    			'Are you sure you want to delete?',[
			    				{text:'No',onPress:()=>console.log('cancle'),style:'cancle'},
			    				{text:'Yes',onPress:()=>(this.deletion ())},
    						],
    						{cancelable:true}
    					);
		        },
		      }
		  ],
		}
		if(this.props.item.name === " ")
			return(
				<View style={{
          flex: 1,
          flexDirection:'column',
          alignItems: 'center'
        	}}>
        	<Text>Pull to Refresh and Swipe to Delete</Text>
        </View>
      )
		else
    return (
    	<View style={{
          flex: 1,
          flexDirection:'column',
        	}}>
        <Swipeout style={{
        	backgroundColor:'white',
          borderStyle:'solid',
          borderWidth:0.2,
          borderBottomColor:'black',
          borderTopColor:'white',
          borderRadius:5,}}
          backgroundColor='white' {...swipeSettings}>
          <View style={{
      	  	flex:1,
      	  	flexDirection:'row'}}> 
		       	<View style={{
		       		flex:1,
		       		flexDirection:'column',
		       		height:90
		       	}}>
            	<Text style={{top:35,left:20,fontWeight:'700',fontSize:16}}>{this.props.item.name}</Text>
        		</View>
        			{message}
        	</View>
				</Swipeout>
    	</View>
    );
  }
}

class Downloads extends Component{

	constructor(props){
		super(props);
		this.state={
			data:[],
			uniqueValue:true,
			refreshing:false,
			seed:1,
			page:1,
		}
	};

	viewFiles () {
		const{page,seed} = this.state
		const podcastDir = RNFetchBlob.fs.dirs.DocumentDir+'/podcasts/'
		var all_podcasts = [{num:0,name:' ',path:'null'}];
		//alert(podcastDir);		    
		// get a list of files and directories in the main bundle
		RNFS.readDir(podcastDir) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
		  .then((result) => {
		    console.log('GOT RESULT', result);
		    //alert(result[1].name);
		    // put names and directories in dictionary
		    var x;
		      for (x in result) {
		          var name = result[x].name;
		          var path = result[x].path;
		          var num = name.replace(/[^0-9]/ig, "");
		      	all_podcasts.push({
		      		"num":num,
		      		"name": name,
		      		"path": path,
		      	});
		      	//all_podcasts.shift();
		      	all_podcasts = all_podcasts.sort()
	          //this.setState({data:all_podcasts});
		      	//this.setState({data:all_podcasts,refreshing:false})
		      }
		  })
		  .then((contents) => {
		    // log the file contents
		    console.log(contents);
		  })
		  .catch((err) => {
		    console.log(err.message, err.code);
		  });
		this.setState({data:all_podcasts,refreshing:false});
	}

	componentWillMount(){

	}
  componentDidMount(){
  	this.viewFiles();

      //fetch data right after page load
  };

  handleRefresh(){
  	this.setState({refreshing:true,seed:this.state.seed+1,page:1,
  	},()=>{
  		this.viewFiles();
  	})
  }

  refresh(){
  	this.setState({uniqueValue:!this.state.uniqueValue})
  	this.viewFiles()
  }
	getQuickActions=()=>{
    return <View style={styles.quickAContent}>
            <TouchableHighlight onPress={()=>this.refresh()}>
                <View style={styles.quick}>
                    <Icon style={styles.delete} name="trash-2" size={25} color="white"/>
                </View>
            </TouchableHighlight>
          </View>
	 };
	render(){
		return(
			<View style={{flex: 1, marginTop: 22}}>
	            <View style={styles.headerView}>
	              <Text style={styles.headerFont}>Local Podcasts</Text>
	            </View>
	            <View style={{flex:1,Top:-100}}>
	            <FlatList 
	                data={this.state.data}
	                renderItem={({item, index})=>{
	                    return (
	                    <FlatListItem item={item} index={index} parentFlatList={this}>
	                    </FlatListItem>);
	                }}
	                refreshing={this.state.refreshing}
	                onRefresh={this.handleRefresh.bind(this)}
	                >
	            </FlatList>
	            </View>
        	</View>
		);
	}

}

export default Downloads;