import { auth } from "./firebase.mjs";
import {
    sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Forgot-Password logic
const forgot_password = async (e) => {
    const email = document.getElementById("forgot_email").value;
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
        .then((data) => {
            console.log(data);
            window.location.href = "/html/login.html";
            alert("Reset-Password Email sent!");
        })
        .catch((err) => {
            alert("Something went wrong: " + err.code);
        });
};
document
    .getElementById("forgot_pswd_btn")
    .addEventListener("click", function (event) {
        forgot_password(event);
    });
