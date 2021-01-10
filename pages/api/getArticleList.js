import axios from 'axios';
import  servicePath  from '../../config/apiUrl'
export default async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}
