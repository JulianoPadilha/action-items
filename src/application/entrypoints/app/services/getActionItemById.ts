/* Utils */
import makeFetch from '../utils/makeFetch';

const getActionItemById = async (itemId: string) => {
  const fetch = new makeFetch();
  const response = await fetch.get(`http://localhost:8000/api/action-item/${itemId}`);
  return response;
}

export default getActionItemById;