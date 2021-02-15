/* Utils */
import makeFetch from '../utils/makeFetch';

/* Config */
import baseURL from '../../../../../config';

const getActionItemByFilter = async (data: unknown) => {
  const fetch = new makeFetch();
  const response = await fetch.get(`${baseURL}/action-item/filter?search=${JSON.stringify(data)}`);
  return response;
}

export default getActionItemByFilter;