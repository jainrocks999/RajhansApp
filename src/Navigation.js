import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './Authscreens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { LucidaHandwritingItalic } from './Config/constant';
import { Image, TouchableOpacity } from 'react-native';
import  colors  from "./Config/Colors";
import Root from './Navigation/Root';
import Main from './Navigation/Main';

const AppStackNav =createStackNavigator();
function RootApp() {
    return (
      <NavigationContainer >
        <AppStackNav.Navigator
        screenOptions={{          
          headerShown:false
        }}
        >
          <AppStackNav.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
            />
  
          <AppStackNav.Screen
            name="App"
            component={Root}
            options={{ headerShown: false }}
            
          />
          <AppStackNav.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
            
          />
  
        </AppStackNav.Navigator>
      </NavigationContainer>
    );
  }

export default RootApp