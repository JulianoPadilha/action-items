/* Entities */
import { ActionItem } from '../types/ActionItem';

class makeFetch {
  async get(url: string): Promise<ActionItem> {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();
  }

  async post(url: string, data: ActionItem): Promise<ActionItem> {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async put(url: string, data: ActionItem): Promise<ActionItem> {
    const response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async delete(url: string): Promise<ActionItem> {
    const response = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
    });
    return response.json();
  }
}

export default makeFetch;