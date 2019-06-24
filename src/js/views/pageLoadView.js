import { elements } from '../models/base';
const renderUI = data => {
  console.log(data.media[0]);
  const markup = `  
        <div class="search" >      
        <a href="#${data.id}">
            <img src="${data.media[0].gif.url}" class="gif__image"></img>
        </a>  
        <div class="row"> 
        
                <p class="find__gif"> <a href="${
                  data.media[0].gif.url
                }" class="find__gif--link">Find the GIF</a></p>
         
                 <button class="recipe__love">
                <svg class="header__likes">
                     <use href="css/img/icons.svg#icon-heart-outlined"></use>
                 </svg>
             </button>
                      
         </div>
        </div> 
        `;

  elements.renderElements.insertAdjacentHTML('beforeEnd', markup);
};
export const clearData = () => {
  elements.renderElements.innerHTML = '';
};
export const renderPageView = data => {
  data.forEach(renderUI);
};
