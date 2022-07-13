import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Config/Colors";
import { LucidaHandwritingItalic } from "../../Config/constant";

export default BackHeader= (props)=>{
return(
    <View style={{
        backgroundColor:Colors.blue,
        height:40,
        flexDirection:'row',
        alignItems:'center'
      }}>
        <TouchableOpacity
  style={{alignItems:'center',justifyContent:'center'}}
  onPress = {props.onPress }
  >
    <Image style={{height:24,width:24,marginLeft:7}} resizeMode='center' 
    source={require('../../Images/arrow.png')}/>
      </TouchableOpacity>
<Text
style={{color:Colors.white,
fontFamily: LucidaHandwritingItalic,
fontSize:props.fontSize ? props.fontSize : 20,

marginLeft:40,
}}>
{props.title}
</Text>
      </View>
)
}