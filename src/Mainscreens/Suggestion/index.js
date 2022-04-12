import React from 'react';
import {View,Text,TouchableOpacity,TextInput,ScrollView,ActivityIndicator} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import {Icon,Toast,Textarea} from 'native-base';
import AsyncStorage  from '@react-native-community/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';

class Suggestion extends React.Component{
    state = {
         User: '',
         suggestion: '',
         }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Movie Suggestion',
        drawerLabel: 'Movie Suggestion',
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
            <Icon name="md-menu"
              style={{ marginLeft: 20, fontSize: 30, color: colors.white }}  />
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
    getSuggestion=()=>{
        const{ User,suggestion } = this.state;
        if(suggestion === ''){
            Toast.show('Please write suggestion', Toast.LONG);
        }
        else{
            this.props.dispatch({type:'Movie_Suggestion_Request',
            url:'/moviesuggestion?email_id='+User.username+'&comments='+suggestion})
        }
    }
    render(){
        const {User}=this.state
    
        return( 
          <View style = {styles.container}>
          <ScrollView>
              <Text style = {styles.txt}>We Would Love To Hear Movie Suggestion From You</Text>
              <TextInput
              style = { styles.useremail }
              value = {User ? User.username : ''}
              editable = {false}
              ></TextInput>
              <Textarea
              style = { styles.feedbackinput }
              placeholder = 'Write suggestion here...'
              rowSpan={6}
              bordered
              multiline
              onChangeText= {text=>this.setState({ suggestion: text })}
              value={this.state.suggestion}
              ></Textarea>

              <TouchableOpacity
              style={ styles.sendbtn }
              onPress={ this.getSuggestion}>
                  {this.props.isFetching
                   ?<ActivityIndicator color={colors.white}/>
                   :<Text style={ styles.btntxt }>Send</Text>}
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
  export default connect(mapStateToProps)(Suggestion)