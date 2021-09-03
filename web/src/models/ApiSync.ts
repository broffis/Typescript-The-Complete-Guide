import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number
}

export class ApiSync<T extends HasId> {
  constructor(public rooUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rooUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rooUrl}/${id}`, data)
    } else {
      return axios.post(`${this.rooUrl}/`, data)
    }
  }
}