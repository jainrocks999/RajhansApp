import React from 'react';
import { View, Image } from 'react-native';

const Rating=({stars,style})=>{
   if (!stars) {
     return <View/>
   }
    if(stars === '*****'){
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
      else if(stars === '****'){
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
      else if(stars === '***'){
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
      
      else if(stars === '**'){
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
     else if(stars === '*'){
        return(
          <View style={styles.ratingview }>
          <Image
          source={require('../../Images/star.png')}
          ></Image>
          </View>
        )
      }
}

export default Rating;