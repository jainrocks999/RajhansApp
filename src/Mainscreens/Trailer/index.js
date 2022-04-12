import React from 'react';
import {View,Text} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors'
import AsyncStorage  from '@react-native-community/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { WebView } from 'react-native-webview';
export default class Trailer extends React.Component{
 constructor(props){
    super(props)
    this.state={
        url: props.navigation.getParam('videourl'),
    }
  } 
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('namesparam'),
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
      });
    

    render(){
        const { url } = this.state;
        if(url == ''|| url == null){
            return(
                <View style={ styles.container }>
                    <Text>Trailor is not found</Text>
                </View>
            )
        } else {
        return(
            <View style={ styles.webcontainer }>
                <WebView
                source={{uri:url}}
                startInLoadingState={true}
                >
                </WebView>
            </View>
        )
    }
    }
}