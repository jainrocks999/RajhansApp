import { StyleSheet } from 'react-native';
import colors from '../../Config/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        width:'100%',
    },
    seatStyle:{
        flexDirection: 'row',
        marginTop: 3,
        width:'100%',
        justifyContent: 'center'
    },
    seatimgstyle:{
        marginLeft: 3,
        marginRight: 3
    },
    seattxtstyle:{
        color: colors.dark_grey,
        marginLeft: 3,
        marginRight: 3
    },
   
})