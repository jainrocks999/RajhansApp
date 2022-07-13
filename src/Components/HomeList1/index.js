import React,{useState} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';
import colors from '../../Config/Colors';
import Moment from 'moment';
import { LucidaHandwritingItalic } from '../../Config/constant';
const commingImage=require('../../Images/commingsoon.jpg')

const HomeList1=({movie,navigation})=>{ 

    const [enable_date,SetDate]=useState(Moment(new Date()).format('YYYY-MM-DD'))
    const [enable_datetime,SetDateTime]=useState(Moment(new Date()).format('HH:MM:SS'))
// console.log('this is moviw nM IS here',movie);
     
  const onPreviewGo =(moviename,btn_url)=>{
    console.log('moviename :',moviename)
    console.log('btn_url',btn_url)
  
    navigation.push('PREVIEW',{moviename: moviename,moviedate: btn_url})
  
  }
  
  const _btnVerify = (item) =>{
      console.log('item ::',item);
        // if((item.enable_date<enable_date)&&(item.button_url>enable_date)){
         return(
           <TouchableOpacity style={styles.bookbtns} 
           onPress={()=>onPreviewGo(item.event_name,item.event_date)}>
           <Text style={styles.booktxt}>BOOK NOW</Text>
        </TouchableOpacity>
         )
        // } else if(((item.enable_date == enable_date) && (item.enable_datetime < enable_datetime))||((item.button_url == enable_date) && (item.disable_time>enable_datetime))){
        //  return(
        //    <TouchableOpacity style={styles.bookbtns} onPress={()=>onPreviewGo(item.movie_name,item.button_url,item.enable_datetime)}>
        //    <Text style={styles.booktxt}>BOOK NOW</Text>
        // </TouchableOpacity>
        //  )
        // } else {
        //  return(
        //    <View style={[styles.bookbtns,{backgroundColor:colors.grey}]}>
        //    <Text style={styles.booktxt}>BOOK NOW</Text>
        // </View>
        //  )
        // }
     }

   const renderSeparator=()=>{
        return <View style={{height:4,backgroundColor:colors.grey,width:'100%',alignSelf:'center'}}/>
      }

    return(
        <View style={{backgroundColor:colors}}>
            <Text style={styles.headtxt}>{'Now Showing'}</Text>
            {/* <Text style = {styles.headtxt}>{movie[0].day+' ('+Moment(movie[0].button_url).format('DD-MM-YYYY')+')'}</Text> */}
       <FlatList
        style={{marginTop:5,borderRadius: 6,backgroundColor:colors.white,marginBottom:3}}
        data={movie}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(index) => index}
        renderItem={({ item }) => (
         <View style={[styles.items,{marginTop:5}]}>
         <View style={styles.rowitems}>
            <Image style={ styles.img }
            source={item.url ? {uri: `${item.url}`} : commingImage}
            ></Image>
            <View style = { styles.moviedetail }>
                 <Text style={styles.rowtitle}>{item.event_name}</Text>
                {_btnVerify(item)}
            </View>
         </View>
       </View> 
        )}
      />
      </View>
      )
}

const styles=StyleSheet.create({
    headtxt:{
        marginTop:8,
        color: colors.Royal_blue,
        fontSize: 16,
        marginLeft:5,
        marginBottom:3,
        fontFamily:LucidaHandwritingItalic,
    },
    img:{
        width: 88,
        height: 115,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
       },
       items: {
        borderRadius: 4,
        backgroundColor: colors.white,
        margin:1
    },
    rowitems: { 
        flexDirection: 'row',
        },
    rowtitle: {
        fontFamily:LucidaHandwritingItalic,
        fontSize: 16,
        color: colors.black,
        marginBottom:6,
        width:190
    },
    moviedetail:{
        marginLeft: 10,
        justifyContent:'center',
        marginVertical:5
    },
    bookbtns:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:3,
        paddingVertical:6,
        backgroundColor:colors.blue,
        marginBottom:4,
        width:82
    },
    booktxt:{
        color:colors.white,
        fontSize:12,
    }
})

export default HomeList1;