import { getExistingFavs } from "./components/common/favFunctions.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import {getToken,saveUser,getUsername,clearStorage} from "./utils/storage.js"
import { clickFunctions } from "./components/common/clickFunctions.js";
import {renderBooks} from "./utils/renderBooks.js";
import {searchAuthors} from "./utils/searchAuthors.js";

// const token = getToken();

// if (!token) {
//     location.href = "/login.html";
// }

const productsUrl = baseUrl + "articles";

console.log(productsUrl)
createMenu();
const container = document.querySelector(".product-container");

async function getbookItems(container) {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log("json Variable",json)
        container.innerHTML = "";

        const favourites = getExistingFavs();    
//<a class="product" href="detail.html?id=${product.id}"></a>
           renderBooks(json,favourites,container)

           const search = document.querySelector(".search");
            


           searchAuthors(json, favourites, container)

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }

    const favButtons = document.querySelectorAll("i");
    //  Allow user interation for the user to put the items in a wishlist
    clickFunctions(favButtons);

};


const productContainer = document.querySelector(".product-container");
getbookItems(productContainer);

// After clicking reset change the placeholder
document.querySelector(".reset").addEventListener("click", (event) => document.getElementById("search").value = 'Input your author');
// After clicking reset (back to the starting array) re-do the HTML rendering from the beginning 
document.querySelector(".reset").addEventListener("click", (event) => { getbookItems(productContainer); });
// After clicking reset clear the local storage
document.querySelector(".reset").addEventListener("click", (event) => { localStorage.clear();});
