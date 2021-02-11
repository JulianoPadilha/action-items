/* Utils */
import makeFetch from '../utils/makeFetch';

const createActionItem = async (data: any) => {
  const fetch = new makeFetch();
  const response = await fetch.post('http://localhost:8000/api/action-item/', { 
    ...data, 
    creationDate: new Date() 
  });
  return response;
}

export default createActionItem;