import React from 'react';
import { View,Text,TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import styles from './styles';
import {Icon} from 'native-base';
import colors from '../../Config/Colors';
import { LucidaHandwritingItalic } from '../../Config/constant';
import { connect } from 'react-redux';
import Loading from '../../Components/Loadings';
import Rating from '../../Components/Rating';
import Header from '../../Components/BackHeader';
class Preview extends React.Component{
    state = {
         name: '',
         poster: '',
         rating: '',
         starcast: '',
         genre: '',
         dataarray:[],
         video:'',
         description: '',
        }

        constructor(props){
          super(props)
          
          
        }
        
        
        UNSAFE_componentWillMount= async ()=>{
          
          console.log('props.route.paramssssssss : ',this.props.route.params);
       
       const {navigation}=this.props
       let moviename=this.props.route.params.moviename
       let moviedate=this.props.route.params.moviedate
        this.props.dispatch({type:'Fetch_Movie_Request',url:'/event',moviename,moviedate})

     }
 
   

      onTrailerGo =()=>{
          this.props.navigation.navigate('TrailerScreen', {
            namesparam: this.state.name,
            videourl:this.state.video
          });
      }

      onBookGo =()=>{
        this.props.navigation.push('BOOK',{
            moviename: this.state.name,
            moviearray: this.state.dataarray,
           });
      }


    componentWillReceiveProps=(nextProps)=>{
      console.log('nextProps : ',nextProps);
      if (nextProps.Movie && nextProps.Movie.length>0) {

         const movieinfo=nextProps.Movie

         this.setState({
            name:movieinfo[0].event_name,
            poster:movieinfo[0].POSTER,
            rating:movieinfo[0].RATING,
            starcast:movieinfo[0].STARCAST,
            description:movieinfo[0].DESCRIPTION,
            genre:movieinfo[0].GENRE,
            video:movieinfo[0].VIDEO,
            dataarray: movieinfo
         })
      }
    }

    render(){
      // console.log('this is a rating params',this.state.rating);
      if (this.props.isFetching) {
        return (
          <Loading/>
        )
      }
        return(
            <View style={ styles.container }>
                  <Header
            title='Movie Details'
            onPress = { ()=>this.props.navigation.navigate('HOME') }
            />
             
            <ScrollView>
            <View style={ styles.Ratingview }>
            <Image source={require('../../Images/flag.png')}style={{marginLeft:-10,marginRight:-10,marginBottom:-15}}></Image>
            <Text style={{fontSize:20,color:colors.Royal_blue,marginTop:14, 
              fontFamily:LucidaHandwritingItalic,}}>{this.state.name}</Text>
            </View>
            

             <View style={ [styles.Ratingview ,{marginLeft:5}]}>
               <Rating stars={this.state.rating>'5'?5:this.state.rating} 
               style={styles.ratingview}
               />
            <Text style={ styles.txtgenre }>| { this.state.genre }</Text>
            </View>
             <Text style={ styles.txtstar }>{ this.state.starcast }</Text>
                  
                 <TouchableOpacity onPress={ this.onTrailerGo }>
                  <View style={styles.imgview}>
                   <ImageBackground
                   source={{ uri:this.state.poster }}
                   style={ styles.img } ></ImageBackground>
                   <Image source={require('../../Images/youtube.png')}
                   style={{alignSelf:'flex-end',marginTop:-28,marginRight:-15}}></Image>
                   </View>
                   </TouchableOpacity>
                
                   <Text style={ styles.txtintro }>{ this.state.description }</Text>
                   </ScrollView>
                   <View style={{height:45}}></View>
                     <View style={styles.btnbookview}>
                     <TouchableOpacity onPress={ this.onBookGo }>
                     <View style={styles.btnbook}>
                     <Text style={ styles.btntxt }>Booking</Text>
                     </View>
                     </TouchableOpacity>
                     </View>
           
               
            </View>
            
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    isFetching:state.Movie.isFetching,
    Movie:state.Movie.Movie,
  }
}


export default connect(mapStateToProps)(Preview) 



