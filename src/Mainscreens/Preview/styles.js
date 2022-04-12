import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    imgview:{
        marginTop: 20,
        height: 240,
        width: 200,
        alignSelf: 'center',
    },
    img:{
        height: 240,
        width: 200,
    },
    Ratingview:{
        flexDirection: 'row',
    },
    txtsame:{
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10,
        fontWeight:'bold'  
    },
    txtratings:{
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10
    },
    txtstar:{
        marginTop: 5,
        fontSize: 14,
        marginLeft: 10,
        fontFamily:LucidaHandwritingItalic
    },
    txtgenre:{
        marginTop: 7,
        fontSize: 16,
        marginLeft: 5,
        fontFamily:LucidaHandwritingItalic
    },
    txtintro:{
        marginTop: 25,
        fontSize: 15,
        marginLeft: 10,
        fontFamily:LucidaHandwritingItalic
    },
    btnbook:{
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
    },
    btnbookview:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height: 45
    },
    booktktview:{
        backgroundColor: colors.blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 145,
        height: 40,
        marginLeft: 5
    },
    btntxt:{
        color: colors.white,
        fontSize:16,
        fontFamily:LucidaHandwritingItalic
    },
    ratingview:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    }
})