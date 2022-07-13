import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { _get, _post } from '../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

function* movieSuggestion(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('movie suggestion response : ',res)
        if (res.status == 'True') {
            Toast.show(res.Message)
            yield put({type:'Movie_Suggestion_Success'})
            action.navigation.push('SUGGESTION')
        }else{
            Toast.show(res.Message)
            yield put({type:'Movie_Suggestion_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Movie_Suggestion_Failed'})
    }

}

function* setFeedback(action) {
    try {
        let res= yield call(_get,action.url)
         console.log('feedback response : ',res)
        if (res.status == 'True') {
            Toast.show(res.Message)
            yield put({type:'Set_Feedback_Success'})
            action.navigation.push('FEEDBACK')
        }else{
            Toast.show(res.Message)
            yield put({type:'Set_Feedback_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
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
            Toast.show(res.Message)
            yield put({type:'Get_Announcement_Failed'}) 
        }
        
    } catch (error) {
        console.log('error : ',error.message) 
        Toast.show(error.message)
        yield put({type:'Get_Announcement_Failed'})
    }

}

export default function* otherSaga() {
    yield takeEvery('Movie_Suggestion_Request',movieSuggestion)
    yield takeEvery('Set_Feedback_Request',setFeedback)
    yield takeEvery('Get_Announcement_Request',getAnnouncement)
}