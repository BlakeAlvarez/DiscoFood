import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBaJmGl7QLJTiJ6ZnkKNCbfo-qT_Qagymk",
    authDomain: "discofood-15766.firebaseapp.com",
    databaseURL: "https://discofood-15766-default-rtdb.firebaseio.com",
    projectId: "discofood-15766",
    storageBucket: "discofood-15766.appspot.com",
    messagingSenderId: "565478487661",
    appId: "1:565478487661:web:d637e95ba31fec81767164",
    measurementId: "G-VVER4EJNW2"
  };
const app = initializeApp(firebaseConfig);



// function writeUserData(name, email, username, password) {
//   const db = getDatabase();
//   userId = Object.keys(users).length+1;
//   var type="user";
//   set(ref(db, 'users/' + userId), {
//     User_Name: name,
//     User_Email: email,
//     User_Type : type,
//     User_Username : username,
//     User_Password : password
//   });
// }

// document.getElementById("register").addEventListener("click", ()=>{
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   writeUserData(name, email, username, password);
//   location.href = "index.html";
//   alert("Successful registration");
  
// });