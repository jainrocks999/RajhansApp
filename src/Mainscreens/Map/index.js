import React from 'react';
import {View,Image,Text, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
import Loading from '../../Components/Loadings';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import {Icon,Toast} from 'native-base';
import colors from '../../Config/Colors';
import BackHeader from '../../Components/BackHeader';
class HallView extends React.Component{
    state = {
        width: Dimensions.get('window').width,
        event_id: '',
        user_id: '',
        user_type: '',
        ort_id: '',
        name: '',
        date: '',
        time: '',
        vanue: '',
        u_dependent: '',
        webloading: false
    }

    UNSAFE_componentWillMount= async()=>{

      // this.props.route.params.moviename

        const eid=this.props.route.params.eventsid
        const userstring = await AsyncStorage.getItem('User');
        let user=JSON.parse(userstring)
        const oid=this.props.route.params.ortsid
        const pname = this.props.route.params.mname
        const pdate = this.props.route.params.edate
        const ptime =this.props.route.params.etime
        const pvanue =this.props.route.params.oname
        const udependent = await AsyncStorage.getItem('USER_DEPENDENT');
        // console.log('id'+eid)
        console.log('https://lcahgoa.in/index.php/app/seatmap1?eventid='+eid+'&user_id='+user.user_id+'&user_type='+user.user_type+'&width='+this.state.width)
        this.setState({
            event_id: eid,
            user_id: user.user_id,
            user_type: user.user_type,
            ort_id: oid,
            name: pname,
            date: pdate,
            time: ptime,
            vanue: pvanue,
            u_dependent: udependent
        })

    }
    
    

      onMessage(data) {
       
          console.log(data);
          const { event_id,ort_id,name,date,time,vanue,user_type,u_dependent } = this.state;
          // console.log('https://lcahgoa.in/index.php/app/addtocart/?csrf_test_name=' + "9503452c1433fcd9d7cb0f3f98bdac76" + "&event_id=" + event_id + "&catname=" + data.catname + "&catid=" + data.catid + "&ort_id=" + ort_id +
          // "&catprice=" + data.catprice + "&event=" + name + "&time=" + time + "&date=" + date +
          // "&vanue=" + vanue + "&booked_tickets_of_show=" + data.prevBookedShowTickets + "&booked_tickets_of_movie=" + data.prevBookedMovieTickets + "&event_type=" + data.event_type +
          // "&user_type=" + user_type + "&user_dependent=" + u_dependent + "&paidseats=" + "0" + "&admiralId=" + data.admiralId + "&currentUser="
          // + data.currentUserId + "&seat_id" + data.place + "&myself=" + data.myself + "&spouse=" + data.spouse + "&childrens=" +
          // data.childrens + "&parents=" + data.parents + "&brothers=" + data.brothers +
          // "&sisters=" + data.sisters + "&guests=" + data.guestMembers)
         
          let url='/addtocart/?csrf_test_name=' + "9503452c1433fcd9d7cb0f3f98bdac76" + "&event_id=" + event_id + "&catname=" + data.catname + "&catid=" + data.catid + "&ort_id=" + ort_id +
          "&catprice=" + data.catprice + "&event=" + name + "&time=" + time + "&date=" + date +
          "&vanue=" + vanue + "&booked_tickets_of_show=" + data.prevBookedShowTickets + "&booked_tickets_of_movie=" + data.prevBookedMovieTickets + "&event_type=" + data.event_type +
          "&user_type=" + user_type + "&user_dependent=" + u_dependent + "&paidseats=" + "0" + "&admiralId=" + data.admiralId + "&currentUser="
          + data.currentUserId + "&seat_id" + data.place + "&myself=" + data.myself + "&spouse=" + data.spouse + "&childrens=" +
          data.childrens + "&parents=" + data.parents + "&brothers=" + data.brothers +
          "&sisters=" + data.sisters + "&guests=" + data.guestMembers

          this.props.dispatch({type:'Add_ToCart_Request',url:url,counts:data,navigation:this.props.navigation})

         }


     render(){
         const { width,event_id,user_id,user_type,loading } = this.state;
         if (this.props.isFetching) {
            return (
              <Loading/>
            )
          }
         return(
             <View style={styles.container}>
               <BackHeader
               fontSize={15}
               title={this.props.route.params.mname}
               onPress = { ()=>this.props.navigation.navigate('BOOK') }
               />
               <View style={ styles.seatStyle }>
                <Image
                source={require('../../Images/chair_empty.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text style={ styles.seattxtstyle }>Vacant</Text>
                <Image
                source={require('../../Images/chair_green.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text style={ styles.seattxtstyle } >Selected</Text>
                <Image
                source={require('../../Images/chair_red.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text style={ styles.seattxtstyle } >Booked</Text>
                <Image
                source={require('../../Images/chair_blue.png')}
                style={ styles.seatimgstyle }
                ></Image>
                <Text
                style={ styles.seattxtstyle }
                >Unavailable</Text>
               </View>
                 <WebView
                 
                 source={{uri:'https://lcahgoa.in/index.php/app/seatmap1?eventid='+event_id+'&user_id='+user_id+'&user_type='+user_type+'&width='+width}}
                 javaScriptEnabled={true}
                 onMessage={(event)=> this.onMessage(JSON.parse(event.nativeEvent.data))}
                 ></WebView>
                 {console.log('url','https://lcahgoa.in/index.php/app/seatmap1?eventid='+event_id+'&user_id='+user_id+'&user_type='+user_type+'&width='+width)}
             </View>
         )
     }
}

const mapStateToProps=(state)=>{
    return{
      isFetching:state.Movie.isFetching,
    }
  }
  export default connect(mapStateToProps)(HallView)