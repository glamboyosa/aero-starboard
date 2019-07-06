import { elements } from '../models/base';

export const clearField = () => {
  const clearedInput = Array.from(
    document.querySelectorAll('.form__class--input')
  );
  clearedInput.forEach(curr => {
    curr.value = '';
  });
};
export const getInput = () => {
  return elements.inputValue.value;
};
// const createButtons = (type, page) => {
//   const markup = `
//     <button class="btn-inline results__btn--${type}" data-goto=${
//     type === 'prev' ? page - 1 : page + 1
//   }>
//       <svg class="search__icon">
//           <use href="img/icons.svg#icon-triangle-${
//             type === 'prev' ? 'left' : 'right'
//           }"></use>
//       </svg>
//       <span>${type === 'prev' ? page - 1 : page + 1}</span>
//   </button>
//     `;
// };
// export const renderButtons = (page, numResults, resPerPage) => {
//   const pages = Math.ceil(numResults / resPerPage);
//   let btn;
//   if (page === 1 && pages > 1) {
//     btn = createButtons(page, 'next');
//   } else if (page === pages && pages > 1) {
//     btn = createButtons(page, 'prev');
//   } else {
//   }
//   elements.renderElements.insertAdjacentHTML('beforeEnd', btn);
// };
const renderSearchResults = data => {
  const markup = `  
        <div class="search" >      
        <a href="#${data.id}" class="tooltip" >
            <img src="${
              data.media[0].gif.url
            }" title="Click through to GIF-only mode" class="gif__image"></img>
            <span class="tooltip-txt">GIF-only mode</span>
            </a>  
        <div class="row">   
               <div class="col span-1-of-2">
               <p class="find__gif"> <a href="${
                 data.media[0].gif.url
               }" class="find__gif--link">Find the GIF</a></p>
               </div>
                
               <div class ="col span-1-of-2">
               <a href="#${data.id}" class="a">
               <button class="recipe__love">
               <svg class="header__likes">    
               <use href="css/img/icons.svg#icon-heart-outlined"></use>
                </svg>
            </button>
               </a>
               
               </div>       
         </div>
        </div> 
        `;

  elements.renderElements.insertAdjacentHTML('beforeEnd', markup);
};
export const renderUI = (res, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  res.slice(start, end).forEach(renderSearchResults);
};
