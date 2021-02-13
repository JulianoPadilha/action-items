/* Utils */
import makeFetch from '../utils/makeFetch';

/* Config */
import baseURL from '../../../../../config';

const getAllActionItems = async () => {
  const fetch = new makeFetch();
  const response = await fetch.get(`${baseURL}/action-item/`);
  return response;
}

export default getAllActionItems;