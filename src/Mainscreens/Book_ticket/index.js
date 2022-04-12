import React from 'react';
import {View,Text,TouchableOpacity,FlatList,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import {Icon} from 'native-base';
import groupBy from 'lodash.groupby';
import Moment from 'moment';
import { LucidaHandwritingItalic } from '../../Config/constant';
import Rating from '../../Components/Rating';
export default class Book extends React.Component{
    state={ 
       date: '',
       time: '',
       type: '',
       datas: [],
       movname: '',
       ort: '',
       movieimg: '',
       rating: '',
       genre: '',
       cast: '',
       timearray:[],
       event_date:'',
    }

    UNSAFE_componentWillMount = async () => {
        const { navigation } = this.props;
        const moviename=navigation.getParam('moviename',null);
        const movies=navigation.getParam('moviearray',null);
  
        let time=[];
        let groupData=groupBy(movies,item=>item.event_name);
      
        let moviearr=groupData[moviename];
        let groupDate=groupBy(moviearr,item=>item.event_date);
        let dates = Object.keys(groupDate); 
       
        for (let i = 0; i < dates.length; i++) {

            for (let j = 0; j < groupDate[dates[i]].length; j++) {

                time.push({
                    event_time:Moment(groupDate[dates[i]][j].event_time,"hh:mm A").format('hh:mm A') ,
                    event_type: groupDate[dates[i]][j].event_type,
                    event_id: groupDate[dates[i]][j].event_id,
                    ort_id: groupDate[dates[i]][j].ort_id,
                    ort_name: groupDate[dates[i]][j].ort_name,
                })
              }
        }
         this.setState({
             event_date:Moment(dates[0],"YYYY MM DD").format('dddd, DD MMMM YYYY'),
             timearray:time,
             movname: movies[0].event_name,
             movieimg: movies[0].POSTER,
             rating: movies[0].RATING,
             genre: movies[0].GENRE,
             cast: movies[0].STARCAST,
         })    
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('moviename',null),
        drawerLabel: navigation.getParam('moviename',null),
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
            fontFamily:LucidaHandwritingItalic,
            fontWeight:'normal',
          },
        headerLeft: (
            <TouchableOpacity
            onPress = { ()=>navigation.navigate('PREVIEW') }
            >
                <Icon
                name = 'md-arrow-back'
                style={{ marginLeft: 20, fontSize: 30, color: colors.white}}
                ></Icon>
            </TouchableOpacity>
        ),
      })

      goToMap = (eventid,ortid,date,time,ortname) =>{
          this.props.navigation.navigate('MAP',{
              eventsid: eventid,
              mname: this.state.movname,
              ortsid: ortid,
              edate: date,
              etime: time,
              oname: ortname
          })
      }
      
      showtype=(type)=>{
          if( type == 'peak' ){
              return(
                  <Text style={ styles.txtpeak }>(Peak Show)</Text>
              )
          }
          else{
            return(
                <Text style={ styles.txtpeak }>(Non Peak Show)</Text>
            )
          }
      }
      
    
    render(){
        const { datas,movname,movieimg,rating,genre,cast, timearray, event_date } = this.state
        return(
            <View style={ styles.container }>
             {/* <Text style={styles.show}>Show</Text> */}
             <View style={styles.rowitems}>
               <Image style={ styles.img }
               source={{uri: movieimg}}
               ></Image>
               <View style = { styles.moviedetail }>
                   <Text style={styles.rowtitle}> {movname}</Text>
                   <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.rowendtitle}> Ratings:</Text>
                     <Rating stars={rating} style={styles.ratingview}/>
                   </View>
                   <Text style={ styles.rowendtitle }> Genres: {genre}</Text>
                   <Text style={{marginRight: 80,marginLeft: 5, fontFamily:LucidaHandwritingItalic,}}>{cast}</Text>
               </View>
            </View>
            <Text style={styles.showtime}>Show Times</Text>
            <Text style={ styles.txt }>Date: {event_date}</Text>
                       <View style={{height:timearray.length==1?'15%':timearray.length==2?'20%':timearray.length==3?'30%':'35%',width:'100%',flex:1,justifyContent:'center',position:'absolute',bottom:0}}>
                      <FlatList
                           data={timearray}
                           keyExtractor={ item=> item.event_id }
                           renderItem={({ item })=>(
                               <View style={ styles.horlistview }>
                               <TouchableOpacity
                               style={styles.peakview}
                               onPress= {()=> this.goToMap(item.event_id,item.ort_id,item.event_date,item.event_time,item.ort_name) }
                               >
                                       <Text style={ styles.txttime }>{item.event_time}</Text>
                                       { this.showtype(item.event_type) }
                                   </TouchableOpacity>
                                   {/* <Text style={ styles.txtpeak }>{item.event_type} Show</Text> */} 
                                   </View>
                           )}
                           >
                           </FlatList>
                           </View>     
            </View>
        )
    }
}