import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, onValue, set} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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


  

function writeUserData() {
  //var usersTable = firebase.database().ref('Users');
  // var userId = Object.keys(db.Users).length+1;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  const postListRef = ref(db, 'Users/'); //Potential Solution 1
  const newPostRef = push(postListRef);
  set(newPostRef, {
    User_Email: email,
    User_Name: name,
    User_Password: password,
    User_Username: username
  })
  .then(()=>{
    location.href = "index.html";
    alert("Successful registration");
    const key = newPostRef.key
    alert("Welcome " + name+"!" +"Your key is: " + key); //Test Statement, I will delete/modify this statement later

  })
  .catch((error)=>{
    alert("ERROR:Unsuccessful registration");
  });

}


document.getElementById("register").addEventListener('click', ()=>{
  writeUserData();
});

