import { getExistingFavs } from "./favFunctions.js";

/////////////////////////////////////////////////////////////////////////////
// 1st part of this function pushes the selected wish list items to a new array called favourites
// in local storage after user interations (the click event)
export function clickFunctions(favButtons) {

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}

function handleClick() {
/////////////////////////////////////////////////////////////////////////////
    // this function processess user interaction
    this.classList.toggle("fa");
    this.classList.toggle("far");


    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;

    const currentFavs = getExistingFavs();

    /////////////////////////////////////////////////////////////////////////////
    // this part checks that the user has selected her/his favourites previously
    // Avoid multiple enteries into the favourites array for a single item
    const productExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, name: name, price: price };
        currentFavs.push(product);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }
}
///////////////////////////////////////////////////////////////
//This function uploads or saves the favourites into the local 
//storage
function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}