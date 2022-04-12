import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';
import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
// import firebase from 'react-native-firebase';

function* fetchVersion(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('version response : ',res)
        if (res) {
            yield put({type:'Fetch_Version_Success',iosversion:res.iosversion,androidversion:res.androidversion})
        }else{
            yield put({type:'Fetch_Version_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Fetch_Version_Failed'})
    }

}

function* doLogin(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('user response : ',res)
        if (res.status == 'True') {
            // let fcmtoken = yield firebase.messaging().getToken();
            // console.log('fcmtoken : ',fcmtoken)
            // let notfres= yield call(_get,'/firebase_notification?notification_id='+fcmtoken+'&user_id='+res.user.user_id)
            // console.log('notification response : ',notfres)
            AsyncStorage.setItem('User',JSON.stringify(res.user))
            Toast.show(res.Message)
            yield put({type:'Login_Success',user:res.user})
            NavigationService.navigate('Main')
        }else{
            Toast.show(res.Message)
            yield put({type:'Login_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Login_Failed'})
    }

}

function* forgotPassword(action) {
    try {
        let res= yield call(_get,action.url)
        if (res.status == 'True') {
            Toast.show(res.Message)
            yield put({type:'Forgot_Password_Success'})
            NavigationService.navigate('LoginsScreen')
        }else{
            Toast.show(res.Message)
            yield put({type:'Forgot_Password_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Forgot_Password_Failed'})
    }

}

export default function* authSaga() {
    yield takeEvery('Fetch_Version_Request',fetchVersion)
    yield takeEvery('Login_Request',doLogin)
    yield takeEvery('Forgot_Password_Request',forgotPassword)
}