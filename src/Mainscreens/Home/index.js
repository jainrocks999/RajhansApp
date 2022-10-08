import React from 'react';
import {View,Text,TouchableOpacity,FlatList,ScrollView,AppState,RefreshControl,Image} from 'react-native';
import styles from './Styles';
import colors from '../../Config/Colors';
import {Icon} from 'native-base';
import Moment from 'moment';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import HomeList from '../../Components/HomeList';
import HomeList1 from '../../Components/HomeList1';
import HomeList2 from '../../Components/HomeList2';
import DrawerHeader from '../../Components/DrawerHeader';
class Home extends React.Component{
  state = { 
    poster:'',
    name:[], 
    rating:'', 
    genre:'',
    response: [],
    Movies: [],
    CommingSoon:[],
    NowShowing:[],
    loading: false,
    enable_date: Moment(new Date()).format('YYYY-MM-DD'),
    enable_datetime:Moment(new Date()).format('HH:MM:SS'),
    poster:require('../../Images/rajhans_icon.png'),
    appState: AppState.currentState,
}



static navigationOptions = ({ navigation }) => ({
  headerTitle: 'Rajhans',
  drawerLabel: 'Rajhans',
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTitleStyle: {
    fontFamily:LucidaHandwritingItalic,
    fontWeight:'normal',
  },
  headerLeft: (
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      {/* <Icon name="md-menu"
        style={{ marginLeft: 20, fontSize: 30, color: colors.white}} /> */}
        <Image 
        style={{height:40,width:40, marginLeft: 7}} 
        source={require('../../Images/menu2.png')}/>
    </TouchableOpacity>
  ),
})

  UNSAFE_componentWillMount=()=>{

    this._getMovies();
    this._getMovies1();

  }

  _getMovies = () =>{
    this.props.dispatch({type:'Fetch_MovieDays_Request',url:'/eventday'})
  }
  _getMovies1 = () =>{
    this.props.dispatch({type:'Fetch_Recent_Request',url:'/homeapi'})
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  UNSAFE_componentWillReceiveProps=(nextProps)=>{
    if (nextProps.Days && nextProps.Days.length>0) {
      let movies=nextProps.Days
      let Movies=[]
      let days=[]
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].day) {
               let isDayexist=days.find(item=>{
                    return item == movies[i].day
               })
               if (isDayexist) {
                 
               } else {
                 days.push(movies[i].day)
                let daymovie =  movies.filter(function (en) {
                  return en.day === movies[i].day;
                  });
                  if (daymovie.length>0) {
                    Movies.push(daymovie)
                  }
               }
               
            }
        }

        this.setState({Movies:Movies})

    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // console.log('App has come to the foreground!');
      this._getMovies();
    }
    this.setState({appState: nextAppState});
  };
 
  render(){
      const {  Movies}= this.state;
      const CommingSoon=this.props.CommingSoon
      const NowShowing=this.props.NowShowing
    //  console.log('thisis is state movies',NowShowing);
      return(
        <View style={ {flex:1} }>
            <DrawerHeader
            title="Rajhans"
            />
          <View style={ styles.container }>
          {/* <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom:10}} refreshControl={
            <RefreshControl onRefresh={this._getMovies} refreshing={this.props.isFetching}/>
          }>
          <View style={{backgroundColor:colors.white,borderRadius: 6,marginTop:10}}>
          <Text style={{ color:'#ff0000', margin:5,fontFamily:LucidaHandwritingItalic, }}>Booking would commence 48 hours prior to the day of show at 1200 hrs and would be available till one and a half hour prior to each show.</Text>    
          </View>
          <FlatList
          data={Movies}
          renderItem={({item})=>(
            <HomeList movie={item} navigation={this.props.navigation}/>
          )}
          />

          </ScrollView>    */}
          <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom:10}} refreshControl={
            <RefreshControl onRefresh={this._getMovies1} refreshing={this.props.isFetching}/>
          }>
          <View style={{backgroundColor:colors.white,borderRadius: 6,marginTop:10}}>
          <Text style={{ color:'#ff0000', margin:5,fontFamily:LucidaHandwritingItalic, }}>Booking would commence 48 hours prior to the day of show at 1200 hrs and would be available till two hour prior to each show.</Text>    
          </View>
         {NowShowing.length>0 || CommingSoon.length>0? 
          <View>
         {NowShowing.length>0? <HomeList1 movie={NowShowing} navigation={this.props.navigation}/>:null}
          {CommingSoon.length>0?<HomeList2 movie={CommingSoon} navigation={this.props.navigation}/>:null}
          </View>
          :
         <View style={{alignItems:'center',justifyContent:'center',height:400}}>
         <Text style={{color:colors.black}}>There is no event right now. Please try later.</Text> 
         </View>
        
       
          }
          </ScrollView>   
          </View>
          </View>
          
      )
    }
}

const mapStateToProps=(state)=>{
  return{
    isFetching:state.Movie.isFetching,
    Days:state.Movie.Days,
    CommingSoon:state.Movie.commingSoon,
    NowShowing:state.Movie.NowShowing
  }
}
export default connect(mapStateToProps)(Home) 