    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
    import { getDatabase, ref, set, get, update, remove, onValue } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyApK1SCNpMz80Z9ZT3qI-MxbMApIQHoUBc",
    authDomain: "book1-eade2.firebaseapp.com",
    databaseURL: "https://book1-eade2-default-rtdb.firebaseio.com",
    projectId: "book1-eade2",
    storageBucket: "book1-eade2.firebasestorage.app",
    messagingSenderId: "887259355426",
    appId: "1:887259355426:web:f8ece3bf36f5ae6886ed7b",
    measurementId: "G-0L932367MS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);




window.SignUpBTN = function SignUpBTN(event) {
  event.preventDefault();
  let Username = document.getElementById("nameId").value;
  let Email = document.getElementById("emailId").value;
  let Password = document.getElementById("passwordId").value;

  createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      const user = userCredential.user;

//      // Optional: Save user info to Realtime Database
//      set(ref(db, "users/" + user.uid), {
//        username: Username,
//        email: Email
//      });

      alert("Registration Successful! Please log in.");
      window.location.href = "Login.html";
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
};


window.LoginBTN = function LoginBTN(event) {
 event.preventDefault();
  let Email = document.getElementById("logemailId").value;
  let Password = document.getElementById("logpwsdId").value;

  signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {

      const user = userCredential.user;
      const uid = user.uid;

      alert("Login Successful! Redirecting...");
      window.location.href = "BokTrackerscrn.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};




window.logoutBTNfn = function logoutBTNfn(event) {
  event.preventDefault();

  sessionStorage.removeItem("user");
  sessionStorage.removeItem("uid");
  sessionStorage.removeItem("token");

  window.location.href = "Login.html";
};




