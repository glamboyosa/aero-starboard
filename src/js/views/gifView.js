import { elements } from '../models/base';
const renderUI = data => {
  console.log(data.media[0]);
  const markup = `  
        <div class="search" >      
        <a href="#${data.id}">
            <img src="${data.media[0].gif.url}" class="gif__image"></img>
        </a>  
        <div class="row">   
               <div class="col span-1-of-2">
               <p class="find__gif"> <a href="${
                 data.media[0].gif.url
               }" class="find__gif--link">Find the GIF</a></p>
               </div>
                
               <div class ="col span-1-of-2">
               <a href="#${data.id}" >
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

export const renderPageView = data => {
  data.forEach(renderUI);
};
