import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';
import Colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.transparent,
    },
    listview:{
        width:'95%',
        justifyContent:'space-between',
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:Colors.white,
        borderBottomWidth:0.8,
        borderBottomColor:colors.grey,
        paddingVertical:6
    },
    orderview:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtorder:{
       fontSize: 16,
       color: colors.black, 
       marginLeft: 5,
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
         borderRadius: 3,
         marginTop: 3,
         marginRight: 5,
         justifyContent: 'center',
         padding: 8
         
     },
     btntxt:{
        color: colors.white,
        fontSize: 8
     },
     txtnote:{
        marginLeft: 5
     },
     txtsuccessfull:{
        color: colors.green,
     },
     lineview:{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        marginTop: 6
    },
    txtfailure:{
        color: colors.red,
    },
    statusview:{
        flexDirection: 'row',
        marginLeft: 5
    },
    moreview:{
        backgroundColor: colors.blue,
        alignItems: 'center',
         justifyContent: 'center',
         padding: 10
    },
    moretxt:{
        color: colors.white
    }
})