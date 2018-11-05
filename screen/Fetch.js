import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Image, FlatList} from 'react-native';
import ApiUtils from './ApiUtils'

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
        headers.append("Authorization", "Basic " + base64.encode("user:password"));
        const response = await
            fetch('https://populationhealthexchange.org/wp-json/wp/v2/posts',{method:'GET', headers: headers})
              .then(ApiUtils.checkStatus);
        
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
                            <Text>{item.guid.rendered}</Text>
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