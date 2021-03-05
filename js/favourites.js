import { getExistingFavs } from "./components/common/favFunctions.js";
import  displayMessage  from "./components/common/displayMessage.js";

/////////////////////////////////////////////////////////////////////////////
// 1st part of this function  renders the HTML blocks for the wishlist (favourites) array
const favourites = getExistingFavs();

const productContainer = document.querySelector(".product-container");
// Check that the user has selected her/his favourite products
if (favourites.length === 0) {
    displayMessage("error", "No favourites yet", ".product-container");
}

favourites.forEach((favourite) => {
    productContainer.innerHTML += `<div class="col">
                                             <div class="card">
                                             <div class="card-body"> 
                                             <h2>Product ID: ${favourite.title}</h2>
                                             <h3>Name: ${favourite.author}</h3>
                                             <div class="disc__container">
                                             <p class="book-disc">${favourite.summary}</p>
                                             </div>
                                             <i class="fa fa-heart" data-id="${favourite.id}"></i>
                                    </div>
                                    </div> 
                                    </div>`;
});

// User Button to replace the icons <i class="heart"></i>
//<button class="${CSSclass} btn-primary" type="button" id="${favourite.id}">Add</button>