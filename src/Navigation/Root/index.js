import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { Image, TouchableOpacity } from 'react-native';
import  colors  from "../../Config/Colors";
import CustomDrawer from '../../Drawer/Drawerscreen';

import LoginScreen from '../../Authscreens/Login';
import ForgetScreen from '../../Authscreens/Forgetpassword';
import HiringScreen from '../../Mainscreens/Hiringofhall'; 
import FaqScreen from '../../Mainscreens/Faq';
import AboutUsScreen from '../../Mainscreens/Aboutus';
import FeedbackScreen from '../../Mainscreens/Feedback';
import SuggestionScreen from '../../Mainscreens/Suggestion';
import ContactUs from '../../Mainscreens/Contact_us';
import Announcement from '../../Mainscreens/Announcement';
// import HomeScreen from '../../Mainscreens/Home';
// import PreviewScreen from '../../Mainscreens/Preview';
// import PersonalScreen from '../../Mainscreens/Personal_info';
// import BookScreen from '../../Mainscreens/Book_ticket';
// import Mapscreen from '../../Mainscreens/Map';
// import OrderHistoryScreen from '../../Mainscreens/OrderHistory';
// import CancelorderScreen from '../../Mainscreens/Cancelorder';
// import OrderPageScreen from '../../Mainscreens/OrderPage';
// import ConfirmBookingScreen from '../../Mainscreens/ConfirmBooking';
// import ChangePassword from '../../Mainscreens/ChangePassword';
// import TrailerScreen from '../../Mainscreens/Trailer';


const LoginNav =createStackNavigator();
const LoginStack=({ route, navigation, props }) =>{
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
const AboutusStack=({ route, navigation, props }) =>{    
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
const HiringStack=({ route, navigation, props }) =>{    
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
const FaqStack=({ route, navigation, props }) =>{    
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
const FeedbackNav =createStackNavigator();
const FeedbackStack=({ route, navigation, props }) =>{    
    return (
        <FeedbackNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <FeedbackNav.Screen
            name="FEEDBACK"
            component={FeedbackScreen}/>         
        </FeedbackNav.Navigator>
    );
  }
const SuggestionkNav =createStackNavigator();
const SuggestionStack=({ route, navigation, props }) =>{    
    return (
        <SuggestionkNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <SuggestionkNav.Screen
            name="SUGGESTION"
            component={SuggestionScreen}/>         
        </SuggestionkNav.Navigator>
    );
  }
const AnnouncementNav =createStackNavigator();
const AnnouncementStack=({ route, navigation, props }) =>{    
    return (
        <AnnouncementNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <AnnouncementNav.Screen
            name="Announcement"
            component={Announcement}/>         
        </AnnouncementNav.Navigator>
    );
  }
const ContactUsNav =createStackNavigator();
const ContactUsStack=({ route, navigation, props }) =>{    
    return (
        <ContactUsNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <ContactUsNav.Screen
            name="ContactUs"
            component={ContactUs}/>         
        </ContactUsNav.Navigator>
    );
  }

  
const Drawer = createDrawerNavigator();
const Root=({ route, navigation, props }) =>{    
    return (
      <Drawer.Navigator      
      useLegacyImplementation={false}
      drawerStyle={{ width: "100%" }}
      drawerPosition="left"
      screenOptions={{
          headerShown:false,
          drawerType: "permanent",
        }}
        drawerContent={(props) => (
          <CustomDrawer
            {...props}/>
        )}
        initialRouteName='Login'>
        <Drawer.Screen
           name="Login"
           component={LoginStack}   
           options={{headerShown:false}}      
        />      
           <Drawer.Screen
              name="Hiring"
              component={HiringStack}
              options={{headerShown:false}}      
           />
           <Drawer.Screen
              name="Faq"
              component={FaqStack}
              options={{headerShown:false}}      
           />
           <Drawer.Screen
           name="About_Us"
           component={AboutusStack}   
           options={{headerShown:false}}      
        />      
        
        <Drawer.Screen
           name="Feedback"
           component={FeedbackStack}
           options={{headerShown:false}}      
        />
        <Drawer.Screen
           name="Suggestion"
           component={SuggestionStack}
           options={{headerShown:false}}      
        />
        <Drawer.Screen
           name="Announcement"
           component={AnnouncementStack}
           options={{headerShown:false}}      
        />
        <Drawer.Screen
           name="ContactUs"
           component={ContactUsStack}
           options={{headerShown:false}}      
        />
        
      </Drawer.Navigator>
    );
  }

export default Root;


