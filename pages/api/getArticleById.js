import axios from 'axios';
import  servicePath  from '../../config/apiUrl'

export default async (context) => {

    console.log(context.query.id);
    let id        = context.query.id;
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleById + id).then(
          (res) => {
              resolve(res.data.data[0]);
          }
        );
    });

    return await promise;
}
