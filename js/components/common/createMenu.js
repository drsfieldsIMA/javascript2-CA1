import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();



    // let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    let authLink= `<li class="breadcrumb-item" aria-current="page"><a href="login.html" class="${pathname === "/login.html" ? " menu active" : "menu"}">Login</a></li>`;
    
    if (username) {
        authLink = `<button id="logout">Logout ${username}</button>`;
    }
  //  console.log(username);

    // container.innerHTML = `<div class="menu">
    //                             <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
    //                             ${authLink}
    //                     </div>`;


container.innerHTML = `<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                ${authLink}    
                                <li class="breadcrumb-item"><a href="/" class="${pathname === "/" ? "active menu" : "menu"}">Home</a></li>
                                <li class="breadcrumb-item"><a href="./favourites.html">Favourites</a></li>
                                </ol>
                            </nav>`;

                            logoutButton();
}