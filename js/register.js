import { auth, database } from "./firebase.mjs";
import {
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Registration logic here
async function register(event) {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  // const phone = document.getElementById("register_phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pswd").value;
  const confimrPassword = document.getElementById("confirmPswd").value;

  event.preventDefault();

  if (password !== confimrPassword) {
    return alert("miss match password")
  }
  try {
    const authData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await set(ref(database, `users/${authData.user.uid}`), {
      username: `${firstname} ${lastname}`,
      email,
      password,
    });
    window.location.href = "/html/login.html";
    alert("Registration Successful!");
  } catch (error) {
    console.error("Registration error:", error.message);
    alert(error.code);
  }
}

document
  .getElementById("register_btn")
  .addEventListener("click", function (event) {
    register(event);
  });
