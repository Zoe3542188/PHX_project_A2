import React, { Component } from "react";
import {Card, ListItem, Button, Icon, Header, Tile} from 'react-native-elements';
import {View,
		Text,
		StyleSheet,
		FlatList,
		ScrollView,
		AsyncStorage,
		Image,
		TouchableOpacity
		} from "react-native";
import styles from "./style";
import { Navigation } from "react-native-navigation";
import {startStacks} from './startMainTab'

console.disableYellowBox = true;

export class FlatListItem extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  goToScreen = (screenName) =>{
    Navigation.push(this.props.componentId,{
      component:{
        name: screenName
      }
    })
  }

  handlePress () {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'speakingStack',
            passProps: {
              title: this.props.item.title,
              img_url: this.props.item.img_url,                  
              description: this.props.item.description,
              video_iframe:this.props.item.video_iframe,
              author_name:this.props.item.author_name,
              author_description:this.props.item.author_description,
              author_img:this.props.item.author_img,
              date:this.props.item.date,
              excerpt:this.props.item.excerpt,
              origin_url:this.props.item.origin_url,
            },
            options: {
              topBar: {
                title: {
                  text: 'Practically Speaking'
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
    	<Card style={{height:20, width:50}}
        title={this.props.item.title}
        image={{uri:this.props.item.img_url}
        } >
        <Text style={{marginBottom: 10}}>
        {this.props.item.description}
        </Text>
        <Button onPress={()=>this.handlePress()}
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#2ec1dc'
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='See more' 
        />        
        </Card>
    );
  }
}


class WelcomeScreen extends Component{
  static get options(){
    return{
      topBar:{
        title:{
          text: 'Practically Speaking',
      }},
    }
  }
	state={
        data:[]
    };

        fetchData = async () =>{
        //response
        const response = await fetch('https://populationhealthexchange.org/wp-json/wp/v2/posts?per_page=60');
        //posts
        const posts = await response.json();
        var x;
        var all_perspective = [];
        //var Podcast = {};
        for (x in posts){
            var flag = JSON.stringify(posts[x].content.protected);
            var type = JSON.stringify(posts[x].acf.feature_number);
            if(flag == "false" && type == "884"){
                var temp = JSON.stringify(posts[x].content.rendered);
                var name = JSON.stringify(posts[x].acf.post_header);
                var date = JSON.stringify(posts[x].date);
                var author = JSON.stringify(posts[x].author);
                var img_url_raw = JSON.stringify(posts[x].acf.feature_image.url);
                var description = JSON.stringify(posts[x].acf.blurb);
                var short_title = JSON.stringify(posts[x].title.rendered);
                var img_url = img_url_raw.match(/\"(\S*)\"/)[1];
                var video_iframe = temp.match(/(<iframe.+?<\/iframe>)/g);
                var sidebar = posts[x].acf.sidebar;
                var author_name = JSON.stringify(posts[x].acf.sidebar[0].title)
                var author_description = JSON.stringify(posts[x].acf.sidebar[0].description)
                var author_img = JSON.stringify(posts[x].acf.sidebar[0].image.url)
                var excerpt = JSON.stringify(posts[x].excerpt.rendered)
                var origin_url = JSON.stringify(posts[x].guid.rendered)
                name = name.replace(/^\"|\"$/g,'');
                name = name.replace(/[\\]/g,'');
                video_iframe = video_iframe.toString()
                video_iframe = video_iframe.replace('"','').replace(/[\\]/g,'');
                short_title = short_title.replace(/^\"|\"$/g,'');
                short_title = short_title.replace('Webinar','');
                short_title = short_title.replace('Web','');
                description = description.replace(/^\"|\"$/g,'');
                author_name = author_name.replace(/^\"|\"$/g,'');
                try{author_img = author_img.replace(/^\"|\"$/g,'');}
                catch(error){}
                origin_url = origin_url.replace(/^\"|\"$/g,'');
                excerpt = excerpt.replace(/^\"|\"$/g,'');
                excerpt = excerpt.replace('<p>','');
                excerpt = excerpt.replace('</p>','');
                excerpt = excerpt.replace('[&hellip;]\\n','')
                excerpt = excerpt.replace('\\n','')
                author_description = author_description.replace(/^\"|\"$/g,'');
                date = date.replace(/^\"|\"$/g,'');
                date = date.replace('T',' ');
                //alert(origin_url)
                all_perspective.push({
                    "title": name,
                    "date": date,
                    "author": author,
                    "img_url": img_url,
                    "description": description,
                    "short_title": short_title,
                    "video_iframe": video_iframe,
                    "author_name": author_name,
                    "author_description": author_description,
                    "author_img": author_img,
                    "excerpt":excerpt,
                    "origin_url":origin_url,
                });
            }
        }
        this.setState({data:all_perspective});
        //alert(JSON.stringify(all_podcast[].description))
    };
				//<Button title="Click me" onPress={()=>this.goToScreen('Clickme')} />
				//<Button title="Don't click me" onPress={()=>alert("I said don't!")}/>
    componentWillMount(){

    }
    componentDidMount(){
        //fetch data right after page load
        this.fetchData();
    };



	render(){

		return(
			<View style={{flex: 1, marginTop:22}}>
            <View style={styles.headerView}>
              <Text style={styles.headerFont}>Practically Speaking</Text>
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
