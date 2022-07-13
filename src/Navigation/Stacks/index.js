import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { Image, TouchableOpacity } from 'react-native';
import  colors  from "../../Config/Colors";
import CustomDrawer from '../../Drawer/Drawerscreen';

import AboutUsScreen from '../../Mainscreens/Aboutus';
import LoginScreen from '../../Authscreens/Login';
import ForgetScreen from '../../Authscreens/Forgetpassword';
import HomeScreen from '../../Mainscreens/Home';
import PreviewScreen from '../../Mainscreens/Preview';
import LoginScreen from '../../Authscreens/Login';
import FaqScreen from '../../Mainscreens/Faq';
import HiringScreen from '../../Mainscreens/Hiringofhall'; 
import FeedbackScreen from '../../Mainscreens/Feedback';
import SuggestionScreen from '../../Mainscreens/Suggestion';
import PersonalScreen from '../../Mainscreens/Personal_info';
import BookScreen from '../../Mainscreens/Book_ticket';
import Mapscreen from '../../Mainscreens/Map';
import OrderHistoryScreen from '../../Mainscreens/OrderHistory';
import CancelorderScreen from '../../Mainscreens/Cancelorder';
import OrderPageScreen from '../../Mainscreens/OrderPage';
import ConfirmBookingScreen from '../../Mainscreens/ConfirmBooking';
import Announcement from '../../Mainscreens/Announcement';
import ContactUs from '../../Mainscreens/Contact_us';
import ChangePassword from '../../Mainscreens/ChangePassword';
import TrailerScreen from '../../Mainscreens/Trailer';


const LoginNav =createStackNavigator();
export default LoginStack=({ route, navigation, props }) =>{
    return (
        <LoginNav.Navigator initialRouteName='LoginScreen'
        screenOptions={{          
          headerShown:false
        }}>
          <LoginNav.Screen
            name="Login"
            component={LoginScreen}/>
          <LoginNav.Screen
            name="ForgetScreen"
            component={ForgetScreen}/>
        </LoginNav.Navigator>
    );
  }

  
const AboutusNav =createStackNavigator();
export default AboutusStack=({ route, navigation, props }) =>{    
    return (
        <AboutusNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <AboutusNav.Screen
            name="ABOUT"
            component={AboutUsScreen}/>         
        </AboutusNav.Navigator>
    );
  }
const HiringNav =createStackNavigator();
export default HiringStack=({ route, navigation, props }) =>{    
    return (
        <HiringNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <HiringNav.Screen
            name="HIRING"
            component={HiringScreen}/>         
        </HiringNav.Navigator>
    );
  }

const FaqNav =createStackNavigator();
export default FaqStack=({ route, navigation, props }) =>{    
    return (
        <FaqNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <FaqNav.Screen
            name="FAQ"
            component={FaqScreen}/>         
        </FaqNav.Navigator>
    );
  }