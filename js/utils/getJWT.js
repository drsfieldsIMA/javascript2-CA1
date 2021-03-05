import displayMessage from "../components/common/displayMessage.js";
import { saveToken, saveUser } from "./storage.js";
import { baseUrl } from "../settings/api.js";

export function doLogin(username, password) {
    getJWT(username, password);
}

async function getJWT(username, password) {
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password});

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json(); 
    //    console.log("json__",json);

        if (json.jwt) {
            displayMessage("success", "Successfully logged in", ".message-container");
            // console.log(json.jwt);
            saveToken(json.jwt);
            // console.log("json-name",json.user.username);
            saveUser(json.user);

            setTimeout(() => { location.href = "/"; }, 800);
        } else  {
            displayMessage("warning",  "check your password and login details", ".message-container");
        };

        // console.log(json);
    } catch (error) {
        displayMessage("error",  "looks like a bad wifi connection", ".message-container");
    }
}
