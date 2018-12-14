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
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';    
import styles from "./style";
import { Navigation } from "react-native-navigation";
import { startTabs, startStacks} from './startMainTab';

//console.disableYellowBox = true;

export const startAudioStack = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Podcast',
          }
        }
    ],
    }
  }
})

class FlatListItem extends Component {

  constructor() {
    super();
    this.state = {

    }
  }


  handlePress () {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'audioStack',
            passProps: {
              title: this.props.item.title,
              short_title: this.props.item.short_title,
              img_url: this.props.item.img_url,                  
              podcast_url: this.props.item.podcast_url,
              description: this.props.item.description,
              itunes_url: this.props.item.itunes_url, 
              file_name: this.props.item.file_name,     
              origin_url:this.props.item.origin_url,        
            },
            options: {
              topBar: {
                title: {
                  text: this.props.item.short_title
                }
              }
            }
          }
        }]
      }
    });
  }

  render() {          
    return (
      <TouchableOpacity onPress={()=>this.handlePress()} style={{
        flex: 1,
        flexDirection:'column',
        backgroundColor: this.props.index % 2 == 0 ? 'white': '#2ec1dc'}}>
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
            <Text style={styles.flatListTitle}>{this.props.item.short_title}</Text>
            <Text style={styles.flatListItem}>{this.props.item.title}</Text>
          </View>
        </View>
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
            if(flag == "false" && type == "844"){
                var temp = JSON.stringify(posts[x].content.rendered);
                var podcast_url = temp.match(/src=\\\"(\S*)\?/)[1];
                var name = JSON.stringify(posts[x].acf.post_header);
                var date = JSON.stringify(posts[x].date);
                var author = JSON.stringify(posts[x].author);
                var img_url_raw = JSON.stringify(posts[x].acf.feature_image.url);
                var description = JSON.stringify(posts[x].acf.blurb);
                var short_title = JSON.stringify(posts[x].title.rendered);
                var img_url = img_url_raw.match(/\"(\S*)\"/)[1];
                var itunes = temp.match(/itunes(\S*)\"/)[1];
                var itunes_url = "https://itunes"+itunes;
                var origin_url = JSON.stringify(posts[x].guid.rendered)
                origin_url = origin_url.replace(/^\"|\"$/g,'');
                name = name.replace(/^\"|\"$/g,'');
                name = name.replace(/[\\]/g,'');
                short_title = short_title.replace(/^\"|\"$/g,'');
                short_title = short_title.replace('FA ','');
                description = description.replace(/^\"|\"$/g,'');
                var file_name = short_title.replace(' ','_');

                all_podcast.push({
                    "title": name,
                    "date": date,
                    "author": author,
                    "img_url": img_url,
                    "description": description,
                    "podcast_url": podcast_url,
                    "short_title": short_title,
                    "itunes_url": itunes_url,
                    "file_name": file_name,  
                    "origin_url":origin_url,                  
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
            <View style={styles.headerView}>
              <Text style={styles.headerFont}>Podcasts</Text>
            </View>
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