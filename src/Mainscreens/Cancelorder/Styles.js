import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.transparent,
        padding: 10,

    },
    
     btntxt:{
        color: colors.white,
        fontSize: 12,
        fontFamily:LucidaHandwritingItalic,
     },
     bothbtnview:{
        flexDirection: 'row',
        justifyContent:'space-around',
        position:'absolute',
        left:10,
        right:10,
        bottom:10
     },
     bothbtn:{
        backgroundColor: colors.red,
        alignItems: 'center',
         borderRadius: 3,
         marginTop: 5,
         justifyContent: 'center',
         paddingVertical: 8,
         paddingHorizontal: 10,
         width: 135,
         marginLeft: 3
     },
     homebtn:{
        backgroundColor: colors.blue,
        alignItems: 'center',
         borderRadius: 3,
         marginTop: 5,
         justifyContent: 'center',
         paddingVertical: 8,
         paddingHorizontal: 10,
         width: 135,
         marginLeft: 3
     },
     txt:{
         color: colors.black,
         fontSize: 16,
         fontFamily:LucidaHandwritingItalic,
     },
    
})