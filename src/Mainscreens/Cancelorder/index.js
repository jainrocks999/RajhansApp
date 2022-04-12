import React from 'react';
import { View,Text,TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import Colors from '../../Config/Colors';
import Loading from '../../Components/Loadings';
import {Icon,Toast} from 'native-base';
import AsyncStorage  from '@react-native-community/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import SeatList from '../../Components/SeatList';
class CancelOrder extends React.Component{
    constructor(props){
      super(props)
       this.state = {
        category: '',
        date: '',
        seat_row: '',
        seat_no: '',
        time: '',
        listvisible: false,
        orederid:props.navigation.getParam('orderId'),
        seatid:'',
        User:null,
        loading: false
    }
    }
    
    static navigationOptions = ({navigation}) => ({
        title: 'Cancel Booking',
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
        headerLeft:  (
         <TouchableOpacity
         onPress = { ()=>navigation.navigate('ORDER') }
         >
             <Icon
             name = 'md-arrow-back'
             style={{ marginLeft: 20, fontSize: 30, color: Colors.white}}
             ></Icon>
         </TouchableOpacity>
            )
      });

    componentWillMount= async ()=>{
        const {orederid}=this.state
        let userstring= await AsyncStorage.getItem('User');
        let user=JSON.parse(userstring)
        this.props.dispatch({type:'Fetch_Seats_Request',url:'/cancelticket?order_id='+orederid})
        this.setState({User:user})
        
    }
    
    seatCancel=(seatid)=>{
      const { orederid, User} = this.state;
      this.props.dispatch({type:'Cancel_Seat_Request',
      url:'/cancelseat?orderid='+orederid+'&user_id='+User.user_id+'&seatid='+seatid,
       orederid,userid:User.user_id})

    }

    cancelAllSeat=()=>{
        const { orederid, User } = this.state;
        this.props.dispatch({type:'Cancel_Seats_Request',
        url:'/newcancelorder?orderid='+orederid+'&user_id='+User.user_id,
         orederid,userid:User.user_id})

    }

    goToHome=()=>{
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('HOME');
    }

    separator=()=>{
        return <View style={{borderBottomWidth:1,borderBottomColor:Colors.grey,marginHorizontal:6,marginVertical:2}}/>
    }

    render(){
        if(this.props.isFetching){
            return (
                <Loading/>
              )
            }
        return(
            <View style={ styles.container }>
                <FlatList
                 data={this.props.Seats}
                 ItemSeparatorComponent={this.separator}
                 renderItem={({item})=>(
                     <SeatList seat={item} seatCancel={seatid=>this.seatCancel(seatid)}/>
                 )}
                />
                <View style={ styles.bothbtnview }>
                    <TouchableOpacity
                    style={styles.homebtn}
                    onPress={ this.goToHome}>
                       <Text style={styles.btntxt}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.bothbtn}
                    onPress={ this.cancelAllSeat}>
                         <Text style={styles.btntxt}>Cancel All Seats</Text>
                   </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Order.isFetching,
      Seats:state.Order.Seats,
    }
  }
  export default connect(mapStateToProps)(CancelOrder)