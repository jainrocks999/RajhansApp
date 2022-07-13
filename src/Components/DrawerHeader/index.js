import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, } from "@react-navigation/native";
import Colors from "../../Config/Colors";
import { LucidaHandwritingItalic } from "../../Config/constant";

export default DrawerHeader=( props) => {
  const navigation = useNavigation();
return(
    <View style={{
        backgroundColor:Colors.blue,
        height:40,
        flexDirection:'row',
        alignItems:'center'
      }}>
       <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
              <Image
                style={{height: 40, width: 40, marginLeft: 7}}
                source={require('../../Images/menu2.png')}
              />
            </TouchableOpacity>
<Text
style={{color:Colors.white,
fontFamily: LucidaHandwritingItalic,
fontSize: 20,
marginLeft:30,
}}>
{props.title}
</Text>
      </View>
)
}