import React from 'react';
import {View,Text,ActivityIndicator,Platform} from 'react-native';
import styles from './Styles';
import Colors from '../../Config/Colors';
export default class Loading extends React.Component{
    render(){
        return(
            <View style={ styles.container }>
                  <ActivityIndicator
                  color={Colors.blue}
                  size= {Platform.OS == 'ios' ? 0 : 20}
                  ></ActivityIndicator>
            </View>
        )
    }
}