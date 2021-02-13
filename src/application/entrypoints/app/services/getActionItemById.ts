/* Utils */
import makeFetch from '../utils/makeFetch';

/* Config */
import baseURL from '../../../../../config';

const getActionItemById = async (itemId: string) => {
  const fetch = new makeFetch();
  const response = await fetch.get(`${baseURL}/action-item/${itemId}`);
  return response;
}

export default getActionItemById;