import React from 'react';
import { View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';
import Moment from 'moment';

const OrderList=({order,onCancal})=>{

   const checkStatus=(item)=>{
        if(item.order_status === 'cancel'){
          return(
              <View style={ styles.statusview }>
              <Text style={{fontWeight: 'bold'}}>Status: </Text>  
              <Text style={ styles.txtfailure }>Your booking has been cancelled.</Text>
              </View>
          )
        } else{
          return(
              <View style={ styles.statusview }>
              <Text style={{fontWeight: 'bold'}}>Status: </Text>  
              <Text style={ styles.txtsuccessfull }>Your booking has been confirmed.</Text>
              </View>
          ) 
        }
      }

      const checkButton =(item)=>{
     
        if(item.order_status === 'cancel'){
            
        }else{
         let orderdate=new Date(item.event_date)
         let currentdate=new Date();
         
         if (Moment(orderdate).format('DD/MM/YYYY') >= Moment(currentdate).format('DD/MM/YYYY')) {
           return(
             <TouchableOpacity
             style={styles.btnpreview}
             onPress={()=> onCancal(item)}>     
               <Text style={styles.btntxt}>Cancel Seats</Text>
              </TouchableOpacity>
           )
         }else{
         console.log('Date is grater than current date.')
         }
        
        }
     }


  return(
      <View style={ styles.listview }>
            <View style={ styles.orderview }>
                <Text style={ styles.txtorder }>Order No {order.order_id}</Text>
                {checkButton(order)}
            </View>
       
            <Text style={{fontSize: 16,color:colors.Royal_blue,fontFamily:LucidaHandwritingItalic,marginLeft:2}}>{ order.order_date }</Text>
            <View style={ styles.dateview }>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>Tickets: </Text>   
                <Text style={{color:colors.Royal_blue,fontWeight: 'bold'}}>{order.order_tickets_nr}</Text>
                </View>
                <Text style={ styles.txtrate }>₹ {order.order_total_price}</Text>
            </View>
            {checkStatus(order)}
        
      </View>
  )
}

const styles=StyleSheet.create({
    listview:{
        marginHorizontal: 5,
        marginVertical:2,
        padding: 3,
        backgroundColor: colors.white,
        borderRadius: 4
    },
    orderview:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtorder:{
       fontSize: 16,
       color: colors.black, 
       fontFamily:LucidaHandwritingItalic,
    },
    txtrate:{
        fontSize: 15,
       color: colors.black,
       marginRight: 5
    },
    dateview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5
    },
    btnpreview:{
        backgroundColor: colors.red,
        alignItems: 'center',
         marginRight: 5,
         justifyContent: 'center',
         paddingHorizontal:10,
         paddingVertical:5
         
     },
     btntxt:{
        color: colors.white,
        fontSize: 12
     },
     statusview:{
        flexDirection: 'row',
        marginLeft: 5
    },
    txtsuccessfull:{
        color: colors.green,
     },
     txtfailure:{
        color: colors.red,
    },
})

export default OrderList;