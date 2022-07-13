import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-simple-toast";
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
        console.log('action of user',action);
        let res= yield call(_get,action.url)
        console.log('user response : ',res)
        if (res.status == 'True') {
           AsyncStorage.setItem('User',JSON.stringify(res.user))
            Toast.show(res.Message)
            yield put({type:'Login_Success',user:res.user})
            action.navigation.navigate('Main')
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
            action.navigation.navigate('Login')
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

function* changePassword(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('change password response : ',res)
        if (res.status == 'True') {
            Toast.show(res.Message)
            yield put({type:'Change_Password_Success'})
            action.navigation.push('PERSONAL')
        }else{
            Toast.show(res.Message)
            yield put({type:'Change_Password_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Change_Password_Failed'})
    }

}

function* changeMobile(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('change mobile response : ',res)
        if (res.status == 'True') {
            Toast.show(res.Message)
            yield put({type:'Change_Mobile_Success'})
        }else{
            Toast.show(res.Message)
            yield put({type:'Change_Mobile_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Change_Mobile_Failed'})
    }

}

export default function* userSaga() {
    yield takeEvery('Fetch_Version_Request',fetchVersion)
    yield takeEvery('Login_Request',doLogin)
    yield takeEvery('Forgot_Password_Request',forgotPassword)
    yield takeEvery('Change_Password_Request',changePassword)
    yield takeEvery('Change_Mobile_Request',changeMobile)
}