import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

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
        color: colors.black,
        fontSize: 16,  
    },
    feedbackinput:{
        marginTop: 25,
        padding: 10,
        color: colors.black,
        fontSize: 16,
    },
    sendbtn:{
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
      backgroundColor: colors.blue,
      width:120,
      height:40,
      justifyContent:'center'
    },
    btntxt:{
        color: colors.white
    }
})