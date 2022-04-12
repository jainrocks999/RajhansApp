import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';
import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

function* confirmBooking(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('confirm booking response : ',res)
        if (res.status === 'True') {
            Toast.show(res.Message)
           let order= yield call(_get,'/personalinfo?user_id='+action.userid)
           if (order) {
            yield put({type:'Order_History_Success',orders:order})
           }
            yield put({type:'Booking_Success'})

            NavigationService.navigate('CONFIRMBOOK',{
                    msg: res.Message
                })
           
        }else{
            Toast.show(res.Message)
            yield put({type:'Booking_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Booking_Failed'})
    }

}

function* cancelBooking(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('cancel booking response : ',res)
        if (res.success === true) {
            Toast.show(res.msg)
            yield put({type:'Cancel_Booking_Success'})

            NavigationService.navigate('HOME')
           
        }else{
            Toast.show(res.msg)
            yield put({type:'Cancel_Booking_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToasToasttHelper.show(error.message)
        yield put({type:'Cancel_Booking_Failed'})
    }

}

function* orderHistory(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('order history response : ',res)
        if (res) {
            yield put({type:'Order_History_Success',orders:res})
           
        }else{
            yield put({type:'Order_History_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Order_History_Failed'})
    }

}

function* fetchSeats(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('fetch seats response : ',res)
        if (res) {
           
            yield put({type:'Fetch_Seats_Success',seats:res.seatsDetails})
           
        }else{
            Toast.show(res.Message)
            yield put({type:'Fetch_Seats_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelToastper.show(error.message)
        yield put({type:'Fetch_Seats_Failed'})
    }

}

function* cancelSeat(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('cancel seat response : ',res)
        if (res.success === true) {
            Toast.show(res.msg)
             if (res.seatsDetails.length>0) {
           
                yield put({type:'Cancel_Seat_Success',seats:res.seatsDetails})
               
            }else{
                let orderres= yield call(_get,'/personalinfo?user_id='+action.userid)
                console.log('order response : ',orderres)
                if (orderres) {
                    yield put({type:'Order_History_Success',orders:orderres})
                    NavigationService.navigate('ORDER')
                }
               
            }
           
        }else{
            Toast.show(res.msg)
            yield put({type:'Cancel_Seat_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Cancel_Seat_Failed'})
    }

}

function* cancelSeats(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('cancel seats response : ',res)
        if (res.success === true) {
            
            let orderres= yield call(_get,'/personalinfo?user_id='+action.userid)
            console.log('order response : ',orderres)
            if (orderres) {
                yield put({type:'Order_History_Success',orders:orderres})
                NavigationService.navigate('ORDER')
            }
           
        }else{
            Toast.show(res.msg)
            yield put({type:'Cancel_Seats_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Cancel_Seats_Failed'})
    }

}

export default function* orderSaga() {
    yield takeEvery('Booking_Request',confirmBooking)
    yield takeEvery('Cancel_Booking_Request',cancelBooking)
    yield takeEvery('Order_History_Request',orderHistory)
    yield takeEvery('Fetch_Seats_Request',fetchSeats)
    yield takeEvery('Cancel_Seat_Request',cancelSeat)
    yield takeEvery('Cancel_Seats_Request',cancelSeats)
}
