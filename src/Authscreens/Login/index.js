import React from 'react';
import {View,Text, Image,TouchableOpacity, TextInput,ActivityIndicator} from 'react-native';
import styles from './Styles';
import { Icon } from 'native-base';
import  colors  from "../../Config/Colors";
import Moment from 'moment';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import ToastHelper from '../../Utils/ToastHelper';
class Login extends React.Component{
    
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
        //  ToastHelper.show('Please enter username and password')
       }
       else if(name == ''){
        // ToastHelper.show('Please enter username')
       }
       else if(password == ''){
        // ToastHelper.show('Please enter password')
       }
       else{
         this.props.dispatch({type:'Login_Request',url:'/userlogin?username='+name+'&password='+password})
        
     }
}

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Login',
        drawerLabel: 'Login',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>

            <Icon name="add-circle-outline"
              style={{ marginLeft: 20, fontSize: 30, color: colors.white }}/>
          </TouchableOpacity>
        ),
      })

    render(){
       
        return(
            
            <View style = {styles.container}>
           
                <Image
                source={require('../../Images/applogo.jpg')}
                style = {styles.loginimg}
                ></Image>
               
                <TextInput
                style = {styles.usernames}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder = 'Username'
                onChangeText = {(text)=>this.setState({name:text})}
                value = {this.state.name}
                ></TextInput>
                <TextInput
                style = {styles.passwords}
                autoCapitalize='none'
                secureTextEntry={true}
                autoCorrect={false}
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

                <TouchableOpacity onPress = {this.forgetpasswords}>
                <Text style = {styles.forgettxt}>Forget Your Password?</Text>
                </TouchableOpacity>
            
                <View style = {styles.fotterview}>
                    <Text style = {styles.fottertxt}>Copyright ©  {this.state.date}  in Rajhans. All rights reserved.</Text>
                </View>   
            </View>  
            // <Text>Narendra</Text>      
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Auth.isFetching,
    }
}
export default connect(mapStateToProps)(Login)