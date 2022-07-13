import React from 'react';
import {View,Text} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { WebView } from 'react-native-webview';
import BackHeader from '../../Components/BackHeader';
export default class Trailer extends React.Component{
 constructor(props){
    super(props)
    this.state={
        
        url: props.route.params.videourl,
    }
  } 
   

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
                <BackHeader
                title={this.props.route.params.namesparam}
                onPress={()=>this.props.navigation.goBack()}
                fontSize={15}
                />
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