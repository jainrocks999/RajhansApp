import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import Loading from '../../Components/Loadings';
import {Icon,Toast} from 'native-base';
import AsyncStorage  from '@react-native-community/async-storage';
import Moment from 'moment';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';

class Orderpage extends React.Component{
    state = { 
        orderid: '',
        orderarray: [],
        counts: '',
        User:'',
        networkerror: false,
        loading: false
     }

     UNSAFE_componentWillMount = () =>{
        const oid= this.props.navigation.getParam('order_id')
        const oarr= this.props.navigation.getParam('order_array')
        const cs= this.props.navigation.getParam('showcount')
        console.log('counts : ',cs)
       
        AsyncStorage.getItem('User').then(user=>{
            this.setState({
                User: JSON.parse(user)
            })
        })
       
        this.setState({
            orderid: oid,
            orderarray: oarr,
            counts: cs,
        })
     }
     static navigationOptions = ({navigation}) =>  ({
        title: 'Order Page',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
        headerLeft:  (
            <TouchableOpacity
            onPress = { ()=>navigation.navigate('HOME') }
            >
                <Icon
                name = 'md-arrow-back'
                style={{ marginLeft: 20, fontSize: 30, color: colors.white}}
                ></Icon>
            </TouchableOpacity>
               )
      });

     renderSeats = (seat) =>{
        var s = '';
        var u = ',';
         for(let i=0;i<seat.length;i++){
               s = s+seat[i].seat_row_nr + '-' + seat[i].seat_nr+u
         }
         return <Text style = { styles.seatview }>: [ {s.replace(/,\s*$/, "")} ]</Text>;
     }

     confirmBook = (oids,onames,ouids) =>{
         const {User}=this.state
        this.props.dispatch({type:'Booking_Request',userid:User.user_id,
        url:'/confirmOrder/?order_id='+oids+'&profileemail='+onames+'&currentUser='+ouids+'&method=7'})
      
     }

     cancelOrder = (orrid,uuid) =>{
        this.props.dispatch({type:'Cancel_Booking_Request',url:'/newcancelorder/?orderid='+orrid+'&user_id='+uuid+'&is_admin=NO'})
       
     }

    render(){
        const { orderid, orderarray, counts, User, loading } = this.state;
        if(this.props.isFetching){
            return (
                <Loading/>
              )
            }
        return(
            <View style={ styles.container }>
            <ScrollView>
               <Text style={ styles.ftxt }>Please confirm your order details.</Text>
               <Text style={ styles.stxt }>Show Details</Text>
               <View style = { styles.detailView }>
                   <View style = { styles.vvview }>
                        <Text style={ styles.headtxt }>Movie</Text>
                        <Text style={ styles.movietxt }>: { orderarray[0].event_name }</Text>
                   </View>
                   <View style= { styles.allview }>
                       <Text style={ styles.headtxt }>No. Of Tickets</Text>
                       <Text style={ styles.tktview }>: {orderarray.length}</Text>
                   </View>
                   <View style= { styles.allview }>
                      <Text style={ styles.headtxt }>Seat numbers</Text>
                      { this.renderSeats(orderarray) }
                      
                   </View>
                   <View style={ styles.allview }>
                     <Text style={ styles.headtxt }>Category</Text>
                     <Text style={ styles.catview }>: {orderarray[0].category_name}</Text>
                   </View>
                   <View style={ styles.allview }>
                      <Text style= { styles.headtxt }>Date</Text>
                      <Text style={ styles.dateview }>: {Moment(orderarray[0].event_date).format('DD-MM-YYYY')}</Text>
                   </View>
                   <View style={ styles.lastdetailview }>
                       <Text style={ styles.headtxt }>Time</Text>
                       <Text style={ styles.timeview }>: {Moment(orderarray[0].event_time,"hh:mm A").format('hh:mm A')}</Text>
                   </View>
               </View>
               <Text style={ styles.txtyourdetail }>Your Detail:</Text>
               <View style={ styles.detailView }>
                   <View style={ styles.vvview }>
                   <Text style={ styles.headtxt }>Email</Text>
                   <Text style={ styles.emailview }>: {User.username}</Text>
                   </View>
                   <View style={ styles.allview }>
                       <Text style={ styles.headtxt }>Mobile</Text>
                       <Text style={ styles.mobileview }>: {User.user_phone}</Text>
                   </View>
                   <View style={ styles.allview }>
                      <Text style={ styles.headtxt }>Dependent Count</Text>
                      <Text style={ styles.dependentview }>: {orderarray.length}</Text>
                      {/* <Text style={ styles.paidview }>Paid Count : 0</Text> */}
                   </View>
                   <View style={ styles.lastdetailview }>
                     <Text style={ styles.headtxt }>Current Show Count</Text>
                     <Text style={ styles.showView }>: {counts.myself} myself, {counts.spouse} spouse, 
                    </Text>
                   </View>
                   <Text style={ styles.pview }>{counts.childrens} childrens, {counts.parents} parents, {counts.guestMembers} guestMembers</Text>
               </View>
               <View style={ styles.btnview }>
              
               <TouchableOpacity
               onPress={ ()=>this.cancelOrder(orderid,counts.currentUserId) }
               >
                     <View style={styles.btnpreview}>
                     <Text style={styles.btntxt}>Cancel Booking</Text>
                     </View>
                     </TouchableOpacity>
                     <TouchableOpacity
                       onPress={ ()=>this.confirmBook(orderid,User.username,counts.currentUserId) }
                     >
                     <View  style={styles.confirmpreview}>
                     <Text style={styles.btntxt}>Confirm Booking</Text>
                     </View>
                     </TouchableOpacity>      
               </View>
               </ScrollView>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Order.isFetching,
    }
  }
  export default connect(mapStateToProps)(Orderpage)