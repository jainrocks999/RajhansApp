import React from 'react';
import { View, Text, TouchableOpacity ,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';
import {Icon,Toast} from 'native-base';
import BackHeader from '../../Components/BackHeader';

export default class Confirmbooking extends React.Component{
    state = { messages: '' }

    static navigationOptions= ({ navigation }) => ({
        title: 'Order Confirmation Page',
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
            <Image style={{height:24,width:24,marginLeft:7}} resizeMode='center' source={require('../../Images/arrow.png')}/>
                {/* <Icon
                name = 'md-arrow-back'
                style={{ marginLeft: 20, fontSize: 30, color: colors.white}}
                ></Icon> */}
            </TouchableOpacity>
               )
      });

    UNSAFE_componentWillMount = () =>{
        const msgs = this.props.route.params.msg
        this.setState({
            messages: msgs
        })
    }

    gotoHome=()=>{
        this.props.navigation.push('HOME')
    }
    gotoOrder=()=>{
        this.props.navigation.navigate('OrderHistory')
    }
    
    render(){
        return(
            <View style={ styles.container }>
                <BackHeader
                title={"Order Confirmation Page"}
                onPress = { ()=>this.props.navigation.navigate('HOME') }
                />
                <Text style={ styles.seattxt }>{this.state.messages}</Text>
                 {/* <Text style={ styles.othertxt }>SMS and Email has been sent to you. You can show the SMS/Email of Your Booking Confirmation</Text> */}
                 <View style={styles.starview}>
                 <Text style={{color: colors.red,fontSize:30,marginLeft: 10}}>*</Text>  
                 <Text style={ styles.mailtxt }>You can also get a mail using a button.</Text>
                 </View>
                 <View style={styles.starview}>
                 <Text style={{color: colors.red,fontSize:30,marginLeft: 10}}>*</Text>    
                 <Text style={ styles.lasttxt }> Please carry your ID cards. Enjoy Rajhans experience!</Text>
                 </View>

                 <View style={ styles.btnview }>
                    <TouchableOpacity
                    style={styles.btnpreview}
                    onPress={this.gotoHome}>
                        <Text style={styles.btntxt}>Home</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style={styles.btnpreview}
                     onPress={this.gotoOrder}>
                        <Text style={styles.btntxt}>Bookings</Text>
                     </TouchableOpacity>
                 </View>
            </View>
        )
    }
}