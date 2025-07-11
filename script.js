






import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
        apiKey: "AIzaSyBeGilXliVeLi3pKbYIwS6XLY7coYj1EiA",

        authDomain: "student-record-manager-30a63.firebaseapp.com",

        databaseURL: "https://student-record-manager-30a63-default-rtdb.firebaseio.com",

        projectId: "student-record-manager-30a63",

        storageBucket: "student-record-manager-30a63.firebasestorage.app",

        messagingSenderId: "918471798806",

        appId: "1:918471798806:web:ca854bde727a027daa8537",

        measurementId: "G-SMQ7NKQH6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form logic
const form = document.getElementById("userForm");
function submitBtnfn() {
//  e.preventDefault();

          const Name  = document.getElementById("nameId").value;
          const Batch = document.getElementById("batchId").value;
          const Age   = document.getElementById("ageId").value;
          const Score = document.getElementById("scoreId").value;


  const usersRef = ref(db, "users");
  const newUserRef = push(usersRef);

  set(newUserRef, {
    Name,
    Batch,
    Age,
    Score
  });


}
submitBtnfn()
 form.reset();