import React from 'react';
import { View,Text,FlatList,TouchableOpacity,RefreshControl,Image} from 'react-native';
import styles from './Styles';
import {Icon} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../Components/Loadings';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import OrderList from '../../Components/OrderList';
import Colors from '../../Config/Colors';
import DrawerHeader from '../../Components/DrawerHeader';
class OrderHistory extends React.Component{
    state={ 
        response: [], 
        fullresponse:[],
        User: null,
        rows: ''
     }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Bookings',
        drawerLabel: 'Bookings',
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            {/* <Icon name="md-menu"
              style={{ marginLeft: 20, fontSize: 30, color: Colors.white }} /> */}
              <Image 
        style={{height:40,width:40, marginLeft: 7}} 
        source={require('../../Images/menu2.png')}/>
          </TouchableOpacity>
        ),
      })
      
    UNSAFE_componentWillMount=async()=>{
        let userstring=await AsyncStorage.getItem('User')
        let user=JSON.parse(userstring)
        this.props.dispatch({type:'Order_History_Request',url:'/personalinfo?user_id='+user.user_id,navigation:this.props.navigation})
       this.setState({User:user})
    }

    onCancalPress=(item)=>{
      console.log('cancel item : ',item.order_id);
       this.props.navigation.push('CANCELORDER',{orderId:item.order_id})
    }

    separator=()=>{
      return <View style={{borderBottomWidth:1,borderBottomColor:Colors.grey,marginHorizontal:8,marginVertical:2}}/>
    }
   onRefresh=()=>{
    const {User}=this.state
    this.props.dispatch({type:'Order_History_Request',url:'/personalinfo?user_id='+User.user_id,navigation:this.props.navigation})
   }
    render(){
      
        return(
            <View style={ styles.container }>
              <DrawerHeader title="Bookings"/>
               <FlatList
               data= { this.props.Orders }
               keyExtractor={item => item.order_id}
               refreshControl={<RefreshControl refreshing={this.props.isFetching} onRefresh={this.onRefresh} />}
               ItemSeparatorComponent={this.separator}
               renderItem={({ item })=>(
                  <OrderList order={item} onCancal={order=>this.onCancalPress(order)}/>
                )}
                />
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    isFetching:state.Order.isFetching,
    Orders:state.Order.Orders,
  }
}
export default connect(mapStateToProps)(OrderHistory)