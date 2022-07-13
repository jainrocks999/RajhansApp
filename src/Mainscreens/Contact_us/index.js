import React from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import { Icon } from 'native-base';
import { LucidaHandwritingItalic } from '../../Config/constant';
import DrawerHeader from '../../Components/DrawerHeader';

export default class Contact_us extends React.Component{
    state={ 
        response: [], 
        fullresponse:[],
        userid: '',
        loading: false,
        loadmore: false,
        rows: ''
     }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Contact Us',
        drawerLabel: 'Contact Us',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            {/* <Icon name="md-menu"
              style={{ marginLeft: 20, fontSize: 30, color: colors.white }} /> */}
              <Image 
        style={{height:40,width:40, marginLeft: 7}} 
        source={require('../../Images/menu2.png')}/>
          </TouchableOpacity>
        ),
      })
   
    render(){
        return(
          <View style={ {flex:1} }>
              <DrawerHeader
              title="Contact Us"
              />
            <View style={ styles.container }>
            <Text style={[styles.phntxt,{marginHorizontal:5}]}>Please contact Rajhans office / Rajhans staff at 9822685396 (between 0900 hrs to 1300hrs on all days except Mondays) in case of any queries / problems encountered in accessing the website for ticket bookings.</Text>
               <View style={[styles.listview,{marginTop:25}]}>
                 {/* <Icon
                 name='ios-phone-portrait'
                 size={35}
                 style={[styles.iconstyle,{marginLeft:10}]}
                 ></Icon> */}
                 <View style={{alignItems:'center',justifyContent:'center'}}>
                 <Image style={{resizeMode:'center',height:30,width:20,marginLeft:10}} source={require('../../Images/mobile.png')}/>
                 </View>
                 <View style={[styles.detailview,{marginLeft:18}]}>
                 <Text style={styles.title}>Phone</Text>
                 <Text style={styles.phntxt}>9822685396</Text>
                 <View style={{ borderBottomColor:colors.grey, borderBottomWidth:1,marginTop:5}} />
                 </View>
               </View>
               <View style={styles.listview}>
                 {/* <Icon
                 name='ios-mail'
                 size={30}
                 style={styles.iconstyle}
                 ></Icon> */}
                 <View style={{alignItems:'center',justifyContent:'center'}}>
                 <Image style={{resizeMode:'center',height:20,width:24,marginLeft:10}}  source={require('../../Images/mail.png')}/>
                 </View>
               <View style={styles.detailview}>
                 <Text style={styles.title}>Mail</Text>
                 <Text style={styles.phntxt}>lcahrajhans@gmail.com</Text>
                 <View style={{ borderBottomColor:colors.grey, borderBottomWidth:1,marginTop:5}} />
                 </View>
               </View>
            </View>
            </View>
        )
    }
}