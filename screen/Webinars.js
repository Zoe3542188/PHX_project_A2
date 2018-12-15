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

//console.disableYellowBox = true;

export const startVideoStack = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Video',
      children: [
        {
          component: {
            name: 'Webinars',
          }
        }
    ],
    }
  }
})

class FlatListItem extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    handlePress () {
        Navigation.showModal({
          stack: {
            children: [{
              component: {
                name: 'videoStack',
                passProps: {
                  title: this.props.item.title,
                  img_url: this.props.item.img_url,                  
                  description: this.props.item.description,  
                  video_url: this.props.item.video_url,  
                  author_name:this.props.item.author_name,
                  author_description:this.props.item.author_description,
                  author_img:this.props.item.author_img,  
                  date:this.props.item.date, 
                  excerpt:this.props.item.excerpt, 
                  origin_url:this.props.item.origin_url,   
                  video_iframe:this.props.item.video_iframe,
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Webinars'
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
                flexDirection:'column'}}>
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
                    backgroundColor:'#5f6b71',}}>
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
        const response = await fetch('https://populationhealthexchange.org/wp-json/wp/v2/posts?per_page=100');
        //posts
        const posts = await response.json();
        var x;
        var all_Webinars = [];
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
                var video_url = temp.match(/src=\\\"(\S*)/)[1];
                var sidebar = posts[x].acf.sidebar;
                var author_name = JSON.stringify(posts[x].acf.sidebar[0].title)
                var author_description = JSON.stringify(posts[x].acf.sidebar[0].description)
                var author_img = JSON.stringify(posts[x].acf.sidebar[0].image.url)
                var excerpt = JSON.stringify(posts[x].excerpt.rendered)
                var origin_url = JSON.stringify(posts[x].guid.rendered)
                try{
                    var video_iframe = temp.match(/(<iframe.+?<\/iframe>)/g);
                    video_iframe = video_iframe.toString()
                    video_iframe = video_iframe.replace('"','').replace(/[\\]/g,'');
                }
                catch(error){var video_iframe = null}
                name = name.replace(/^\"|\"$/g,'');
                name = name.replace(/[\\]/g,'');
                short_title = short_title.replace(/^\"|\"$/g,'');
                short_title = short_title.replace('Webinar','');
                short_title = short_title.replace('Web','');
                description = description.replace(/^\"|\"$/g,'');
                author_name = author_name.replace(/^\"|\"$/g,'');
                author_img = author_img.replace(/^\"|\"$/g,'');
                video_url = video_url.replace(/^\"|\"$/g,'');
                origin_url = origin_url.replace(/^\"|\"$/g,'');
                excerpt = excerpt.replace(/^\"|\"$/g,'');
                excerpt = excerpt.replace('<p>','');
                excerpt = excerpt.replace('</p>','');
                excerpt = excerpt.replace('[&hellip;]\\n','')
                author_description = author_description.replace(/^\"|\"$/g,'');
                date = date.replace(/^\"|\"$/g,'');
                date = date.replace('T',' ');
                //alert(origin_url)
                all_Webinars.push({
                    "title": name,
                    "date": date,
                    "author": author,
                    "img_url": img_url,
                    "description": description,
                    "short_title": short_title,
                    "video_url": video_url,
                    "author_name": author_name,
                    "author_description": author_description,
                    "author_img": author_img,
                    "excerpt":excerpt,
                    "origin_url":origin_url,
                    "video_iframe":video_iframe,
                });
            }
        }
        this.setState({data:all_Webinars});
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
              <Text style={styles.headerFont}>Webinars</Text>
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