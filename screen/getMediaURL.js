import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Dimensions, TouchableHighlight, Image, FlatList} from 'react-native';
// Setting a windowSize variable to be used in the styles below.
//import HTMLView from 'react-native-htmlview';


export default class App extends Component<{}> {
    //an empty array
    state={
        data:[]
    };

    fetchData = async () =>{
        //response
        const response = await
            fetch('https://populationhealthexchange.org/wp-json/wp/v2/posts?per_page=60');
        //posts
        const posts = await response.json();
        var x;
        var url="concat";
        for (x in posts){
            var temp = JSON.stringify(posts[x].content.rendered);
            try{
                //get url from html format contents with RegExp
                var single_url = temp.match(/src=\\\"(\S*)\?/)[1];
                url = url.concat(single_url)+'\n'+'\n';
            }
            catch(err){
                url = url+'none'+'\n'+'\n';
            }
        }
        this.setState({data:url});
    };

    componentDidMount(){
        //fetch data right after page load
        this.fetchData();
    };


    render(){
        return(
            <ScrollView style={styles.container}>
                <Text>{this.state.data}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF',
    },
});