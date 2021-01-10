import axios       from 'axios';
import servicePath from '../../config/apiUrl';

export default async (ctx)=>{
  let id = ctx.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById + id).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })
  return await promise
}
