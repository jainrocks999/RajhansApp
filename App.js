/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import Route from './src/Navigation';
import { ModalPortal } from 'react-native-modals';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App= () => {
  useEffect(() => {
    requestUserPermission()
    notificationListener();
    }, [])
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      console.log('this is auth status from user data',authStatus);
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmTocken();
        getToken()
      }
    }
  
    const  getToken=async()=> {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      let userstring = await AsyncStorage.getItem('User');
      let user=JSON.parse(userstring)
      console.log('App user userstring: ',userstring)
      console.log('App user : ',user)
      console.log('App local Token : ',fcmToken)
      if (user) {
        const fcmtoken = await messaging().getToken()
         console.log('App fcmtoken and user : ',fcmtoken,user)
          if (fcmToken != fcmtoken) {
            console.log('App new token : ',fcmtoken)
              Axios.get('https://lcahgoa.in/index.php/app/firebase_notification?notification_id='+fcmtoken+'&user_id='+user.user_id).then(success=>{
                  console.log('new token '+success)
                  if (success.status) {
                   AsyncStorage.setItem('fcmToken', fcmtoken);
                  }
              })
          }
      }
     }
  
    const getFcmTocken = async () => {
      let cheackToken = await AsyncStorage.getItem('fcmTocken')
      if (!cheackToken) {
        try {
          const fcmTocken = await messaging().getToken()
          if (!!fcmTocken) {
            console.log("Fcm tocken generated", fcmTocken);
            AsyncStorage.setItem('fcmTocken',fcmTocken);
          }
        } catch (error) {
          console.log("Eorror is Fcm Tocken", error);
          alert(error?.message)
    
        }
      }
    
    }
    const notificationListener = async () =>{
      messaging ().onNotificationOpenedApp ( remoteMessage => {
              console. log(
                  'Notification caused app to open from background state:', remoteMessage.notification);
          });
         messaging ().onMessage(async remoteMessage => {
                 console. log ("recived in foreground", remoteMessage)
         messaging ()
          .getInitialNotification()
         .then (remoteMessage => {
             if (remoteMessage) {
                 console. log (
                      'Notification caused app to open from quit state: ',
                     remoteMessage.notification,
                  );
              }
          })
        })
      }
  return (
    <SafeAreaView style={{flex:1}}>
         <Provider store={Store}>      
       <Route />
       <ModalPortal />

  
       </Provider>
    </SafeAreaView>
  );
};

export default App;
