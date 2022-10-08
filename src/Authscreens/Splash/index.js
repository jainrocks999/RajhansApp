import React from 'react';
import {View,Text, Image,Alert,Linking,ActivityIndicator,Platform} from 'react-native';
import styles from './styles';
import  Colors from '../../Config/Colors';
import { connect } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import AsyncStorage from '@react-native-async-storage/async-storage';


class Splash extends React.Component{
    state={
      version:''
    }

    componentDidMount = async() =>{
        let version=DeviceInfo.getVersion()
        console.log('version : ',version)
        this.props.dispatch({type:'Fetch_Version_Request',url:'/app_version'})
        this.setState({version})
        }

        componentWillReceiveProps=(nextProps)=>{
            const {version}=this.state
          if (nextProps.iosversion && nextProps.androidversion) {
            if (Platform.OS=='ios'? nextProps.iosversion == version : nextProps.androidversion == version) {
                
                this.navigateUser()
                } else {
                    let iosmsg='Please update rajhans at app store.'
                    let androidmsg='Please update rajhans at Playstore.'
                    let message=Platform.OS=='ios' ? iosmsg : androidmsg
                    Alert.alert(
                        'Rajhans',
                        message,
                        [
                        {
                            text: 'No Thanks',
                            onPress: () => this.navigateUser(),
                            style: 'cancel',
                            },
                        {
                            text: 'Update',
                            onPress: () => this.doAction(),
                            },
                        ],
                        {cancelable: false},
                    )
                }
          }
        }

     navigateUser=()=>{
       
         AsyncStorage.getItem('User').then(userget=>{
             console.log("userget ",userget);
                 this.setState({ isLoading:false })
                 if( userget === ''||userget === null ){
                //  this.props.navigation.navigate('App')
                 this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'App' }],
                  })
                     }
            else{
                // this.props.navigation.navigate('Main')
                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Main' }],
                  })
            }
        })
     }
     
     doAction=()=>{
         if (Platform.OS=='ios') {
            Linking.openURL('https://apps.apple.com/us/app/rajhans/id1479413868')
         } else {
            Linking.openURL('https://play.google.com/store/apps/details?id=com.pack.rajhans') 
         }
     }    

    renderLoader = () =>{
        if(this.props.isFetching){
            return(
              <View style={{ marginTop:20 }}>
                  <ActivityIndicator color={Colors.blue}/>
              </View> 
            )
        }
    }

    render(){
        // this.props.navigation.navigate('App')
        return(
            <View style={styles.container}>
                <Image
                source={require('../../Images/applogo.jpg')}
                style = {styles.logoimage}
                ></Image>
                 {this.renderLoader()}
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        isFetching:state.Auth.isFetching,
        iosversion:state.Auth.iosversion,
        androidversion:state.Auth.androidversion,
    }
}
export default connect(mapStateToProps)(Splash)