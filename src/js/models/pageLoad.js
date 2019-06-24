import axios from 'axios';
import { elements } from './base';
import { key } from './config';

export default class PageLoad {
  constructor() {}
  async getResults() {
    try {
      const res = await axios(
        `https://api.tenor.com/v1/trending?key=${key}&limit=10`
      );
      this.results = res.data.results;
      console.log(this.results);
    } catch (e) {
      alert(`Error getting GIF ${e}`);
    }
  }
}
