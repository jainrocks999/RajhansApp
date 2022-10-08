import React from "react";
import {View,TouchableOpacity,Image} from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import  colors  from "../../Config/Colors";
import { LucidaHandwritingItalic } from '../../Config/constant';
import { WebView } from 'react-native-webview';
import DrawerHeader from "../../Components/DrawerHeader";

export default class Hiring extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Hiring of Hall',
        drawerLabel: 'Hiring of Hall',
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
              style={{ marginLeft: 20, fontSize: 30, color: colors.white}} /> */}
              <Image 
        style={{height:40,width:40, marginLeft: 7}} 
        source={require('../../Images/menu2.png')}/>
          </TouchableOpacity>
        ),
      })

    render(){
        return(
            <View style = {styles.container}>
              <DrawerHeader
              title="Hiring of Hall"
              />
               <WebView
                source={{uri: 'https://lcahgoa.in/index.php/app/hiringforhall/'}}
                style={{marginTop: 10}}
                startInLoadingState
              />
            </View>
        )
    }
}