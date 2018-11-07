import React, { Component } from "react";
import {Card, ListItem, Button, Icon, Header, Tile} from 'react-native-elements';
import {View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
} from "react-native";
import styles from "./style";


class Main extends Component{
    render(){
        return(

            <ScrollView>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Feeds from PHX', style : {color:'#fff', fontWeight:'bold', fontSize:25,} }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    contentContainerStyle={{ height: 70 , backgroundColor:'white'}}
                />
                <View style={styles.flexColumn}>
                        <Tile
                            imageSrc={require('../assets/img/test.jpg')}
                            title="Landing Page"
                            featured
                            caption="(under development)"
                        />
                        <Card style={{height:20, width:50}}
                            title='Event announcement'
                            image={require('../assets/img/test1.jpg')} >
                            <Text style={{marginBottom: 10}}>
                               Event details
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#3D6DCC'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='RSVP NOW' />
                        </Card>
                        <Card style={{height:20, width:50}}
                              title='Winter Institute'
                              image={require('../assets/img/test2.jpg')} >
                            <Text style={{marginBottom: 10}}>
                                Upcoming workshops and courses
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#3D6DCC'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='View all courses' />
                        </Card>
                        <Card style={{height:20, width:50}}
                              title='Another event'
                              image={require('../assets/img/test.jpg')} >
                            <Text style={{marginBottom: 10}}>
                                More details will be announced soon
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#3D6DCC'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='RSVP NOW' />
                        </Card>
                        <Tile
                            imageSrc={require('../assets/img/test2.jpg')}
                            title="Blog posts"
                            contentContainerStyle={{ height: 100}}
                        >
                            <View
                                style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}
                            >
                                <Text>(display contents here)</Text>
                            </View>
                        </Tile>
                </View>
            </ScrollView>
        );
    }
}

export default Main;