/* Utils */
import makeFetch from '../utils/makeFetch';

/* Config */
import baseURL from '../../../../../config';

const createActionItem = async (data: any) => {
  const fetch = new makeFetch();
  const response = await fetch.post(`${baseURL}/action-item/`, { 
    ...data, 
    creationDate: new Date() 
  });
  return response;
}

export default createActionItem;