/* Types */
import { ActionItem } from '../types/ActionItem';

/* Utils */
import makeFetch from '../utils/makeFetch';

/* Config */
import baseURL from '../../../../../config';

const updateActionItem = async (data: ActionItem, itemId: string) => {
  const fetch = new makeFetch();
  const response = await fetch.put(`${baseURL}/action-item/${itemId}`, { 
    ...data, 
    creationDate: new Date() 
  });
  return response;
}

export default updateActionItem;