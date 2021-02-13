/* Utils */
import makeFetch from '../utils/makeFetch';

/* Config */
import baseURL from '../../../../../config';

const deleteActionItemById = async (itemId: string) => {
  const fetch = new makeFetch();
  const response = await fetch.delete(`${baseURL}/action-item/${itemId}`);
  return response;
}

export default deleteActionItemById;