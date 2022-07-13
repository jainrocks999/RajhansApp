import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
   TextInput,ActivityIndicator
} from 'react-native';

import styles from './Styles';

import  colors  from "../../Config/Colors";
import Moment from 'moment';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

import DrawerHeader from '../../Components/DrawerHeader';

const image = require('../../Images/menu2.png');


class Login extends Component {
  constructor(props) {
    
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    state = {
        name: '',
        password: '',
        date: Moment(new Date()).format('YYYY')
    }

    forgetpasswords=()=>{
        this.props.navigation.navigate('ForgetScreen')
    }
    
       getLogin=()=>{
           const{ name,password } = this.state;
           if(name == ''&& password == ''){
             Toast.show('Please enter username and password')
           }
           else if(name == ''){
            Toast.show('Please enter username')
           }
           else if(password == ''){
            Toast.show('Please enter password')
           }
           else{
             this.props.dispatch({type:'Login_Request',url:'/userlogin?username='+name+'&password='+password,navigation:this.props.navigation})
            
         }
    }

  render() {
    console.log('Login called');
    return (
      <SafeAreaView style={{
        backgroundColor:'white',
        width:'100%',
        flex:1,
        
      }}>
      
          <View style={styles.container}>
           <DrawerHeader
           title='Login'
           />
             <Image
                source={require('../../Images/applogo.jpg')}
                style = {styles.loginimg}
                ></Image>
               
                <TextInput
                style = {styles.usernames}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder = 'Username'
                placeholderTextColor ={colors.dark_grey}
                onChangeText = {(text)=>this.setState({name:text})}
                value = {this.state.name}
                ></TextInput>
                <TextInput
                style = {styles.passwords}
                autoCapitalize='none'
                secureTextEntry={true}
                autoCorrect={false}
                placeholderTextColor = {colors.dark_grey}
                placeholder = 'Password'
                onChangeText = {(password)=>this.setState({password})}
                value = {this.state.password}
                ></TextInput>

                <TouchableOpacity 
                style={styles.btn}
                onPress = {()=>this.getLogin()}>

                {this.props.isFetching
                ?<ActivityIndicator color={colors.white}/>
                :<Text style={{color:"#FFF",fontSize:16,fontFamily:LucidaHandwritingItalic}}>Login</Text>
                }
              
                </TouchableOpacity>

                <TouchableOpacity
                 onPress = {this.forgetpasswords}>
                <Text style = {styles.forgettxt}>Forget Your Password?</Text>
                </TouchableOpacity>
            
                <View style = {styles.fotterview}>
                    <Text style = {styles.fottertxt}>Copyright ©  {this.state.date}  in Rajhans. All rights reserved.</Text>
                </View>   
          </View>
          
        
        </SafeAreaView>
    );
  }
}


const mapStateToProps=(state)=>{
  return{
    isFetching:state.Auth.isFetching,
  }
}
export default connect(mapStateToProps)(Login)