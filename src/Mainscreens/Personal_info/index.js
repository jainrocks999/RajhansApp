import React from 'react';
import { View,Text,TouchableOpacity,TextInput,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import {Icon} from 'native-base';
import AsyncStorage  from '@react-native-community/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import Profile from '../../Components/Profile';
import { connect } from 'react-redux';
import Modal,{ModalContent,ModalTitle,ModalFooter,ModalButton} from 'react-native-modals';
import Loader from '../../Components/Loadings';
import  Toast  from 'react-native-simple-toast';


class Personal extends React.Component{
    state = {
         User:null,
         email: '',
         mobile: '',
         mobile_no: '',
         visible:false
        }

    componentWillMount =async()=>{
        let userstring=await AsyncStorage.getItem('User')
        let user=JSON.parse(userstring)
        if (user) {
            this.setState({
                email:user.username,
                mobile:user.user_phone,
                User:user
             })
        }
      
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Personal info',
        drawerLabel: 'Personal info',
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
            {/* <Icon name="md-menu"
              style={{ marginLeft: 20, fontSize: 30, color: colors.white }} /> */}
              <Image 
        style={{height:40,width:40, marginLeft: 7}} 
        source={require('../../Images/menu2.png')}/>
          </TouchableOpacity>
        ),
      })
     
    mobileSelected = () =>{
      
          const { mobile_no, email } = this.state;
          if( mobile_no === '' ){
              Toast.show('Please enter mobile number', Toast.LONG);
          }
          else{
            this.props.dispatch({type:'Change_Mobile_Request',
            url:'/updateuserinfo?username='+email+'&profilemobile='+mobile_no})
            this.setState({visible:false})
          }
       
    } 

    render(){
        if (this.props.isFetching) {
            return <Loader/>
        }
        return(
            <View style={ styles.container }>
           
               <Profile 
               passwordSelected={()=>this.props.navigation.navigate('Password')}
               mobileSelected={()=>this.setState({visible:true})}
               />
               
               <Modal
                visible={this.state.visible}
                width={0.8}
                modalStyle={{paddingHorizontal:20}}
                modalTitle={<ModalTitle title="Change Mobile Number" />}
                footer={
                    <ModalFooter>
                      <ModalButton
                        text="Cancel"
                        onPress={() =>this.setState({visible:false})}
                      />
                      <ModalButton
                        text="Change"
                        onPress={() => this.mobileSelected()}
                      />
                    </ModalFooter>
                  }
                onTouchOutside={() => {
                this.setState({ visible: false });
                }}
                >
                <ModalContent>
                    <TextInput
                    placeholder= 'New mobile number'
                    style= { styles.oldpasstxtinput }
                    onChangeText = {(mobile_no)=>this.setState({mobile_no})}
                    ></TextInput>
                </ModalContent>
              </Modal>

               </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.User.isFetching,
    }
  }
  export default connect(mapStateToProps)(Personal)