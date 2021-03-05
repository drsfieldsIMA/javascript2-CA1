export function renderBooks(json,favourites,container){


json.forEach(function (product) {
    
    let cssClass = "far";
    // does the product id exist in the favs array
    const doesObjectExist = favourites.find(function (fav) {

        return parseInt(fav.id) === product.id;
    })

    // if there is in the array, change the style of the i element
    if (doesObjectExist) {
        cssClass = "fa";
    }

            console.log("json Variable",product)    
            container.innerHTML += `<div class="col">
                                <div class="card">
                                <div class="card-body">                                    
                                    <h2>${product.title}</h2>
                                    <h3>${product.author}</h3>
                                    <div class="disc__container">
                                    <p class="book-disc">${product.summary}</p>
                                    </div>
                                    <i class="${cssClass} fa-heart" data-id="${product.id}"></i>
                                </div>
                                </div> 
                            </div>`;
                            
        });

    }