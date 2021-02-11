/* Utils */
import makeFetch from '../utils/makeFetch';

const getAllActionItems = async () => {
  const fetch = new makeFetch();
  const response = await fetch.get('http://localhost:8000/action-item/');
  return response;
}

export default getAllActionItems;