import axios from 'axios';
import { elements } from './base';
import { key } from './config';
export default class Like {
  constructor() {
    this.likes = [];
  }
  addLikes(url, id) {
    const like = {
      url,
      id
    };
    this.likes.push(like);
    this.persistLikes();
    return like;
  }
  deleteLikes(id) {
    const index = this.likes.findIndex(el => el.id === id);
    this.likes.splice(index, 1);
    this.persistLikes();
  }
  persistLikes() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }
  readStorage() {
    const storage = JSON.parse(localStorage.getItem('likes'));
    if (storage) this.likes = storage;
  }

  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }
}
