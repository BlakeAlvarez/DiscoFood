import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, onValue, set} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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
const db = getDatabase();

var Id = document.getElementById("ID");
var name = document.getElementById("name");
var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.getElementById("password");
var type="user";

function writeUserData() {
  //var usersTable = firebase.database().ref('Users');
  // var userId = Object.keys(db.Users).length+1;
  
  set(ref(db, "Users/"+ Id), {
    User_Email: email.value,
    User_ID: Id.value,
    User_Name: name.value,
    User_Password: password.value,
    // User_Type: type,
    User_Username: username.value
  })
  .then(()=>{
    location.href = "index.html";
    alert("Successful registration");
  })
  .catch((error)=>{
    alert("ERROR:Unsuccessful registration");
  });
}

document.getElementById("register").addEventListener('click', ()=>{
  writeUserData();
});