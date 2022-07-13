import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from '../Config/Colors';
import { LucidaHandwritingItalic } from '../Config/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  container: {     
      backgroundColor: '#00003f',
      borderWidth:3,
      flex:1,
      width:'100%',
      height:'100%'
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
export default function Menu(navigation,props) {

  state= {
    route: [],
     }

     const [route, setRoute] = useState([]);

     useEffect(() => {
      AsyncStorage.getItem('User')
      .then(usertype => {
          
          if( usertype === ''||usertype === null ){
              
                  setRoute([
                      { icon:  require('../Images/hall.png'), label: 'Hiring of Hall', key: 'Hiring' },
                      { icon:  require('../Images/faq.png'), label: 'FAQ', key: 'Faq' },
                      { icon:  require('../Images/speaker.png'), label: 'Announcements', key: 'Announcement' },
                      { icon:  require('../Images/info.png'), label: 'Contact Us', key: 'ContactUs' },
                      { icon:  require('../Images/login.png'), label: 'Login', key: 'Login' },
                  ]) 
              
           
          } else {
              
                  setRoute( [
                     
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
                  ])
          }

      })
      }, [])



const renderDrawerItem = (route) => {
  console.log('route',route);
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
       <TouchableOpacity
        onPress={()=>props.navigation.navigate('Faq')}
        // onPress={onpress}

        style={{ flexDirection: 'row', padding: 15 }}>
          <Image source={route.icon}></Image>
          
           <Text style={{marginLeft: 15, fontSize: 18, color: colors.white, 
               fontFamily:LucidaHandwritingItalic,}}>{route.label}</Text>
       
           </TouchableOpacity>
   )
}

  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
       <View  style = {styles.menustyle}>
                   <View style={styles.bluebox}>
                     <Image source={require('../Images/appname.png')} style={styles.ImageStyle} />
                    </View>
                    <View style={{paddingTop: 15}}>
                       {route.map(route => <View key={route.key}>
                        {renderDrawerItem(route)}</View>)}
                     </View>
                </View>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};