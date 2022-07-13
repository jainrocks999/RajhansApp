import { StyleSheet } from 'react-native';
import Colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.transparent
    },
    ftxt:{
        textAlign: 'center',
        color: Colors.Royal_blue,
        marginTop: 5,
        fontSize: 16,
        fontFamily:LucidaHandwritingItalic 
    },
    stxt:{
       textAlign: 'center',
       color: Colors.Royal_blue,
       marginTop: 3,
       fontSize: 16,
       fontFamily:LucidaHandwritingItalic
    },
    detailView:{
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        padding: 2,
        backgroundColor: Colors.white
    },
    allview:{
        flexDirection: 'row',
        marginTop: 13,
        marginLeft: 2
    },
    headtxt:{
        color: Colors.blue
    },
    movietxt:{
        color: Colors.blue,
        marginLeft: 94
    },
    tktview:{
        color: Colors.blue,
        marginLeft: 43
    },
    seatview:{
        color: Colors.blue,
        marginLeft: 45
    },
    catview:{
        color: Colors.blue,
        marginLeft: 75
    },
    dateview:{
       color: Colors.blue,
       marginLeft: 102 
    },
    lastdetailview:{
        flexDirection: 'row',
        marginTop: 13,
        marginLeft: 2,
        marginBottom: 5
    },
    timeview:{
        color: Colors.blue,
        marginLeft: 102
    },
    vvview:{
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 2
    },
    txtyourdetail:{
        textAlign: 'center',
        color: Colors.Royal_blue,
       fontSize: 16,
       fontFamily:LucidaHandwritingItalic
    },
    emailview:{
        color: Colors.blue,
        marginLeft: 99
    },
    mobileview:{
        color: Colors.blue,
        marginLeft: 92
    },
    dependentview:{
        color: Colors.blue,
        marginLeft: 27
    },
    paidview:{
        marginLeft: 13,
        color: Colors.blue
    },
    showView:{
        color: Colors.blue,
        marginLeft: 12
    },
    pview:{
     alignSelf: 'center',
     color: Colors.blue
    },
    btnview:{
        flexDirection: 'row',
       alignSelf: 'center',
        marginTop: 10,
    },
    btnpreview:{
        backgroundColor: Colors.red,
        alignItems: 'center',
         borderRadius: 3,
         justifyContent: 'center',
         width: 142,
         height: 42,
         marginHorizontal: 5,        
     },
     btntxt:{
        color: Colors.white,
        fontFamily:LucidaHandwritingItalic
     },
     confirmpreview:{
        backgroundColor: Colors.blue,
        alignItems: 'center',
         borderRadius: 3,
         justifyContent: 'center',
         width: 142,
         height: 42,
         marginHorizontal: 5, 
     },
})