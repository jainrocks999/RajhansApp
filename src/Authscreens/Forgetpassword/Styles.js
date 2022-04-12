import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors'
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    txt:{
        textAlign:'center',
        color: colors.black,
        fontSize: 25,
        marginTop: 20
    },
    emailtxt:{
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 30,  
        marginTop: 25       
    },
    btn:{
        marginTop:30,
        backgroundColor: colors.blue,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center'   
    },
    txtbtn:{
        color: colors.white,
        fontFamily:LucidaHandwritingItalic
    },
    msg: {
        alignSelf: 'center',
        color: colors.black,
        fontSize: 14,
        fontFamily:LucidaHandwritingItalic
    }
})