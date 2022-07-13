import React from 'react';
import { View, Image,Text } from 'react-native';

const Rating=({stars,style})=>{
   if (!stars) {
     return <View/>
   }else
    if(stars === '*****'||stars=='5'){
        return(
          <View style={ style }>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          </View>
        )
      }
      else if(stars === '****'||stars=='4'){
        return(
          <View style={style}>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
         
          </View>
        )
      }
      else if(stars === '***'||stars=='3'){
        return(
          <View style={ style }>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
         
          </View>
        )
      }
      
      else if(stars === '**'||stars=='2'){
        return(
          <View style={ style }>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
    
          </View>
        )
      }
     else if(stars === '*'||stars=='1'){
        return(
          <View style={style}>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          </View>
        )
      }
      else if(stars>5){
        <Text>{stars}</Text>
      }
}

export default Rating;