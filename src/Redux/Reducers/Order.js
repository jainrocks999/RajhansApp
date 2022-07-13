const initialOrder={
    isFetching:false,
    Orders:[],
    Seats:[]
}

export default (state=initialOrder,action)=>{
  switch (action.type) {
      case 'Booking_Request':
        return{...state,isFetching:true}
      case 'Booking_Success':
        return{...state,isFetching:false}
      case 'Booking_Failed':
        return{...state,isFetching:false}
      case 'Cancel_Booking_Request':
        return{...state,isFetching:true}
      case 'Cancel_Booking_Success':
        return{...state,isFetching:false}
      case 'Cancel_Booking_Failed':
        return{...state,isFetching:false}
      case 'Order_History_Request':
        return{...state,isFetching:true}
      case 'Order_History_Success':
        return{...state,isFetching:false,Orders:action.orders}
      case 'Order_History_Failed':
        return{...state,isFetching:false}
      case 'Fetch_Seats_Request':
        return{...state,isFetching:true}
      case 'Fetch_Seats_Success':
        return{...state,isFetching:false,Seats:action.seats}
      case 'Fetch_Seats_Failed':
        return{...state,isFetching:false}
      case 'Cancel_Seat_Request':
        return{...state,isFetching:true}
      case 'Cancel_Seat_Success':
        return{...state,isFetching:false,Seats:action.seats}
      case 'Cancel_Seat_Failed':
        return{...state,isFetching:false}
      case 'Cancel_Seats_Request':
        return{...state,isFetching:true}
      case 'Cancel_Seats_Success':
        return{...state,isFetching:false,Seats:action.seats}
      case 'Cancel_Seats_Failed':
        return{...state,isFetching:false}
     
      default:
        return state;
  }
}