import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grey
    },
    listview:{
        backgroundColor: colors.white,
        marginHorizontal:5,
        marginVertical:2.5,
        borderRadius:4
    },
    txtview:{
        flexDirection: 'row',
        margin: 5
    },
    txt:{
      color: colors.blue,
      fontSize: 14,
      marginLeft:5,
      marginBottom:5,
      fontFamily:LucidaHandwritingItalic,
    },
    horlistview:{
        marginVertical:6,
        marginHorizontal:20
    },
    showview:{
        borderRadius: 5,
        backgroundColor: colors.blue,
        padding: 8,
        width:100,
       alignItems: 'center'
    },
    txttime:{
        color: colors.white,
        // justifyContent: 'center',
        marginLeft: 10,
        marginTop:3
    },
    txtpeak:{
        margin: 5,
        alignItems: 'center',
        color: colors.white,
        fontFamily:LucidaHandwritingItalic,
    },
    lineview:{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        
    },
    rowitems: { 
        flexDirection: 'row',
        margin:5,
        backgroundColor: colors.white,
        paddingVertical: 6,
        paddingHorizontal: 1,
        borderRadius: 4
        },
    rowtitle: {
        fontFamily:LucidaHandwritingItalic,
        fontSize: 18,
        alignSelf: 'flex-start',
        color: colors.black
    },
    rowendtitle: {
        fontFamily:LucidaHandwritingItalic,
        fontSize: 14,
        alignSelf: 'flex-start',
    },
    moviedetail:{
        marginLeft: 2,
    },
    ratingview:{
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 5
    },
    img:{
        width: 80,
        height: 115
       },
       showtime:{
        color: colors.Royal_blue,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 8,
        marginLeft:5,
        fontFamily:LucidaHandwritingItalic,
    },
    show:{
        color: colors.Royal_blue,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 3,
        marginLeft:5,
        fontFamily:LucidaHandwritingItalic,
    },
    peakview:{
        flexDirection:'row',
        backgroundColor:colors.blue,
        borderRadius:4,
        paddingVertical:8,
        justifyContent:'center'
    }
})