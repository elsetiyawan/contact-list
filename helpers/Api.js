import axios from 'axios';
import {API_URL} from '@env';

export default class Api {
  constructor() {
    this.api_url = API_URL;
    this.client = null;
  }

  init = () => {
    const headers = {
      Accept: 'application/json',
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });
    return this.client;
  };

  getAllContact = () => {
    return this.init().get('/contact');
  };

  getSingleContact = id => {
    return this.init().get(`/contact/${id}`);
  };

  updateContact = (id, payload) => {
    return this.init().put(`/contact/${id}`, payload);
  };

  createContact = payload => {
    return this.init().post('/contact', payload);
  };

  deleteContact = id => {
    return this.init().delete(`/contact/${id}`);
  };
}
