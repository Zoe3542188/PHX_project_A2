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

//console.disableYellowBox = true;

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
            name: 'perspStack',
            passProps: {
              title: this.props.item.title,
              img_url: this.props.item.img_url,                  
              description: this.props.item.description,
              content:this.props.item.content,
              origin_url:this.props.item.origin_url,
              author_name:this.props.item.author_name,
              author_description:this.props.item.author_description,
              author_img:this.props.item.author_img,  
              date:this.props.item.date, 
              excerpt:this.props.item.excerpt, 
              alter_content:this.props.item.alter_content,
            },
            options: {
              topBar: {
                title: {
                  text: 'PHX Perspectives'
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
          text: 'PHX Perspectives',
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
        //var x;
        var all_podcast = [];
        //var Podcast = {};
        for (x in posts){
            var alter_content = "";
            var flag = JSON.stringify(posts[x].content.protected);
            var type = JSON.stringify(posts[x].acf.feature_number);
            if(flag == "false" && type == "1662"){
                var temp = JSON.stringify(posts[x].content.rendered);
                //var podcast_url = temp.match(/src=\\\"(\S*)\?/)[1];
                var name = JSON.stringify(posts[x].acf.post_header);
                var date = JSON.stringify(posts[x].date);
                var author = JSON.stringify(posts[x].author);
                var img_url_raw = JSON.stringify(posts[x].acf.feature_image.url);
                var description = JSON.stringify(posts[x].acf.blurb);
                var short_title = JSON.stringify(posts[x].title.rendered);
                var img_url = img_url_raw.match(/\"(\S*)\"/)[1];
                //var content = temp.toString();
                var origin_url = JSON.stringify(posts[x].guid.rendered)
                var sidebar = posts[x].acf.sidebar;
                var author_name = JSON.stringify(posts[x].acf.sidebar[0].title)
                var author_description = JSON.stringify(posts[x].acf.sidebar[0].description)
                var author_img = JSON.stringify(posts[x].acf.sidebar[0].image.url)
                var excerpt = JSON.stringify(posts[x].excerpt.rendered)
                excerpt = excerpt.replace(/^\"|\"$/g,'');
                excerpt = excerpt.replace('<p>','');
                excerpt = excerpt.replace('</p>','');
                excerpt = excerpt.replace('[&hellip;]\\n','')
                author_description = author_description.replace(/^\"|\"$/g,'');
                date = date.replace(/^\"|\"$/g,'');
                date = date.replace('T',' ');
                author_name = author_name.replace(/^\"|\"$/g,'');
                author_img = author_img.replace(/^\"|\"$/g,'');
                origin_url = origin_url.replace(/^\"|\"$/g,'');
                name = name.replace(/^\"|\"$/g,'');
                name = name.replace(/[\\]/g,'');
                short_title = short_title.replace(/^\"|\"$/g,'');
                short_title = short_title.replace('FA ','');
                description = description.replace(/^\"|\"$/g,'');
                description = description.replace(/[\\]/g,'');
                try{
                  var callouts = JSON.stringify(posts[x].acf.in_content_callouts);
                  if(callouts != ""){
                  for (t in callouts){
                    var type = JSON.stringify(posts[x].acf.in_content_callouts[t].acf_fc_layout)
                    if(type === '"wysiwyg"'){
                      //alert("in")
                      var cont = JSON.stringify(posts[x].acf.in_content_callouts[t].content);
                      alter_content = alter_content+cont;
                     // alert(alter_content)
                    }
                    else if(type === '"accordion"'){
                      var cont = JSON.stringify(posts[x].acf.in_content_callouts[t].quote);
                      alter_content = alter_content+'<strong>'+quote+'</strong>'+'</br>';
                    }
                    else{}
                  }
                }}
                catch(error){
                 // alter_content = null
                }
                //alter(alter_content)
                all_podcast.push({
                    "title": name,
                    "date": date,
                    "author": author,
                    "img_url": img_url,
                    "description": description,
                    "content":temp,
                    "short_title": short_title,
                    "origin_url":origin_url,
                    "author_name": author_name,
                    "author_description": author_description,
                    "author_img": author_img,
                    "excerpt":excerpt,
                    "alter_content":alter_content,
                });
            }
        }
        this.setState({data:all_podcast});
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