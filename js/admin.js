import { database } from "./firebase.mjs";
import {
  get,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Fetch appointments from the database
function fetchAppointments() {
  const appointmentTableBody = document.getElementById("appointmentTableBody");

  const appointmentsRef = ref(database, "appointment");
  get(appointmentsRef)
    .then((snapshot) => {
      snapshot.forEach((appointmentSnapshot) => {
        const appointmentData = appointmentSnapshot.val();

        const row = document.createElement("div");
        row.classList.add("item1");
        row.innerHTML = `
          <h3 class="t-op-nextlvl">${appointmentData.email}</h3>
          <h3 class="t-op-nextlvl">${appointmentData.pet_name}</h3>
          <h3 class="t-op-nextlvl">${appointmentData.phone}</h3>
          <h3 class="t-op-nextlvl">${appointmentData.appoint_date}</h3>
          <h3 class="t-op-nextlvl label-tag">${appointmentData.appoint_time}</h3>
        `;
        appointmentTableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching appointments:", error);
    });
}

// Call the function to fetch and display appointments
fetchAppointments();
