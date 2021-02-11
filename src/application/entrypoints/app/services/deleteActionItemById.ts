/* Utils */
import makeFetch from '../utils/makeFetch';

const deleteActionItemById = async (itemId: string) => {
  const fetch = new makeFetch();
  const response = await fetch.delete(`http://localhost:8000/api/action-item/${itemId}`);
  return response;
}

export default deleteActionItemById;