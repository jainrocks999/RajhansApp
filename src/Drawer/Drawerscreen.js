import React from 'react';
import {  View, ScrollView, Text, Image, TouchableOpacity,StyleSheet} from 'react-native'
import colors from '../Config/Colors';
import { LucidaHandwritingItalic } from '../Config/constant';
import AsyncStorage  from '@react-native-community/async-storage';

export default class MyDrawer extends React.Component {
    state= {
         route: [],
          }

    componentWillMount() {

        AsyncStorage.getItem('User')
            .then(usertype => {
                
                if( usertype === ''||usertype === null ){
                    this.setState({
                        route: [
                            { icon:  require('../Images/hall.png'), label: 'Hiring of Hall', key: 'Hiring' },
                            { icon:  require('../Images/faq.png'), label: 'FAQ', key: 'Faq' },
                            { icon:  require('../Images/speaker.png'), label: 'Announcements', key: 'Announcement' },
                            { icon:  require('../Images/info.png'), label: 'Contact Us', key: 'ContactUs' },
                            { icon:  require('../Images/login.png'), label: 'Login', key: 'Login' },
                        ] 
                    } )
                 
                } else {
                    this.setState({
                        route: [
                           
                            { icon: require('../Images/home.png'), label: 'Home', key: 'HOME' },
                            { icon:  require('../Images/personal.png'), label: 'Personal Info', key: 'Personal' },
                            { icon:  require('../Images/order_history.png'), label: 'Bookings', key: 'OrderHistory' },
                            { icon:  require('../Images/hall.png'), label: 'Hiring of Hall', key: 'Hiring' },
                            { icon:  require('../Images/movie.png'), label: 'Movie Suggestion', key: 'Suggestion' },
                            { icon:  require('../Images/feedback.png'), label: 'Feedback', key: 'Feedback' },
                            { icon:  require('../Images/faq.png'), label: 'FAQ', key: 'Faq' },
                            { icon:  require('../Images/speaker.png'), label: 'Announcements', key: 'Announcement' },
                            { icon:  require('../Images/info.png'), label: 'Contact Us', key: 'ContactUs' },
                            { icon:  require('../Images/logout.png'), key: 'Login',label: 'Logout'  },
                        ]
                    })
                  
                }

            })
    }

   

    renderDrawerItem = (route) => {
        const onpress = (route.key === 'Login')
             ? () =>  AsyncStorage.clear().then(p => this.props.navigation.navigate(route.key))
             : () => {
                if(route.key ==='About_Us'){
                    this.props.navigation.closeDrawer();
                 }else if(route.key ==='Hiring'){
                    this.props.navigation.closeDrawer();
                 }else if(route.key ==='Faq'){
                    this.props.navigation.closeDrawer();
                 }else if(route.key === 'Feedback'){
                    this.props.navigation.closeDrawer();
                 }else if(route.key ==='Suggestion'){
                    this.props.navigation.closeDrawer();
                 }
                 else if(route.key ==='HOME'){
                    this.props.navigation.closeDrawer();
                 }
                 else if(route.key ==='Personal'){
                    this.props.navigation.closeDrawer();
                 }
                 else if(route.key ==='Preview'){
                    this.props.navigation.closeDrawer();
                 }
                 else if(route.key ==='Book'){
                    this.props.navigation.closeDrawer();
                 }
                 else if(route.key ==='OrderHistory'){
                    this.props.navigation.closeDrawer();
                 } else if(route.key ==='Login'){
                    this.props.navigation.closeDrawer();
                 }
                this.props.navigation.navigate(route.key);
             }  
        return (
            <TouchableOpacity onPress={onpress} style={{ flexDirection: 'row', padding: 15 }}>
               <Image source={route.icon}></Image>
               
                <Text style={{marginLeft: 15, fontSize: 18, color: colors.white, 
                    fontFamily:LucidaHandwritingItalic,}}>{route.label}</Text>
            
                </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View  style = {styles.menustyle}>
                   <View style={styles.bluebox}>
                     <Image source={require('../Images/appname.png')} style={styles.ImageStyle} />
                    </View>
                    <View style={{paddingTop: 15}}>
                       {this.state.route.map(route => <View key={route.key}>
                        {this.renderDrawerItem(route)}</View>)}
                     </View>
                </View>
             
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {     
        backgroundColor: '#00003f'
    },
    bluebox: {
        height: 110,
        backgroundColor: '#fff',
        justifyContent: 'center'     
    },
    ImageStyle: {
        width: 250,
        height: 86,
        alignSelf: 'center',
    },
    TextStyle: {
        textAlign: 'center',
        color: '#F5FCFF',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    menustyle:{
        backgroundColor: '#00003f',
    }
})