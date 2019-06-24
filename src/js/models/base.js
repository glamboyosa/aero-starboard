export const elements = {
  section: document.querySelector('.rendered__information'),
  renderedInformationLoader: document.querySelector(
    '.rendered__information-loader'
  ),
  renderElements: document.querySelector('.top__down'),
  btn: document.querySelector('.results__pages')
};
export const renderLoader = parent => {
  const markup = `
   <div class= "loader">
   <svg>
   <use href="css/img/icons.svg#icon-cw"></use>
   </svg>
   </div> 
 </div> 
   `;
  parent.insertAdjacentHTML('afterbegin', markup);
};
export const clearLoader = () => {
  const element = document.querySelector('.loader');
  element.parentElement.removeChild(element);
};
