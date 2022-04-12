import React from "react";
import {View, Text, TouchableOpacity,Image,WebView} from 'react-native';
import styles from './styles';
import  colors  from "../../Config/Colors";
import {Icon} from 'native-base';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default class About extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'About Us',
        drawerLabel: 'About Us',
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
              style={{ marginLeft: 20, fontSze: 30, color: colors.white}}  /> */}
              <Image 
                style={{height:40,width:40, marginLeft: 7}} 
                source={require('../../Images/menu2.png')}/>
          </TouchableOpacity>
        ),
      })
   
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.viewimg}>
                 <Image source={require('../../Images/bout.jpg')}
                 style = {styles.img}
                 ></Image>
               </View>
               <WebView
        source={{uri: 'https://lcahgoa.in/index.php/app/aboutus'}}
        style={{marginTop: 20}}
        startInLoadingState
      />
             
            </View>
        )
    }
}