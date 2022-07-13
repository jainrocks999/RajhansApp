import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.transparent,
        justifyContent:'center'
    },
    oldpasstxtinput:{
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 40,
        marginTop: 15,
        fontSize:16
    },
    viewpassword:{
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        width:165,
        height: 40,
        marginHorizontal: 5,
        alignSelf: 'center'
    },
 
    btntxt:{
        color: colors.white,
        fontSize: 14,
        fontFamily:LucidaHandwritingItalic
    },
})