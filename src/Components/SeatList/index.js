import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Moment from 'moment';
import Colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

const SeatList=({seat,seatCancel})=>{
 return(
    <View  style={styles.detailview}>
    <Text style={ styles.datetxt }>{Moment(seat.event_date +' '+ seat.event_time).format('DD-MMM-YYYY hh:mm A') }</Text>
    <View style = { styles.categorytxt }>
      <View>
          <Text style={ styles.txt }>Category: {seat.category_name}</Text>
          <Text style={ styles.txt }>Seat No: {seat.seat_row_nr}-{seat.seat_nr}</Text>
       </View>
       <View>
           <TouchableOpacity
           onPress={()=>seatCancel(seat.seat_id)}
           >
        <View  style={styles.btnpreview}>
         <Text style={styles.btntxt}>Cancel Seat</Text>
        </View>
        </TouchableOpacity>
       </View>
     </View> 
    </View>
 )
}

const styles=StyleSheet.create({
    detailview:{
        backgroundColor: Colors.white,
        borderRadius:3,
        padding:5
       },
    datetxt:{
        marginTop: 5,
        fontSize: 18,
        color: Colors.black,
        fontFamily:LucidaHandwritingItalic,
    },
    categorytxt:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt:{
        color: Colors.black,
        fontSize: 16,
        fontFamily:LucidaHandwritingItalic,
    },
    btntxt:{
        color: Colors.white,
        fontSize: 12
     },
    btnpreview:{
        backgroundColor:Colors.red,
        paddingHorizontal:10,
        paddingVertical:5
    }
})

export default SeatList;