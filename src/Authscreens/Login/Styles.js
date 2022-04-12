import {StyleSheet} from 'react-native';
import  colors  from "../../Config/Colors";
import { LucidaHandwritingItalic } from '../../Config/constant';

 export default StyleSheet.create({
     container:{
         backgroundColor: colors.white,
         flex: 1,
        
     },
    
     loginimg:{
         height: 170,
         width: 170,
         alignSelf:'center',
         marginTop:25
     },
     usernames:{
         marginTop: 20,
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 35   
     },
     passwords:{
        marginTop: 20,
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 35

     },
     btn:{
        marginTop:20,
        backgroundColor: colors.blue,
        alignItems: 'center',
        alignSelf: 'center',
        width: 100,
        height:40,
        justifyContent:'center'   
    },
    forgettxt:{
        textAlign: 'center',
        fontSize: 15,
        color: colors.red,
        marginTop: 18,
        fontFamily:LucidaHandwritingItalic,
    },
    fotterview:{
        backgroundColor: colors.blue,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10
    },
    fottertxt:{
        textAlign: 'center',
        color: colors.white,
        fontSize: 11
    },
    cmngimg:{
        height:300,
        width:500
    }
 })