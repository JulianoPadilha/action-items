/* Utils */
import makeFetch from '../utils/makeFetch';

const updateActionItem = async (data: any, itemId: string) => {
  const fetch = new makeFetch();
  const response = await fetch.put(`http://localhost:8000/action-item/${itemId}`, { 
    ...data, 
    creationDate: new Date() 
  });
  return response;
}

export default updateActionItem;