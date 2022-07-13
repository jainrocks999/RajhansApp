const initialMovie={
    isFetching:false,
    Days:[],
    Movie:[],
    Oreder:null,
    commingSoon:[],
    NowShowing:[]

}

export default (state=initialMovie,action)=>{
  switch (action.type) {
      case 'Fetch_MovieDays_Request':
        return{...state,isFetching:true}
      case 'Fetch_MovieDays_Success':
        return{...state,isFetching:false,Days:action.days}
      case 'Fetch_MovieDays_Failed':
        return{...state,isFetching:false}

      case 'Fetch_Recent_Request':
        return{...state,isFetching:true}
      case 'Fetch_Recent_Success':
        return{...state,isFetching:false,commingSoon:action.commingSoon,NowShowing:action.nowShowing}
      case 'Fetch_Recent_Failed':
        return{...state,isFetching:false}

      case 'Fetch_Movie_Request':
        return{...state,isFetching:true}
      case 'Fetch_Movie_Success':
        return{...state,isFetching:false,Movie:action.movie}
      case 'Fetch_Movie_Failed':
        return{...state,isFetching:false}
      case 'Add_ToCart_Request':
        return{...state,isFetching:true}
      case 'Add_ToCart_Success':
        return{...state,isFetching:false,Oreder:action.order}
      case 'Add_ToCart_Failed':
        return{...state,isFetching:false}
      default:
        return state;
  }
}