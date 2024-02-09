import { auth } from "./firebase.mjs";
import {
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// login logic
function login(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pswd").value;
    event.preventDefault();
    // console.log("clicked");

    signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log("user: ", user);
            window.location.href = "/html/index.html";
            alert("Login Successful! " + email);
        })
        .catch((error) => {
            console.log(error.code);
            alert("Login error: ", error.message);
        });
}

document
    .getElementById("login_btn")
    .addEventListener("click", function (event) {
        login(event);
    });