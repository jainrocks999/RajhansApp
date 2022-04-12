import React from 'react';
import {View, Text,TouchableOpacity,TextInput} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors'
import  Toast from 'react-native-simple-toast';
import Loading from '../../Components/Loadings';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';

class Forget extends React.Component{
    state = { 
        email: '' ,
        loading: false,
    }
    static navigationOptions = {
        title: 'Forget Password',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
      };

    onGo=()=>{
        const { email } = this.state;      
       if (email != '') {
          
        this.props.dispatch({type:'Forgot_Password_Request',url:'/forgetpassword/?emailaddress='+email})
               
       } else {
        Toast.show('Please enter register Email');  
       }
    }

    render(){
        if (this.props.isFetching) {
            return (
                <Loading/>
            )
          }
        return(
            <View style={styles.container}>
            <Text style={styles.msg}>Please enter register email address.</Text>
            <Text style={styles.msg}>Your updated password will be sent</Text>
            <Text style={styles.msg}>to this Email Address.</Text>
               <TextInput
               placeholder='Enter your register Email'
               autoCapitalize='none'
               onChangeText = {(email)=>this.setState({email})}
               style = {styles.emailtxt}>
               </TextInput>
               <TouchableOpacity  style={styles.btn} onPress={this.onGo}>
                     <Text style={styles.txtbtn}>Submit</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Auth.isFetching,
    }
}
export default connect(mapStateToProps)(Forget)