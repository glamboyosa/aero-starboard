/*GLOBAL CONTROLLER*/
import { elements, renderLoader, clearLoader } from './models/base';
import PageLoad from './models/pageLoad';
import * as pageLoadView from './views/pageLoadView';
//Page load
const state = {};

const getPageLoad = async () => {
  state.load = new PageLoad();
  //prepare UI,loading spinner,clear results
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
