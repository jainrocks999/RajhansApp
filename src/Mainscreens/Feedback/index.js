import React from 'react';
import {View,Text,TouchableOpacity,TextInput,ScrollView,ActivityIndicator, ActionSheetIOS,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import {Icon,Textarea} from 'native-base';
import AsyncStorage  from '@react-native-community/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import  Toast  from 'react-native-simple-toast';


class Feedback extends React.Component{
    state = {
          User: '',
          Feedback: '',
         }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Feedback',
        drawerLabel: 'Feedback',
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

    componentWillMount =()=>{
        AsyncStorage.getItem('User').then(user=>{
           this.setState({
               User: JSON.parse(user)
           })
        }
        )
    }

    getSend=()=>{
        const {User,Feedback} = this.state;
        if( Feedback === '' ){
            Toast.show('Please write feedback', Toast.LONG);
        }else{
            this.props.dispatch({type:'Set_Feedback_Request',
            url:'/feedback?emailid='+User.username+'&comments='+Feedback})
        }
    }

    render(){
       const {User}=this.state
        return(
          <View style = {styles.container}>
          <ScrollView>
              <Text style = {styles.txt}>We Would Love To Hear From You</Text>
              <TextInput
              style = { styles.useremail }
              value = {User.username}
              editable = {false}
              ></TextInput>
             
               <View style={{borderWidth:1,marginTop:30,height:160}}>
               <TextInput
              style = { styles.feedbackinput }
              placeholder = 'Write feedback here...'
              multiline
              // rowSpan={6}
              // bordered
              onChangeText= {text=>this.setState({ Feedback: text })}
              value= { this.state.Feedback }
              ></TextInput>
              </View>

              <TouchableOpacity
              style={ styles.sendbtn }
              onPress= {()=>this.getSend}>
                  {this.props.isFetching
                  ?<ActivityIndicator color={colors.white}/>
                  :<Text style={ styles.btntxt }>Send</Text>
                }
              </TouchableOpacity>

              </ScrollView>
          </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Other.isFetching,
    }
  }
  export default connect(mapStateToProps)(Feedback)