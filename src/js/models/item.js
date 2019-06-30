import axios from 'axios';
import { elements } from './base';
import { key } from './config';

export default class Item {
  constructor(id) {
    this.id = id;
  }
  async getItem() {
    try {
      const res = await axios(
        `https://api.tenor.com/v1/gifs?ids=${this.id}&key=${key}`
      );
      this.results = res.data.results;
      console.log(this.results);
    } catch (e) {
      alert(`Something went wrong ${e}`);
    }
  }
}
