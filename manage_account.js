import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, update, onValue, set} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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

var checkLOGGED_IN = sessionStorage.getItem("LOGGED_IN");
if(checkLOGGED_IN!="true"){

 window.location.replace("index.html");
}


var GetUser = sessionStorage.getItem("USER");
var validUsername = true;
var validsubmission = false;
//sessionStorage.setItem("LOGGED_IN", "true"); //TEST LOCATION
const reg = ref(db);
onValue(reg,(snapshot)=>{
  const data = snapshot.val();
  var Initname = document.getElementById("name");
  var Initemail = document.getElementById("email");
  var Initusername = document.getElementById("username");
  var Initpassword = document.getElementById("password");
  for(let x in data.Users){
    if(data.Users[x].User_Username==GetUser){
      Initname.value=data.Users[x].User_Name;
      Initemail.value=data.Users[x].User_Email;
      Initusername.value = data.Users[x].User_Username;
      Initpassword.value = data.Users[x].User_Password;
    }
  }
});

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
      if(username == GetUser){
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


document.getElementById("save_changes").addEventListener('click',updateUserData);
function updateUserData() {
  //var usersTable = firebase.database().ref('Users');
  // var userId = Object.keys(db.Users).length+1;
const updateUser = ref(db, 'Users/');
const updateUserRev = ref(db, 'Reviews/');
var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var username = document.getElementById("username").value.trim();
var password = document.getElementById("password").value.trim();
if ((name.length != 0) && (email.length!=0) && (username.length!=0) && (password.length!=0) && (validUsername ==true))
{
  onValue(reg, (snapshot) => {
    const data = snapshot.val(); //Data is string array
    
    for(let x in data.Users){
      
        if(data.Users[x].User_Username == GetUser)
        {
          //alert("Updating User!");
          //alert(GetUser);
            validsubmission=true;
            name =document.getElementById("name").value.split(" ").join('');
            var path1 = x + "/User_Name";
            email =document.getElementById("email").value.split(" ").join('');
            var path2 = x + "/User_Email";
            username =document.getElementById("username").value.split(" ").join('');
            var path3 = x + "/User_Username";
            password =document.getElementById("password").value.split(" ").join('');
            var path4 = x + "/User_Password";
            update(updateUser,{
                [path1]: name,
                [path2]: email,
                [path3]: username,
                [path4]: password
            });
            for(let j in data.Reviews){
              if(data.Reviews[j].User_Name == GetUser){
                var path2 = j + "/User_Name";
                update(updateUserRev,{
                [path2]: username
                });
              }
            }
            
            sessionStorage.setItem("USER",username);   
            window.location.replace("index.html");
            break;
          }      
      }    
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
document.getElementById("logout").addEventListener('click',LogoutUser);
function LogoutUser(){
    sessionStorage.setItem("LOGGED_IN","false");
    window.location.replace("index.html");
}