import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {LucidaHandwritingItalic} from '../../Config/constant';
import {Image, TouchableOpacity} from 'react-native';
import CustomDrawer from '../../Drawer/Drawerscreen';
import colors from '../../Config/Colors';
import HomeScreen from '../../Mainscreens/Home';
import PreviewScreen from '../../Mainscreens/Preview';
import TrailerScreen from '../../Mainscreens/Trailer';
import BookScreen from '../../Mainscreens/Book_ticket';
import Mapscreen from '../../Mainscreens/Map';
import OrderPageScreen from '../../Mainscreens/OrderPage';
import ConfirmBookingScreen from '../../Mainscreens/ConfirmBooking';
import AboutUsScreen from '../../Mainscreens/Aboutus';
import HiringScreen from '../../Mainscreens/Hiringofhall'; 
// import LoginScreen from '../../Authscreens/Login';
import FaqScreen from '../../Mainscreens/Faq';
import FeedbackScreen from '../../Mainscreens/Feedback';
import SuggestionScreen from '../../Mainscreens/Suggestion';
import Announcement from '../../Mainscreens/Announcement';
import ContactUs from '../../Mainscreens/Contact_us';
import PersonalScreen from '../../Mainscreens/Personal_info';
import OrderHistoryScreen from '../../Mainscreens/OrderHistory';
import CancelorderScreen from '../../Mainscreens/Cancelorder';
import ChangePassword from '../../Mainscreens/ChangePassword';
// import ForgetScreen from '../../Authscreens/Forgetpassword';


const HomeNav = createStackNavigator();
const HomeStack = ({route, navigation, props}) => {
  return (
    <HomeNav.Navigator initialRouteName="HOME"
    screenOptions={{
      headerShown:false
    }}>
      <HomeNav.Screen
        name="HOME"
        component={HomeScreen}/>    
      <HomeNav.Screen
        name="PREVIEW"
        component={PreviewScreen}/>
      <HomeNav.Screen
        name="TrailerScreen"
        component={TrailerScreen}/>
      <HomeNav.Screen
        name="BOOK"
        component={BookScreen}/>
      <HomeNav.Screen
        name="MAP"
        component={Mapscreen}/>
      <HomeNav.Screen
        name="ORDERPAGE"
        component={OrderPageScreen}/>
      <HomeNav.Screen
        name="CONFIRMBOOK"
        component={ConfirmBookingScreen}/>
    </HomeNav.Navigator>
  );
};

const AboutusNav = createStackNavigator();
const AboutusStack = ({route, navigation, props}) => {
  return (
    <AboutusNav.Navigator initialRouteName="ABOUT">
      <AboutusNav.Screen
        name="ABOUT"
        component={AboutUsScreen}/>
    </AboutusNav.Navigator>
  );
};
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
        <SuggestionkNav.Navigator initialRouteName='SUGGESTION'
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
        <AnnouncementNav.Navigator initialRouteName='Announcement'
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
        <ContactUsNav.Navigator initialRouteName='ContactUs'
        screenOptions={{          
          headerShown:false}}>
          <ContactUsNav.Screen
            name="ContactUs"
            component={ContactUs}/>         
        </ContactUsNav.Navigator>
    );
  }
const OrderNav =createStackNavigator();
const OrderStack=({ route, navigation, props }) =>{    
    return (
        <OrderNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <OrderNav.Screen
            name="ORDER"
            component={OrderHistoryScreen}/>         
          <OrderNav.Screen
            name="CANCELORDER"
            component={CancelorderScreen}/>         
        </OrderNav.Navigator>
    );
  }
const PersonalNav =createStackNavigator();
const PersonalStack=({ route, navigation, props }) =>{    
    return (
        <PersonalNav.Navigator initialRouteName='ABOUT'
        screenOptions={{          
          headerShown:false}}>
          <PersonalNav.Screen
            name="PERSONAL"
            component={PersonalScreen}/>         
          <PersonalNav.Screen
            name="Password"
            component={ChangePassword}/>         
        </PersonalNav.Navigator>
    );
  }


const Drawer = createDrawerNavigator();
const   Main = ({route, navigation, props}) => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      drawerStyle={{width: '100%'}}
      drawerPosition="left"
      screenOptions={{
        drawerType: 'permanent',
        header:false
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home">
      {/* <Drawer.Screen name="Splash" component={RootStackScreen} /> */}
      <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{header: false}}
        />
        <Drawer.Screen
        name="About_Us"
        component={AboutusStack}
        options={{header: false}}
      />
      <Drawer.Screen
        name="Hiring"
        component={HiringStack}
        options={{header: false}}
      />
      <Drawer.Screen
        name="Faq"
        component={FaqStack}
        options={{header: false}}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedbackStack}
        options={{header: false}}
      />
      <Drawer.Screen
        name="Suggestion"
        component={SuggestionStack}
        options={{header: false}}
      />
        <Drawer.Screen
        name="Announcement"
        component={AnnouncementStack}
        options={{header: false}}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUsStack}
        options={{header: false}}
      />
      <Drawer.Screen
        name="Personal"
        component={PersonalStack}
        options={{header: false}}
      />
    
    <Drawer.Screen
      name="OrderHistory"
      component={OrderStack}
      options={{header: false}}
    />

    </Drawer.Navigator>
  );
};

export default Main;
