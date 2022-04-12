import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.transparent,
        justifyContent:'center'
    },
    oldpasstxtinput:{
        borderBottomWidth: 1,
        height: 40,
        marginVertical: 10,
        fontSize:16
    },
})