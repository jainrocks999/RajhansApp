import React from 'react';
import { View,Text,TouchableOpacity, FlatList,Image} from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import Colors from '../../Config/Colors';
import Loading from '../../Components/Loadings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import SeatList from '../../Components/SeatList';
import BackHeader from '../../Components/BackHeader';
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
        orederid:props.route.params.orderId,
        seatid:'',
        User:null,
        loading: false
    }
    }
    
   

    componentWillMount= async ()=>{
        const {orederid}=this.state
        let userstring= await AsyncStorage.getItem('User');
        let user=JSON.parse(userstring)
        this.props.dispatch({type:'Fetch_Seats_Request',url:'/cancelticket?order_id='+orederid,})
        this.setState({User:user})
        
    }
    
    seatCancel=(seatid)=>{
      const { orederid, User} = this.state;
      this.props.dispatch({type:'Cancel_Seat_Request',
      url:'/cancelseat?orderid='+orederid+'&user_id='+User.user_id+'&seatid='+seatid,
       orederid,userid:User.user_id,navigation:this.props.navigation})

    }

    cancelAllSeat=()=>{
        const { orederid, User } = this.state;
        this.props.dispatch({type:'Cancel_Seats_Request',
        url:'/newcancelorder?orderid='+orederid+'&user_id='+User.user_id,
         orederid,userid:User.user_id,navigation:this.props.navigation})

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
            <View style={ {flex:1} }>
                <BackHeader
                        title= 'Cancel Booking'
                        onPress = { ()=>this.props.navigation.navigate('ORDER') }                
                />
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