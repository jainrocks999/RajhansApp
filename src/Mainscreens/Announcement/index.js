import React from 'react';
import { View,Text,FlatList,TouchableOpacity,Image,RefreshControl } from 'react-native';
import styles from './Styles';
import Axios from 'axios';
import colors from '../../Config/Colors';
import {Icon} from 'native-base';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import DrawerHeader from '../../Components/DrawerHeader';

class Announcement extends React.Component{
    state={ 
        response: [], 
        fullresponse:[],
        userid: '',
        loadmore: false,
        rows: ''
     }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Announcement',
        drawerLabel: 'Announcement',
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
            {/* <Icon name="md-menu"
              style={{ marginLeft: 20, fontSize: 30, color: colors.white }}/> */}
              <Image 
        style={{height:40,width:40, marginLeft: 7}} 
        source={require('../../Images/menu2.png')}/>
          </TouchableOpacity>
        ),
      })

    componentWillMount=()=>{
      this.props.dispatch({type:'Get_Announcement_Request',url:'/announcement'})
    }
   
    render(){
        const { News,isFetching} = this.props
       
        return(
            <View style={ styles.container }>
              <DrawerHeader
              title="Announcement"
              />
               <FlatList
               data= { News }
               refreshControl={<RefreshControl 
                refreshing={isFetching} 
                onRefresh={()=> this.props.dispatch({type:'Get_Announcement_Request',url:'/announcement'})}
                />}
               keyExtractor={item => item.id}
               renderItem={({ item })=>(
                   <View style={ styles.listview }>
                     <Image
                     source={require('../../Images/voice.png')}
                     style={{ height:12,width:12,marginTop:5 }}
                     ></Image>
                     <Text style={{ color:colors.black, marginLeft:2, fontSize:15 }}>{item.message}</Text>
                   </View>
               )
            
            }
               ></FlatList>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    isFetching:state.Other.isFetching,
    News:state.Other.News,
  }
}
export default connect(mapStateToProps)(Announcement)