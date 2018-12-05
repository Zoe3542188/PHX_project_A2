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
  // handlePress () {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: 'perspStack',
  //       passProps: {
  //         text: 'Pushed screen'
  //       },
  //       options: {
  //         topBar: {
  //           title: {
  //             text: 'Pushed screen title'
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

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
            },
            options: {
              topBar: {
                title: {
                  text: 'Perspectives'
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
                name = name.replace(/^\"|\"$/g,'');
                name = name.replace(/[\\]/g,'');
                short_title = short_title.replace(/^\"|\"$/g,'');
                short_title = short_title.replace('FA ','');
                description = description.replace(/^\"|\"$/g,'');
                description = description.replace(/[\\]/g,'');
                all_podcast.push({
                    "title": name,
                    "date": date,
                    "author": author,
                    "img_url": img_url,
                    "description": description,
                    //"podcast_url": podcast_url,
                    "short_title": short_title,
                });
            }
        }
        this.setState({data:all_podcast});
        //alert(JSON.stringify(all_podcast[].description))
    };
				//<Button title="Click me" onPress={()=>this.goToScreen('Clickme')} />
				//<Button title="Don't click me" onPress={()=>alert("I said don't!")}/>
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
