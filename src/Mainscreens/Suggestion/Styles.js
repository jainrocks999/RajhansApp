import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },
    txt:{
        textAlign: 'center',
        color: colors.blue,
        fontSize: 15,
        marginTop: 22
    },
    useremail:{
        marginTop: 100,
       borderBottomWidth: 0.8,   
       fontSize:16,
       color: colors.black,
    },
    feedbackinput:{
        marginTop: 25,
        padding: 10,
        fontSize:16,
        color: colors.black,
    },
    sendbtn:{
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 25,
      backgroundColor: colors.blue,
      width:120,
      height:40,
      justifyContent:'center'
    },
    btntxt:{
        color: colors.white
    }
})