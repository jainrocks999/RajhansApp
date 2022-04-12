import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';
import ToastHelper from '../../Utils/ToastHelper';
import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

function* movieSuggestion(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('movie suggestion response : ',res)
        if (res.status == 'True') {
            ToastHelper.show(res.Message)
            yield put({type:'Movie_Suggestion_Success'})
            NavigationService.push('SUGGESTION')
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Movie_Suggestion_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
        yield put({type:'Movie_Suggestion_Failed'})
    }

}

function* setFeedback(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('feedback response : ',res)
        if (res.status == 'True') {
            ToastHelper.show(res.Message)
            yield put({type:'Set_Feedback_Success'})
            NavigationService.push('FEEDBACK')
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Set_Feedback_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
        yield put({type:'Set_Feedback_Failed'})
    }

}

function* getAnnouncement(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('announcement response : ',res)
        if (res) {
            yield put({type:'Get_Announcement_Success',news:res})
        }else{
            ToastHelper.show(res.Message)
            yield put({type:'Get_Announcement_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        ToastHelper.show(error.message)
        yield put({type:'Get_Announcement_Failed'})
    }

}

export default function* otherSaga() {
    yield takeEvery('Movie_Suggestion_Request',movieSuggestion)
    yield takeEvery('Set_Feedback_Request',setFeedback)
    yield takeEvery('Get_Announcement_Request',getAnnouncement)
}