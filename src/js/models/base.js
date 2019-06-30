export const elements = {
  section: document.querySelector('.rendered__information'),
  renderedInformationLoader: document.querySelector(
    '.rendered__information-loader'
  ),
  form: document.querySelector('.form__class'),
  inputValue: document.querySelector('.form__class--input'),
  renderElements: document.querySelector('.top__down'),
  btn: document.querySelector('.results__pages'),
  like: document.querySelector('.like')
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
export const clearData = () => {
  elements.renderElements.innerHTML = '';
};
