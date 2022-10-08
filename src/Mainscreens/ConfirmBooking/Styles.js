import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    seattxt:{
        textAlign: 'center',
        fontFamily:LucidaHandwritingItalic,
        color: colors.Royal_blue,
        marginTop: 50,
        fontSize: 16
    },
    othertxt:{
        textAlign: 'center',
        color: colors.Royal_blue,
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 16
    },
    mailtxt:{
        textAlign: 'center',
        color: colors.Royal_blue,
        fontSize: 16,
        marginTop: 6,
        fontFamily:LucidaHandwritingItalic,
        textAlign: 'center',
    },
    btnview:{
        flexDirection: 'row',
       alignItems: 'center',
       justifyContent:'center',
       marginBottom: 5,
        position:'absolute',
         bottom:0,
         left:0,
         right:0,
    },
    btnpreview:{
        backgroundColor: colors.blue,
        alignItems: 'center',
         borderRadius: 3,
        //  marginTop: 3,
        //  marginRight: 5,
         justifyContent: 'center',
         width: 120,
         height: 42,
         marginHorizontal: 5,                 
     },
     btntxt:{
         
        color: colors.white,
        fontFamily:LucidaHandwritingItalic,
     },
     lasttxt:{
         color: colors.Royal_blue,
         fontSize: 16,
         marginTop: 6,
         marginLeft: 5,
         fontFamily:LucidaHandwritingItalic,
     },
     starview:{
         flexDirection: 'row',
         marginTop: 20,
         marginHorizontal: 10,
         alignSelf: 'center'
     }
})