import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';
import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

function* fetchDays(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('days response : ',res)
        if (res) {
            yield put({type:'Fetch_MovieDays_Success',days:res.commingsoon})
        }else{
            yield put({type:'Fetch_MovieDays_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Fetch_MovieDays_Failed'})
    }

}

function* fetchMovie(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('movie response : ',res)
        if (res) {
            var movieinfo =  res.allevents.filter(function (en) {
                return (en.event_name === action.moviename && en.event_date === action.moviedate) ;
                });
            yield put({type:'Fetch_Movie_Success',movie:movieinfo})
           
        }else{
            yield put({type:'Fetch_Movie_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Fetch_Movie_Failed'})
    }

}

function* addToCart(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('add cart response : ',res)
        if (res.orderdetail.status === 'True') {
           
            yield put({type:'Add_ToCart_Success',order:res})
            NavigationService.navigate('ORDERPAGE',{
                order_id: res.orderdetail.order_id,
                order_array: res.current_order_info,
                showcount: action.counts 
            })
           
        }else{
            yield put({type:'Add_ToCart_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Add_ToCart_Failed'})
    }

}

export default function* movieSaga() {
    yield takeEvery('Fetch_MovieDays_Request',fetchDays)
    yield takeEvery('Fetch_Movie_Request',fetchMovie)
    yield takeEvery('Add_ToCart_Request',addToCart)
}
