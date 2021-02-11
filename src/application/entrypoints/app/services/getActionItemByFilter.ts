/* Utils */
import makeFetch from '../utils/makeFetch';

const getActionItemByFilter = async (data: any) => {
  const fetch = new makeFetch();
  const response = await fetch.get(`http://localhost:8000/action-item/filter?search=${JSON.stringify(data)}`);
  return response;
}

export default getActionItemByFilter;