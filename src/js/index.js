/*GLOBAL CONTROLLER*/
import { elements, renderLoader, clearLoader, clearData } from './models/base';
import PageLoad from './models/pageLoad';
import Search from './models/search';
import Item from './models/item';
import Like from './models/like';
import * as pageLoadView from './views/pageLoadView';
import * as searchView from './views/searchView';
import * as gifView from './views/gifView';
import * as likesView from './views/likesView';

//Page load
const state = {};
//ON PAGE LOAD
const getPageLoad = async () => {
  state.load = new PageLoad();
  //prepare UI,loading spinner,clear results
  clearData();
  renderLoader(elements.renderedInformationLoader);
  try {
    await state.load.getResults();
    //clear spinner and display it :)
    clearLoader();
    // console.log(state.load.results);
    pageLoadView.renderPageView(state.load.results);
  } catch (e) {
    alert(`Error processing GIF fetch ${e}`);
  }
};
window.addEventListener('load', getPageLoad);

// SEARCH
const search = async e => {
  e.preventDefault();
  if (elements.inputValue) {
    const query = searchView.getInput();
    console.log(query);
    state.search = new Search(query);
    console.log(state.search);
    //prepare UI,loading spinner,clear results
    clearData();
    renderLoader(elements.renderedInformationLoader);
    try {
      await state.search.findSearch();
      // console.log(state.search.results);
      //clear loading spinner
      searchView.clearField();
      clearLoader();
      searchView.renderUI(state.search.results);
    } catch (e) {
      alert(`something went terribly wrong ${e}`);
    }
  }
};

elements.form.addEventListener('submit', search);
//LIKES
const renderLikes = async e => {
  console.log(e.target.value);

  const val = e.target.closest('.a');
  // console.log('ok');
  console.log(val.href);

  const getItem = val.href;
  const getItem2 = getItem.split('#');
  const id = getItem2[1];
  console.log(id);
  e.preventDefault();
  if (!state.likes) state.likes = new Like();
  if (!state.likes.isLiked()) {
    state.gif = new Item(id);
    await state.gif.getItem();
    //toggle button
    likesView.toggleLikeBtn(true);
    console.log(state.gif.results[0].media[0].gif.url, state.gif.results[0].id);
    state.likes.addLikes(
      state.gif.results[0].media[0].gif.url,
      state.gif.results[0].id
    );
  } else {
    likesView.toggleLikeBtn(false);
    state.likes.deleteLikes(id);
  }
};
window.addEventListener('load', () => {
  state.likes = new Like();

  //restore likes
  state.likes.readStorage();

  console.log(state.likes);
  console.log(state.likes.likes);
});
const dispLike = () => {
  try {
    if (state.likes.likes) {
      console.log('were in business');
      //prep UI
      clearData();
      renderLoader();
      clearLoader();
      // likesView.renderLikes(state.likes.likes);
   state.likes.likes.map(curr=> likesView.renderLikes(curr))
    }
  } catch (e) {
    alert(`something went wrong ${e}`);
  }
};
elements.renderElements.addEventListener('click', e => {
  if (
    e.target.matches('.recipe__love, recipe__love *') ||
    e.target.matches('.a, .a *')
  ) {
    //render likes
    console.log('works');
    renderLikes(e);
  }
});
elements.like.addEventListener('click', dispLike);
//GET GIF
const getGif = async () => {
  const getId = window.location.hash;
  const id = getId.replace('#', '');
  console.log(id);
  if (id) {
    state.gif = new Item(id);

    //prepare UI,loading spinner,clear results
    clearData();
    renderLoader(elements.renderedInformationLoader);
    try {
      await state.gif.getItem();

      //clear loader
      clearLoader();
      console.log(state.gif.results);
      gifView.renderPageView(state.gif.results);
    } catch (e) {
      alert(`Something went terribly wrong ${e}`);
    }
  }
};
window.addEventListener('hashchange', getGif);
