const initialAuth={
    isFetching:false,
    User:null,
    iosversion:'',
    androidversion:''
}

export default (state=initialAuth,action)=>{
  switch (action.type) {
      case 'Login_Request':
        return{...state,isFetching:true}
      case 'Login_Success':
        return{...state,isFetching:false,User:action.user}
      case 'Login_Failed':
        return{...state,isFetching:false}
      case 'Fetch_Version_Request':
        return{...state,isFetching:true}
      case 'Fetch_Version_Success':
        return{...state,isFetching:false,iosversion:action.iosversion,androidversion:action.androidversion}
      case 'Fetch_Version_Failed':
        return{...state,isFetching:false}
      case 'Forgot_Password_Request':
        return{...state,isFetching:true}
      case 'Forgot_Password_Success':
        return{...state,isFetching:false}
      case 'Forgot_Password_Failed':
        return{...state,isFetching:false}
      case 'Change_Password_Request':
        return{...state,isFetching:true}
      case 'Change_Password_Success':
        return{...state,isFetching:false}
      case 'Change_Password_Failed':
        return{...state,isFetching:false}
      default:
        return state;
  }
}