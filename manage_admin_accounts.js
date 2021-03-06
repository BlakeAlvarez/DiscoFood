import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, update, onValue, set, child,get, remove} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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
const Menu = ref(db);

var checkAdmin = sessionStorage.getItem("ADMIN_LOGGED_IN");
if(checkAdmin!="true"){
 window.location.replace("index.html");
}

//this works on the admin manage accounts page
//creates div for users and makes it scrollable
let div = document.getElementById("accounts-container");
div.style.overflow='auto';


get(child(Menu, 'Users/')).then((snapshot) => {
    const data = snapshot.val();
    let NameHeader = document.createElement("h2");
    NameHeader.innerText = "Name";
    NameHeader.style="display: inline; padding: 20px; position:relative; right: 50px; top: 10px";
    let EmailHeader = document.createElement("h2");
    EmailHeader.style="display: inline; padding: 20px; position: relative; left: 20px; top: 10px";
    EmailHeader.innerText = "Email";
    let UserNameHeader = document.createElement("h2");
    UserNameHeader.style="display: inline; padding: 20px; position: relative; right: 100px; top: 10px";

    UserNameHeader.innerText = "User Name";
    let  br = document.createElement("br");
    div.appendChild(UserNameHeader);
    div.appendChild(NameHeader);
    div.appendChild(EmailHeader);
    div.appendChild(br)
    
    for(let x in data){
        let Name = document.createElement("input");
        let Email = document.createElement("input");
        let  Username = document.createElement("input");
        let  br = document.createElement("br");
        Username.style = "display: inline;padding: 10px; position: relative; top: 10px;";
        Email.style = "margin-left: 20px; display: inline;padding: 10px; position: relative; top: 10px; ";
        Name.style = "margin-left: 20px; display: inline;padding: 10px; position: relative; top: 10px;";
        Username.setAttribute("readonly", "true");
        Name.value = data[x].User_Name;	// Change the text of the element
        Email.value = data[x].User_Email;	// Change the text of the element
        Username.value = data[x].User_Username;	// Change the text of the element
        div.appendChild(Username);
        div.appendChild(Name);
        div.appendChild(Email);
        div.appendChild(br)
    }

    //delting user by username                              ///maybe delete reviews by that user as well
    let deleteButton = document.createElement("Button");
    deleteButton.innerText = "Delete User";
    deleteButton.id="deleteButton";
    deleteButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
    div.appendChild(deleteButton)
    
    document.getElementById("deleteButton").addEventListener("click", function(){
        let username=window.prompt("Enter Username to delete:");
        for(let x in data){
            if(data[x].User_Username==username){
                remove(ref(db, "Users/" + x));
                alert(username + "Successfully Deleted!")
            }
        }
    });

    //making user admin                        
    let makeAdminButton = document.createElement("Button");
    makeAdminButton.innerText = "Make User Admin";
    makeAdminButton.id="makeAdminButton";
    makeAdminButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
    div.appendChild(makeAdminButton)
    
    document.getElementById("makeAdminButton").addEventListener("click", function(){
        const updateUser = ref(db, 'Users/');
        let username=window.prompt("Enter Username to make Admin:");
        for(let x in data){
            if(data[x].User_Username==username){
                var path1 = x + "/User_Type";
                update(updateUser,{
                    [path1]: "Admin",
                });
                alert(username + "is now an Admin!")
            }
        }
    });
});



//cancels changes
document.getElementById("cancel_account_changes").addEventListener("click", function(){
    if(confirm("CHANGES WILL NOT BE SAVED!")){
        window.location.href="manage_admin.html";
    }
});

  //saves changes made to accounts
  document.getElementById("save_account_changes").addEventListener("click", function(){
    const updateUser = ref(db, 'Users/');
    if(confirm("CHANGES CANNOT BE UNDONE, ARE YOU SURE YOU WANT TO SAVE?")){

        var inputs = document.getElementById("accounts-container").elements;
        onValue(Menu, (snapshot) => {
            for (var i = 0; i < inputs.length; i+=3) {
                const data = snapshot.val(); //Data is string array
                for(let x in data.Users){
                    if(inputs[i].value==data.Users[x].User_Username){
                        console.log(inputs[i].value)
                        var path1 = x + "/User_Name";
                        var path2 = x + "/User_Email";
                        update(updateUser,{
                            [path1]: inputs[i+1].value,
                            [path2]: inputs[i+2].value
                        });
                    }
                }
            }
        });
        alert("Changes Saved Successfully!")
        window.location.href="manage_admin.html";
        
        
    }
  });