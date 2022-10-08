const initialOther={
    isFetching:false,
    News:[]
}
 
export default (state=initialOther,action)=>{
  switch (action.type) {
      case 'Movie_Suggestion_Request':
        return{...state,isFetching:true}
      case 'Movie_Suggestion_Success':
        return{...state,isFetching:false}
      case 'Movie_Suggestion_Failed':
        return{...state,isFetching:false}
     case 'Set_Feedback_Request':
        return{...state,isFetching:true}
     case 'Set_Feedback_Success':
        return{...state,isFetching:false}
     case 'Set_Feedback_Failed':
        return{...state,isFetching:false}
     case 'Get_Announcement_Request':
        return{...state,isFetching:true}
     case 'Get_Announcement_Success':
        return{...state,isFetching:false,News:action.news}
     case 'Get_Announcement_Failed':
        return{...state,isFetching:false}
      default:
        return state;
  }
}