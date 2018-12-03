import React, { Component } from "react";
import {View,
		Text,
		StyleSheet,
		Button,
		FlatList,
		ScrollView,
		AsyncStorage,
		Image,
		TouchableOpacity
		} from "react-native";
import styles from "./style";
import { Navigation } from "react-native-navigation";

console.disableYellowBox = true;

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
	          		<Image
	          	  		source={{uri:this.props.item.img_url}}
	          	  		style={{width:100, height:100, margin:5}}
	          		/>
		         	<View style={{
		         		flex:1,
		         		flexDirection:'column',
		         		height:100
		         	}}>
		              <Text style={styles.flatListTitleWeb}>{this.props.item.short_title}</Text>
		              <Text style={styles.flatListItemWeb}>{this.props.item.title}</Text>
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



class WelcomeScreen extends Component{
	state={
        data:[]
    };

        fetchData = async () =>{
        //response
        const response = await fetch('https://populationhealthexchange.org/wp-json/wp/v2/posts?per_page=60');
        //posts
        const posts = await response.json();
        var x;
        var all_podcast = [];
        //var Podcast = {};
        for (x in posts){
            var flag = JSON.stringify(posts[x].content.protected);
            var type = JSON.stringify(posts[x].acf.feature_number);
            if(flag == "false" && type == "988"){
                var temp = JSON.stringify(posts[x].content.rendered);
                var name = JSON.stringify(posts[x].acf.post_header);
                var date = JSON.stringify(posts[x].date);
                var author = JSON.stringify(posts[x].author);
                var img_url_raw = JSON.stringify(posts[x].acf.feature_image.url);
                var description = JSON.stringify(posts[x].acf.blurb);
                var short_title = JSON.stringify(posts[x].title.rendered);
                var img_url = img_url_raw.match(/\"(\S*)\"/)[1];
                name = name.replace(/^\"|\"$/g,'');
                name = name.replace(/[\\]/g,'');
                short_title = short_title.replace(/^\"|\"$/g,'');
                short_title = short_title.replace('FA ','');
                description = description.replace(/^\"|\"$/g,'');
                all_podcast.push({
                    "title": name,
                    "date": date,
                    "author": author,
                    "img_url": img_url,
                    "description": description,
                    "short_title": short_title,
                });
            }
        }
        this.setState({data:all_podcast});
        //alert(JSON.stringify(all_podcast[].description))
    };
    componentDidMount(){
        //fetch data right after page load
        this.fetchData();
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

export default WelcomeScreen;