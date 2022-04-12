
import React, {Component} from 'react';
import { StatusBar,Text ,View,LogBox} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Route from './src/Navigation';
// import firebase from 'react-native-firebase';
import Axios from 'axios';
import { Root,NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import NavigationService from './src/NavigationService';
import Colors from './src/Config/Colors';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

class App extends Component {
//  async componentDidMount(){
//     this.checkPermission();
//      this.createNotificationListeners();  
//   }
//   componentWillUnmount() {
//     this.notificationListener();
// }
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    console.log(enabled);
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    let userstring = await AsyncStorage.getItem('User');
    let user=JSON.parse(userstring)
    console.log('App user : ',user)
    console.log('App local Token : ',fcmToken)
    if (user) {
       let fcmtoken = await firebase.messaging().getToken();
       console.log('App fcmtoken : ',fcmtoken)
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
  async requestPermission() {
    try {
        await firebase.messaging().requestPermission({ badge: true, sound: true, alert: true });
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }
  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        const channelId = new firebase.notifications.Android.Channel('rajhans', 'rajhans', firebase.notifications.Android.Importance.Max);
        firebase.notifications().android.createChannel(channelId);
            notification
            .android.setChannelId('rajhans')
            .android.setLargeIcon('ic_iconss')
            .android.setSmallIcon('ic_notification')
            .android.setTicker('Rajhans')
            .setSound('default')
            console.log('notification')
            console.log(notification)
            firebase.notifications().displayNotification(notification);
    });
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;        
        console.log('onNotificationOpened')
        console.log(notificationOpen.notification)
    });
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;    
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
    });
  }  
  render() {

    return(
      // <Text>narendra</Text>
      // <View>
      // <Provider store={Store}> 
      //     <Root>
      //       <Route  ref={navigatorRef => {
      //         NavigationService.setTopLevelNavigator(navigatorRef);
      //       }}
      //       />
      //     </Root>
      //     <StatusBar backgroundColor={Colors.blue} barStyle='light-content'/>
      // </Provider>
      // </View>
      <NativeBaseProvider>
      <StatusBar/>
      <Provider store={Store}>
        {/* <Root> */}
      <Route
       ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
     />
     {/* </Root> */}
      </Provider>
    </NativeBaseProvider>
    ) 
  }
}

export default App;