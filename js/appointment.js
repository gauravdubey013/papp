import { database, auth } from "./firebase.mjs";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Registration logic here
async function appointment(event) {
  const pet_name = document.getElementById("pet_name").value;
  const phone = document.getElementById("phone").value;
  const appoint_date = document.getElementById("appoint_date").value;
  const appoint_time = document.getElementById("appoint_time").value;
  const currentDate = new Date();
  const selectedDate = new Date(appoint_date);

  event.preventDefault();

  if (selectedDate < currentDate) {
    alert("Please select a future date for the appointment.");
    return;
  }

  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const authUid = user?.uid;
        const email = user?.email;

        const appointmentRef = ref(database, `/appointment`);
        const snapshot = await get(appointmentRef);

        if (snapshot.exists()) {
          const appointments = snapshot.val();

          for (const key in appointments) {
            if (
              appointments[key].appoint_date === appoint_date &&
              appointments[key].appoint_time === appoint_time
            ) {
              alert(
                "Appointment date and time are already set for another user. Please choose a different date or time."
              );
              return;
            }
          }
        }
        await set(ref(database, `/appointment/${authUid}`), {
          email,
          pet_name,
          phone,
          appoint_date,
          appoint_time,
        });
        alert("Appointment Successful!");
      }
    });
  } catch (error) {
    console.log("User is logged out");
    alert(error.code);
  }
}

document
  .getElementById("appoint_btn")
  .addEventListener("click", function (event) {
    appointment(event);
  });
