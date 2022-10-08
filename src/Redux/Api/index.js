import Axios from '../Axios';

export const _get=async(url)=>{
    console.log('Connecting url : ',url);
    let res=await Axios({
        method:'GET',
        url:url
    })
    return res.data;
}

export const _post=async(url,data)=>{
   let res=await Axios({
       method:'POST',
       url:url,
       data:data
   })
   return res.data;
}