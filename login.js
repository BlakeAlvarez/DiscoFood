import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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
const dbcheck = ref(db);
document.getElementById("SignIn").addEventListener('click',checkUser);

function checkUser(){
 
var inputusername = document.getElementById("InputUsername").value.trim();
var inputpassword = document.getElementById("InputPassword").value.trim();
var found;
  onValue(dbcheck, (snapshot) => {
    const data = snapshot.val(); //Data is string array
    
    for(let x in data.Users){
     
        if((data.Users[x].User_Username == inputusername) && (data.Users[x].User_Password == inputpassword))
        {
          
        
          found=true;
          break;
        }
        else
        {
          found=false;
        }
        
    }
    if(found==true){
    alert("Welcome back " + inputusername+"!");
    sessionStorage.setItem("LOGGED_IN","true");
    sessionStorage.setItem("USER",inputusername);
    window.location.replace("index.html");
    }
    else
    alert("User Not found, Please try Again"); //TEST Statement
  
  });
}