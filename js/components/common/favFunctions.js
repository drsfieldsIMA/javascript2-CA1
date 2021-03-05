export function getExistingFavs() {
    const favs = localStorage.getItem("favourites");
    /////////////////////////////////////////////////////////////////////////////
    // Returns the wishlist array
    if (favs === null) {
        return [];
    } else {
        return JSON.parse(favs);
    }
}