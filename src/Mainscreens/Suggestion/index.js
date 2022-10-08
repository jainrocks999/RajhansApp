import React from 'react';
import {View,Text,TouchableOpacity,TextInput,ScrollView,ActivityIndicator,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import {Icon,Textarea} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import  Toast  from 'react-native-simple-toast';
import DrawerHeader from '../../Components/DrawerHeader';

class Suggestion extends React.Component{
    state = {
         User: '',
         suggestion: '',
         } 

    componentWillMount =()=>{
        AsyncStorage.getItem('User').then(user=>{
           this.setState({
               User: JSON.parse(user)
           })
        }
        )
    }
    getSuggestion=()=>{
        console.log('sfsflksjdflksdjf');
        const{ User,suggestion } = this.state;
        if(suggestion === ''){
            Toast.show('Please write suggestion', Toast.LONG);
        }
        else{
            this.props.dispatch({type:'Movie_Suggestion_Request',
            url:'/moviesuggestion?email_id='+User.username+'&comments='+suggestion,navigation:this.props.navigation})
            
        }
    }
    render(){
        const {User}=this.state
    
        return( 
          <View style = {{flex:1}}>
            <DrawerHeader
            title="Movie Suggestion"
            />
          <View style = {styles.container}>
          <ScrollView>
              <Text style = {styles.txt}>We Would Love To Hear Movie Suggestion From You</Text>
              <TextInput
              placeholderTextColor={colors.dark_grey}
              style = { styles.useremail }
              value = {User ? User.username : ''}
              editable = {false}
              ></TextInput>
              <View style={{borderWidth:1,marginTop:30,height:160}}>
              <TextInput
              style = { styles.feedbackinput }
              placeholder = 'Write suggestion here...'
              placeholderTextColor={colors.dark_grey}
              // rowSpan={6}
              // bordered
              multiline
              onChangeText= {text=>this.setState({ suggestion: text })}
              value={this.state.suggestion}
              ></TextInput>
              </View>
 
              <TouchableOpacity
              style={ styles.sendbtn }
              onPress={()=> this.getSuggestion()}>
                  {this.props.isFetching
                   ?<ActivityIndicator color={colors.white}/>
                   :<Text style={ styles.btntxt }>Send</Text>}
              </TouchableOpacity>

              </ScrollView>
          </View>
          </View>
          
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Other.isFetching,
    }
  }
  export default connect(mapStateToProps)(Suggestion)