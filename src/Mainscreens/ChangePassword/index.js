import React from 'react';
import { View,Text,TouchableOpacity, TextInput,ActivityIndicator,Image} from 'react-native';
import styles from './styles';
import colors from '../../Config/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import  Toast  from 'react-native-simple-toast';

class ChangePassword extends React.Component{
    state = {
         User:null,
         oldpassword: '', 
         newpassword: '', 
         confirmpassword: '', 
        }

        static navigationOptions = ({ navigation }) => ({
            headerTitle: 'Change Password',
            drawerLabel: 'Change Password',
            headerTintColor: colors.white,
            headerStyle: {
              backgroundColor: colors.blue,
            },
            headerTitleStyle: {
                fontFamily:LucidaHandwritingItalic,
                fontWeight:'normal',
              },
            headerLeft: (
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image style={{height:24,width:24,marginLeft:7}} resizeMode='center' source={require('../../Images/arrow.png')}/>
                {/* <Icon name="md-arrow-back"
                  style={{ marginLeft: 20, fontSize: 30, color: colors.white }} /> */}
              </TouchableOpacity>
            ),
          })

    componentWillMount =async()=>{
        let userstring=await AsyncStorage.getItem('User')
        let user=JSON.parse(userstring)
        
            this.setState({User:user})
       }

    passwordSelected = () =>{
       
          const { User, oldpassword, newpassword, confirmpassword} = this.state;
          if( oldpassword ===''|| newpassword===''|| confirmpassword===''){
               Toast.show('Please fill required fields', Toast.LONG);
          }
          else if( confirmpassword != newpassword ){
            Toast.show('Password and Confirm password must be same', Toast.LONG);
          }
          else{
            this.props.dispatch({type:'Change_Password_Request',
            url:'/changepassword?username='+User.username+'&oldpassword='+oldpassword+'&newpassword='+newpassword,navigation:this.props.navigation})
           
          }
       
    }
   
   
    render(){
        const {isFetching}=this.props
        return(
               
          <View style={{flex:1} }>
               <BackHeader
                        title= 'Change Password'
                        onPress = { ()=>this.props.navigation.goBack() }                
                />
            <View style={ styles.container }>
              <TextInput
             placeholder= 'Current Password'
             placeholderTextColor={colors.dark_grey}
             secureTextEntry={true}
             style= { styles.oldpasstxtinput }
             onChangeText = {(oldpassword)=>this.setState({oldpassword})}
             ></TextInput>
             <TextInput
             placeholder= 'New Password'
             placeholderTextColor={colors.dark_grey}
             secureTextEntry={true}
             style= { styles.oldpasstxtinput }
             onChangeText = {(newpassword)=>this.setState({newpassword})}
             ></TextInput>
             <TextInput
             placeholder= 'Confirm New Password'
             placeholderTextColor={colors.dark_grey}
             secureTextEntry={true}
             style= { styles.oldpasstxtinput }
             onChangeText = {(confirmpassword)=>this.setState({confirmpassword})}
             ></TextInput>
             
             <View style={{marginTop: 50, flexDirection: 'row',alignSelf: 'center'}}>
                 <TouchableOpacity
                  style={styles.viewpassword}
                  onPress={this.passwordSelected}>
                      {isFetching
                      ?<ActivityIndicator color={colors.white}/>
                      :<Text style={styles.btntxt}>Change Password</Text>
                       }
                  </TouchableOpacity>
             </View>
             </View>
               
               </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.User.isFetching,
    }
  }
  export default connect(mapStateToProps)(ChangePassword)