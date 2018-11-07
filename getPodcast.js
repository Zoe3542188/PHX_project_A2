import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Dimensions, TouchableHighlight, Image, FlatList} from 'react-native';
// Setting a windowSize variable to be used in the styles below.
//import HTMLView from 'react-native-htmlview';

/* Data Structure in this page*/
/*
    all_podcast=[{
                    name: posts header
                    podcast_url
                    author: author index
                    date
                    description
                    img_url: img link for current post
                } 
                {...} 
                {...} 
                ...
                ]
*/

export default class App extends Component<{}> {
    //an empty array
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
                var name = JSON.stringify(posts[x].acf.page_header);
                var date = JSON.stringify(posts[x].date);
                var author = JSON.stringify(posts[x].author);
                var img_url = JSON.stringify(posts[x].acf.feature_image.url);
                var description = JSON.stringify(posts[x].acf.blurb);
                //Podcast['single_url'] = single_url;
                //Podcast['name'] = name;
                //Podcast['date'] = date;
                //Podcast['author'] = author;
                //Podcast['img_url'] = img_url;
                //Podcast['description'] = description;
                all_podcast.push({
                    'name': name,
                    'date': date,
                    'author': author,
                    'img_url': img_url,
                    'description': description,
                    'podcast_url': podcast_url,
                });
            }
        }
        this.setState({data:all_podcast});
        alert(JSON.stringify(all_podcast[1]));
    };

    componentDidMount(){
        //fetch data right after page load
        this.fetchData();
    };


    render(){
        return(
            <View style={styles.container}>
                <Text>Nothing to display in this page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF',
    },
});