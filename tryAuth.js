import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Image, FlatList} from 'react-native';
// Setting a windowSize variable to be used in the styles below.
import HTMLView from 'react-native-htmlview';
export default class App extends Component<{}> {
    //an empty array
    state={
        data:[]
    };

    fetchData = async () =>{
        //response
        const response = await
            fetch('https://populationhealthexchange.org/wp-json/wp/v2/posts');
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
                            <HTMLView value={item.title.rendered}/>
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