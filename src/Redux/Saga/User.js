import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';
import ToastHelper from '../../Utils/ToastHelper';
import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

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
        ToastHelper.show(error.message)
        yield put({type:'Fetch_Version_Failed'})
    }

}

function* doLogin(action) {
    try {
        let res= yield call(_get,action.url)
        console.log('user response : ',res)
        if (res.status == 'True') {
           AsyncStorage.setItem('User',JSON.stringify(res.user))
            ToastHelper.show(res.Message)
            yield put({type:'Login_Success',user:res.user})
            NavigationService.navigate('Main')
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Login_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
        yield put({type:'Login_Failed'})
    }

}

function* forgotPassword(action) {
    try {
        let res= yield call(_get,action.url)
        if (res.status == 'True') {
            ToastHelper.show(res.Message)
            yield put({type:'Forgot_Password_Success'})
            NavigationService.navigate('LoginsScreen')
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Forgot_Password_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
        yield put({type:'Forgot_Password_Failed'})
    }

}

function* changePassword(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('change password response : ',res)
        if (res.status == 'True') {
            ToastHelper.show(res.Message)
            yield put({type:'Change_Password_Success'})
            NavigationService.push('PERSONAL')
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Change_Password_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
        yield put({type:'Change_Password_Failed'})
    }

}

function* changeMobile(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('change mobile response : ',res)
        if (res.status == 'True') {
            ToastHelper.show(res.Message)
            yield put({type:'Change_Mobile_Success'})
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Change_Mobile_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
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