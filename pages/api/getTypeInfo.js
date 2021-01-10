import axios       from 'axios';
import servicePath from '../../config/apiUrl';

export default async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getTypeInfo).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })
  return await promise
}
