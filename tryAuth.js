import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Image, FlatList} from 'react-native';
// Setting a windowSize variable to be used in the styles below.
export default class App extends Component<{}> {
    //an empty array
    state={
        data:[]
    };

    fetchData = async () =>{
        //response
        let base64 = require('base-64');
        let username = 'appbuphx';
        let password = '254346b9';
        let headers = new Headers();
        headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));
        const response = await
            fetch('https://leadershipquotes.mystagingwebsite.com/wp-json/wp/v2/media',{method:'GET',
                headers: headers,});
        //posts
        const posts = await response.json();

        this.setState({data:posts});
    };

    componentDidMount(){
        //page load
        this.fetchData();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Hello</Text>
                <FlatList
                    data = {this.state.data}
                    keyExtractor={(x,i) =>i}
                    renderItem={({item}) =>
                        <View>
                            <Text>{item.title.rendered}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'#F5FCFF',
        alignItems: 'center',
    },
});
