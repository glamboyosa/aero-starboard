import axios from 'axios';
import { secondKey } from './config';
export default class Search {
  constructor(query) {
    this.query = query;
  }
  async findSearch() {
    try {
      const res = await axios(
        `https://api.tenor.com/v1/search?q=${
          this.query
        }&key=${secondKey}&limit=20`
      );

      this.results = res.data.results;
      //console.log(this.results);
    } catch (e) {
      alert(`Error processing GIFs ${e}`);
    }
  }
}
