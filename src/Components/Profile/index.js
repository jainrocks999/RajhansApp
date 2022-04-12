import React,{useState,useEffect} from 'react';
import { View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';
import AsyncStorage  from '@react-native-community/async-storage';

const Profile=({passwordSelected,mobileSelected})=>{
    const [User,setUser]=useState('')
     
    useEffect(()=>{
     getUser=async()=>{
        let userstring=await AsyncStorage.getItem('User')
        let user=JSON.parse(userstring)
        setUser(user)
     }
     getUser()
    },[])

   const renderFullname =()=>{
      if (User.user_firstname && User.user_lastname) {

        return(
            <Text style={ styles.fullname }>{User.user_firstname.charAt(0).toUpperCase()+User.user_firstname.slice(1)
                +' '+ User.user_lastname.charAt(0).toUpperCase()+User.user_lastname.slice(1)}</Text>
        )
          
      } else {
          return null;
      }
    }

  const renderAlfaname =()=>{
      if (User.user_firstname && User.user_lastname) {

        return(
            <Text style={styles.alphatext}>{User.user_firstname.charAt(0).toUpperCase()}{User.user_lastname.charAt(0).toUpperCase()}</Text>
        )
          
      }else if (User.username) {

        return(
            <Text style={styles.alphatext}>{User.username.charAt(0).toUpperCase()}</Text>
        )
          
      } else {
          return null;
      }
    }

return(
    <View style={{alignItems: 'center'}}>
     
        <View style={styles.alphaview}>
        {renderAlfaname()}
        </View>
        <View>
        {renderFullname()}
          <Text style={ styles.txtmail }>{ User.username }</Text>      
           <View style={ styles.emailview }>
              <Text style={ styles.txtsame } >Mobile:</Text>
              <Text style={ styles.txtmobile }>{ User.user_phone }</Text>
           </View>
           <View style={ styles.emailview }>
              <Text style={ styles.txtsame } >User Category:</Text>
              <Text style={ styles.txtcategory }>{ User.user_type }</Text>
           </View>
           <View style={ styles.emailview }>
              <Text style={ styles.txtsame } >No of Dependents:</Text>
              <Text style={ styles.txtdepartment }>{ User.user_dependent }</Text>
           </View>
           </View>
           <View style={{marginTop: 50,alignSelf: 'center'}}>
            
                <Text onPress={passwordSelected} style={styles.btntxt}>Change Password</Text>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.blue,marginVertical:10}}/>
                <Text onPress={mobileSelected} style={styles.btntxt}>Change Mobile no</Text>
              
            </View>
   </View>
)
}

const styles=StyleSheet.create({
    fullname:{
        color: colors.Royal_blue,
        fontSize: 18,
        marginLeft: 15,
        fontFamily:LucidaHandwritingItalic,
        marginTop: 10
    },
    emailview:{
        flexDirection: 'row',
        marginTop: 10
    },
    txtsame:{
        color: colors.black,
        fontSize: 16,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    txtmail:{
        color: colors.Royal_blue,
        fontSize: 16,
        marginLeft: 15,
        marginTop: 5,
        fontFamily:LucidaHandwritingItalic
    },
    txtmobile:{
        color: colors.black,
        fontSize: 16,
        marginLeft: 8
    },
    txtcategory:{
        color: colors.black,
        fontSize: 16,
        marginLeft: 8
    },
    txtdepartment:{
        color: colors.black,
        fontSize: 16,
        marginLeft: 8
    },
    alphaview:{
     width:100,
     height:100,
     borderRadius:50,
     borderColor:colors.grey,
     borderWidth:1,
     justifyContent:'center',
     marginBottom:10,
    },
    alphatext:{
        color: colors.Royal_blue,
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    viewpassword:{
        backgroundColor: colors.blue,
        paddingHorizontal:10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginHorizontal: 5,
        alignSelf: 'center'
    },
    btntxt:{
        color: colors.blue,
        fontSize: 16,
        fontFamily:LucidaHandwritingItalic
    },
})

export default Profile;