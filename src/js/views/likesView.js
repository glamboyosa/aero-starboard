import { elements } from '../models/base';
export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
  document
    .querySelector('.recipe__love use')
    .setAttribute('href', `css/img/icons.svg#${iconString}`);
};
const renderUI = data => {
  const markup = `  
          <div class="search" >      
          <a href="#${data.id}">
              <img src="${data.url}" class="gif__image"></img>
          </a>  
          <div class="row">   
                 <div class="col span-1-of-2">
                 <p class="find__gif"> <a href="${
                   data.url
                 }" class="find__gif--link">Find the GIF</a></p>
                 </div>
                  
                 <div class ="col span-1-of-2"">
                 <a href="#${data.id}">
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
export const renderLikes = likes => {
  likes.forEach(curr => console.log(curr));
  likes.forEach(renderUI);
};
