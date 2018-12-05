import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button,
		FlatList,
		ScrollView,
		AsyncStorage,		
		Image,
		TouchableOpacity,
		} from "react-native";
import styles from "./style";
import { Navigation } from "react-native-navigation";
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

// Downloads Screen

class FlatListItem extends Component {
    render() {          
        return (
        	<TouchableOpacity style={{
                flex: 1,
                flexDirection:'column',
                backgroundColor: this.props.index % 2 == 0 ? 'white': 'white'}}>
	          	<View style={{
	          	  	flex:1,
	          	  	flexDirection:'row'}}> 
		         	<View style={{
		         		flex:1,
		         		flexDirection:'column',
		         		height:100
		         	}}>
		              <Text style={styles.flatListTitleWeb}>{this.props.item.name}</Text>
		              <Text style={styles.flatListItemWeb}>{this.props.item.path}</Text>
		            </View>
	            </View>
                <View style={{
                    height:1,
                    backgroundColor:'#5f6b71',
                }}></View>
        	</TouchableOpacity>
        );
    }
}

class Downloads extends Component{
	state={
		data:[]
	};

	viewFiles () {
		const podcastDir = RNFetchBlob.fs.dirs.DocumentDir+'/podcasts/'
		    //alert(podcastDir);		    

		// get a list of files and directories in the main bundle
		RNFS.readDir(podcastDir) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
		  .then((result) => {
		    console.log('GOT RESULT', result);
		    //alert(result[1].name);

		    // put names and directories in dictionary
		    var x;
        	var all_podcasts = [];
	        for (x in result) {
	            var name = result[x].name;
	            var path = result[x].path;
	        	all_podcasts.push({
	        		"name": name,
	        		"path": path,
	        	});
	        }
	        all_podcasts.shift();
	        this.setState({data:all_podcasts});
		    //alert(JSON.stringify(all_podcasts[0].name));	        

		    // stat the first file
		    return Promise.all([RNFS.stat(result[1].path), result[1].path]);
		  })
		  .then((statResult) => {
		    if (statResult[0].isFile()) {
		      // if we have a file, read it
		     // alert(statResult[1]);		    		      
		      return RNFS.readFile(statResult[1], 'utf8');
		    }

		    return 'no file';
		  })
		  .then((contents) => {
		    // log the file contents
		    console.log(contents);
		  })
		  .catch((err) => {
		    console.log(err.message, err.code);
		  });
	}

    componentDidMount(){
        //fetch data right after page load
        this.viewFiles();
    };


	render(){
		return(
			<View style={{flex: 1, marginTop: 22}}>
            <FlatList 
                data={this.state.data}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem item={item} index={index}>
                    </FlatListItem>);
                }}
                >

            </FlatList>
        	</View>
		);
	}

}

export default Downloads;