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





var validUsername = true;
var validsubmission = false;
//sessionStorage.setItem("LOGGED_IN", "true"); //TEST LOCATION
const reg = ref(db);
document.getElementById("username").addEventListener('change',checkUserName);
function checkUserName(){
  validUsername = true;
  var errorcheck = document.getElementById("UserTaken");
  errorcheck.style.display='none';
  var username = document.getElementById("username").value;

  onValue(reg, (snapshot) => {
    const data = snapshot.val(); //Data is string array
    
    for(let x in data.Users){
      if(validsubmission==true){
        errorcheck.style.display='none';
        break;
      }
        if(data.Users[x].User_Username == username)
        {
          
          var errorcheck2 = document.getElementById("UsernameFieldBlank");
          errorcheck2.style.display='none';
          errorcheck.style.display='block';
          validUsername = false;
          break;
        }
        else
        {
          errorcheck.style.display='none';
          validUsername=true;
        }
        
    }
  
  });
}


document.getElementById("register").addEventListener('click',writeUserData);
function writeUserData() {
  //var usersTable = firebase.database().ref('Users');
  // var userId = Object.keys(db.Users).length+1;
var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var username = document.getElementById("username").value.trim();
var password = document.getElementById("password").value.trim();
  if ((name.length != 0) && (email.length!=0) && (username.length!=0) && (password.length!=0) && (validUsername ==true)){
      name =document.getElementById("name").value.split(" ").join('');
      email =document.getElementById("email").value.split(" ").join('');
      username =document.getElementById("username").value.split(" ").join('');
      password =document.getElementById("password").value.split(" ").join('');
      validsubmission=true;
      sessionStorage.setItem("LOGGED_IN", "true");
      sessionStorage.setItem("USER",username);
      const postListRef = ref(db, 'Users/' + username); //Potential Solution 1
      const newPostRef = push(postListRef);
      set(newPostRef, {
        User_Email: email,
        User_Name: name,
        User_Password: password,
        User_Username: username
      })
      
      .then(()=>{
        
        location.href = "index.html";
        //alert("Successful registration");
        const key = newPostRef.key;
        
        alert("Welcome " + username + "!"); //Test Statement, I will delete/modify this statement later
       
      })
      .catch((error)=>{
        
        alert("ERROR:Unsuccessful registration");
      });
      
      
  }
  else{
    
    if(name.length==0)
    {
      var errorcheck = document.getElementById("NameFieldBlank");
      errorcheck.style.display='block';
    }
    else
    {
      var errorcheck = document.getElementById("NameFieldBlank");
      errorcheck.style.display='none';
    }
    if(email.length==0)
    {
      var errorcheck = document.getElementById("EmailFieldBlank");
      errorcheck.style.display='block';
    }
    else
    {
      var errorcheck = document.getElementById("EmailFieldBlank");
      errorcheck.style.display='none';
    }
    if(username.length==0)
    {
      var errorcheck = document.getElementById("UsernameFieldBlank");
      errorcheck.style.display='block';
    }
    else
    {
      var errorcheck = document.getElementById("UsernameFieldBlank");
      errorcheck.style.display='none';
    }
    if(password.length==0)
    {
      var errorcheck = document.getElementById("PasswordFieldBlank");
      errorcheck.style.display='block';
    }
    else
    {
      var errorcheck = document.getElementById("PasswordFieldBlank");
      errorcheck.style.display='none';
    }
  }
  
}

