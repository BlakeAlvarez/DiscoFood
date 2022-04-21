import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, update, onValue, set, get, child, remove} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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

// this works on the admin manage reviews page
let div = document.getElementById("reviews-container");
div.style.overflow='auto';


get(child(Menu, 'Reviews/')).then((snapshot) => {
    const data = snapshot.val(); //Data is string array
    let DateHeader = document.createElement("h2");
    
    let idHeader = document.createElement("h2");
    idHeader.style="display: inline; padding: 20px; position: relative; right: 140px; top: 10px";
    idHeader.innerText = "ID";

    let UsernameHeader = document.createElement("h2");
    UsernameHeader.style="display: inline; padding: 20px; position: relative; right: 150px; top: 10px";
    UsernameHeader.innerText = "User";
    DateHeader.innerText = "Date";
    DateHeader.style="display: inline; padding: 20px; position:relative; right: 150px; top: 10px";
    let RatingHeader = document.createElement("h2");
    RatingHeader.style="display: inline; padding: 20px; position: relative; right: 120px; top: 10px";
    RatingHeader.innerText = "Rating";
    let PageHeader = document.createElement("h2");
    PageHeader.style="display: inline; padding: 20px; position: relative; right: 110px; top: 10px";
    PageHeader.innerText = "Page";
    let DesHeader = document.createElement("h2");
    DesHeader.style="display: inline; padding: 20px; position: relative; right: 85px; top: 10px";
    DesHeader.innerText = "Description";
    


    let  br = document.createElement("br");
    div.appendChild(idHeader);
    div.appendChild(UsernameHeader);
    div.appendChild(DateHeader);
    div.appendChild(RatingHeader);
    div.appendChild(PageHeader);
    div.appendChild(DesHeader);
    div.appendChild(br)
    
    for(let x in data){
        let id = document.createElement("input");
        let user = document.createElement("input");
        let date = document.createElement("input");
        let  rating = document.createElement("input");
        let  page = document.createElement("input");
        let  description = document.createElement("input");
        let  br = document.createElement("br");
        
        id.style = "float:left; margin-left: 1px;display: inline;padding: 4px; position: relative; top: 15px; width:3%;";
        user.style = "display: inline;padding: 5px; position: relative; top: 10px; width:7%;";
        date.style = "margin-left: 20px; display: inline;padding: 5px; position: relative; top: 10px; width:10%; ";
        rating.style = "margin-left: 20px; display: inline;padding: 5px; position: relative; top: 10px;width:10%;";
        page.style = "margin-left: 20px; display: inline;padding: 5px; position: relative; top: 10px;width:10%;";
        description.style = "overflow: auto;margin-left: 20px; display: inline;padding: 10px; position: relative; top: 10px;width:37%;";

        id.setAttribute("readonly", "true");
        user.setAttribute("readonly", "true");
        date.setAttribute("readonly", "true");
        rating.setAttribute("readonly", "true");
        page.setAttribute("readonly", "true");

        id.value = x;
        user.value = data[x].User_Name;	// Change the text of the element
        date.value = data[x].Review_Date;	// Change the text of the element
        rating.value = data[x].Review_Rating;	// Change the text of the element
        page.value = data[x].Review_Page;
        description.value = data[x].Review_Description;

        div.appendChild(id);
        div.appendChild(user);
        div.appendChild(date);
        div.appendChild(rating);
        div.appendChild(page);
        div.appendChild(description);
        div.appendChild(br)

    }


    //delting review by id                              ///maybe delete reviews by that user as well
    let deleteButton = document.createElement("Button");
    deleteButton.innerText = "Delete Review by ID";
    deleteButton.id="deleteButton";
    deleteButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
    div.appendChild(deleteButton)
    
    document.getElementById("deleteButton").addEventListener("click", function(){
        let review=window.prompt("Enter Review ID to delete:");
        for(let x in data){
            if(x==review){
                remove(ref(db, "Reviews/" + x));
                alert(review + "Successfully Deleted!")
            }
        }
    });

});

//cancels changes
document.getElementById("cancel_reviews_changes").addEventListener("click", function(){
    if(confirm("CHANGES WILL NOT BE SAVED!")){
        window.location.href="manage_admin.html";
    }
});

  //saves changes made to accounts
document.getElementById("save_reviews_changes").addEventListener("click", function(){
    const updateReviews = ref(db, 'Reviews/');
    if(confirm("CHANGES CANNOT BE UNDONE, ARE YOU SURE YOU WANT TO SAVE?")){

        var inputs = document.getElementById("reviews-container").elements;
        onValue(Menu, (snapshot) => {
            for (var i = 0; i < inputs.length; i+=6) {
                const data = snapshot.val(); //Data is string array
                for(let x in data.Reviews){
                    if(inputs[i].value==x){
                        var path1 = x + "/Review_Description";
                        update(updateReviews,{
                            [path1]: inputs[i+5].value
                        });
                    }
                }
            }
        });
        alert("Changes Saved Successfully!")
        window.location.href="manage_admin.html";
    }
  });



