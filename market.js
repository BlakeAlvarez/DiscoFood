

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref,push, onValue, set,remove,update } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

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

var something = sessionStorage.getItem("LOGGED_IN");
var GetUser = sessionStorage.getItem("USER");
//if(GetUser!=null)
//alert("Hello" + GetUser +" From Food")
if(something=="true"){
  document.getElementById("WriteAReviewButton").addEventListener("click", DisplayWriteReviewsPopup);
  document.getElementById("UserButton").innerHTML="Manage Account";
  var manage = document.getElementById("UserButton");
  manage.innerHTML="Manage Account";
  manage.setAttribute("href","manage_account.html");
  }
  else
  {
    document.getElementById("WriteAReviewButton").addEventListener("click", GoToLogin);

  }
  function GoToLogin(){
   window.location.href = "login.html";
  }




const db = getDatabase();
const Menu = ref(db);
//Lines 19-43 Creates Market List that is displayed on Market Page
let div = document.createElement('div');
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Market.length;
while(div.hasChildNodes()){
    div.removeChild(div.firstChild);
}
for(let x in data.Market){
    
    let Name = document.createElement("p");	// Create a new element
    Name.innerText = data.Market[x].Name;	// Change the text of the element
    Name.style.color = 'black';
    Name.style.display='inline';
    Name.style.cssText="margin-bottom:-15px;margin-left:400px;text-align:left";
    div.appendChild(Name);
    let Price = document.createElement("p");	// Create a new element
    Price.innerText = data.Market[x].Price;	// Change the text of the element
    Price.style.cssText= "color:black; padding-left:100px;margin-left:670px;margin-top:0;";	// Change the text color of the element
    div.appendChild(Price);
    var line = document.createElement("HR");
    line.style.cssText="text-align:left;margin-left:400px;width:410px;";;
    div.appendChild(line); 
}
});
document.getElementById("FoodList").appendChild(div);


// slideshow javascript from line 48 to 78
let slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.getElementById("nextSlide").addEventListener("click", function(){
  showSlides(slideIndex += 1);
});
document.getElementById("prevSlide").addEventListener("click", function(){
  showSlides(slideIndex += -1);
});



//Lines 78-348 is used to display the first 5 reviews on Food Page
let Reviews = document.createElement('div');
//var UsersTest = document.createElement('p'); //TEST STATEMENT DELETE LATER
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Market.length;
while(Reviews.hasChildNodes()){
    Reviews.removeChild(Reviews.firstChild);
}
var MaxReviews = 0;
for(let x in data.Reviews){
  
    if(data.Reviews[x].Review_Page =="Market"){
    var Review = document.createElement('div');
    Review.style.cssText="height:auto;width:500px;transform:translateX(400px);margin-bottom:20px;"; 
    var Icon = document.createElement('div');
    Icon.style.cssText="height:70px;width:70px;display:inline-block;";
    var img = document.createElement('img');
    img.src = 'Images/Food/Small_Icon.svg';
    img.style.cssText=" width:100%;height: 100%;max-width: 500px;max-height: 500px;vertical-align: middle;";
    Icon.appendChild(img);
    Review.appendChild(Icon);
    let Name = document.createElement("p");	// Create a new element
    Name.innerText = data.Reviews[x].User_Name; 	// Change the text of the element
    Name.style.color = 'black';
    Name.style.display="inline";
    Review.appendChild(Name);
    if(data.Reviews[x].User_Name == GetUser && something=="true"){
      var edit_dots = document.createElement('span');
      edit_dots.className ="edit_dots";
      edit_dots.onclick = function(){
        EditReview(data.Reviews[x].Review_Rating,data.Reviews[x].Review_Description,x);
      };
      Review.appendChild(edit_dots);
    }
    var star = data.Reviews[x].Review_Rating;
    if(star == 1){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var OneStar = document.createElement('div');
      OneStar.className='rateDisplay';
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      OneStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      OneStar.appendChild(star1Label);
      final.appendChild(OneStar);
      Review.appendChild(final);
      
    }
    if(star == 2){
     
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var TwoStar = document.createElement('div');
      TwoStar.className='rateDisplay';
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      TwoStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      TwoStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      TwoStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      TwoStar.appendChild(star1Label);
      final.appendChild(TwoStar);
      Review.appendChild(final);
      
    }
    if(star == 3){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var ThreeStar = document.createElement('div');
      ThreeStar.className='rateDisplay';
      var star3Input = document.createElement('input');
      star3Input.type='radio';
      star3Input.id='star2';
      star3Input.name='rate';
      star3Input.value="3";
      ThreeStar.appendChild(star3Input);
      var star3Label = document.createElement('label');
      star3Label.setAttribute("for","star3");
      star3Label.title='text';
      ThreeStar.appendChild(star3Label);
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      ThreeStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      ThreeStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      ThreeStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      ThreeStar.appendChild(star1Label);
      final.appendChild(ThreeStar);
      Review.appendChild(final);
      
    }
    if(star == 4){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var FourStar = document.createElement('div');
      FourStar.className='rateDisplay';
      var star4Input = document.createElement('input');
      star4Input.type='radio';
      star4Input.id='star4';
      star4Input.name='rate';
      star4Input.value="4";
      FourStar.appendChild(star4Input);
      var star4Label = document.createElement('label');
      star4Label.setAttribute("for","star4");
      star4Label.title='text';
      FourStar.appendChild(star4Label);
      var star3Input = document.createElement('input');
      star3Input.type='radio';
      star3Input.id='star2';
      star3Input.name='rate';
      star3Input.value="3";
      FourStar.appendChild(star3Input);
      var star3Label = document.createElement('label');
      star3Label.setAttribute("for","star3");
      star3Label.title='text';
      FourStar.appendChild(star3Label);
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      FourStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      FourStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      FourStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      FourStar.appendChild(star1Label);
      final.appendChild(FourStar);
      Review.appendChild(final);
      
    }
    if(star == 5){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var FourStar = document.createElement('div');
      FourStar.className='rateDisplay';
      var star5Input = document.createElement('input');
      star5Input.type='radio';
      star5Input.id='star5';
      star5Input.name='rate';
      star5Input.value="5";
      FourStar.appendChild(star5Input);
      var star5Label = document.createElement('label');
      star5Label.setAttribute("for","star5");
      star5Label.title='text';
      FourStar.appendChild(star5Label);
      var star4Input = document.createElement('input');
      star4Input.type='radio';
      star4Input.id='star4';
      star4Input.name='rate';
      star4Input.value="4";
      FourStar.appendChild(star4Input);
      var star4Label = document.createElement('label');
      star4Label.setAttribute("for","star4");
      star4Label.title='text';
      FourStar.appendChild(star4Label);
      var star3Input = document.createElement('input');
      star3Input.type='radio';
      star3Input.id='star2';
      star3Input.name='rate';
      star3Input.value="3";
      FourStar.appendChild(star3Input);
      var star3Label = document.createElement('label');
      star3Label.setAttribute("for","star3");
      star3Label.title='text';
      FourStar.appendChild(star3Label);
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      FourStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      FourStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      FourStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      FourStar.appendChild(star1Label);
      final.appendChild(FourStar);
      Review.appendChild(final);
      
    }
    let ReviewDes = document.createElement("p");	// Create a new element
    ReviewDes.innerText = data.Reviews[x].Review_Description; 	// Change the text of the element
    ReviewDes.style.color = 'black';
    ReviewDes.style.cssText="display:block;transform:translateX(70px);margin-top:-20px;";
    Review.appendChild(ReviewDes);
    Reviews.appendChild(Review);
    MaxReviews++;
    if(MaxReviews == 5)
      break;
    }
    
}
/*
// EXAMPLE- How to loop through database regardless of the key is 
for(let x in data.Users){
   //UsersTest.innerHTML += data.Users[x].User_Name +"<br>";  
}
//EXAMPLE- How to get User Key (ID)
const USERID = Object.keys(data.Users);
for(let x in USERID)
UsersTest.innerHTML += USERID[x] + "<br>";
*/
});
document.getElementById("ReviewList").appendChild(Reviews);

//document.getElementById("ReviewList").appendChild(UsersTest); //TEST STATEMENT DELETE LATER
document.getElementById("MoreReviewsLink").addEventListener("click", DisplayMoreReviews);
document.getElementById("CloseMoreReviewsModal").addEventListener("click", CloseMoreReviewsPopup);

var MoreReviewsPopup = document.getElementById("MoreReviewsModal");
function DisplayMoreReviews() {
  MoreReviewsPopup.style.display ="block";
  document.querySelector("body").style.overflow = 'hidden'; //Stops Body Scroll
}
function CloseMoreReviewsPopup(){
  MoreReviewsPopup.style.display ="none";
  document.querySelector("body").style.overflow = 'visible'; //Enables Body Scroll
}
window.onclick = function(event) {
  if (event.target == MoreReviewsPopup) {
    MoreReviewsPopup.style.display = "none";
  }
}
 let AllReviews = document.createElement('div');
//var UsersTest = document.createElement('p'); //TEST STATEMENT DELETE LATER
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Market.length;
while(AllReviews.hasChildNodes()){
    AllReviews.removeChild(AllReviews.firstChild);
}

for(let x in data.Reviews){
  
    if(data.Reviews[x].Review_Page =="Market"){
    var Review = document.createElement('div');
    Review.style.cssText="height:auto;width:500px;transform:translateX(400px);margin-bottom:20px;";
    var Icon = document.createElement('div');
    Icon.style.cssText="height:70px;width:70px;display:inline-block";
    var img = document.createElement('img');
    img.src = 'Images/Food/Small_Icon.svg';
    img.style.cssText=" width:100%;height: 100%;max-width: 500px;max-height: 500px;vertical-align: middle;";
    Icon.appendChild(img);
    Review.appendChild(Icon);
    let Name = document.createElement("p");	// Create a new element
    Name.innerText = data.Reviews[x].User_Name; 	// Change the text of the element
    Name.style.color = 'black';
    Name.style.display="inline";
    Review.appendChild(Name);
    if(data.Reviews[x].User_Name == GetUser && something=="true"){
      var edit_dots = document.createElement('span');
      edit_dots.className ="edit_dots";
      edit_dots.onclick = function(){
        EditReview(data.Reviews[x].Review_Rating,data.Reviews[x].Review_Description,x);
      };
      
      edit_dots.style.marginLeft="150px";
      Review.appendChild(edit_dots);
      
    }
    var star = data.Reviews[x].Review_Rating;
    if(star == 1){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var OneStar = document.createElement('div');
      OneStar.className='rateDisplay';
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      OneStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      OneStar.appendChild(star1Label);
      final.appendChild(OneStar);
      Review.appendChild(final);
      
    }
    if(star == 2){
     
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var TwoStar = document.createElement('div');
      TwoStar.className='rateDisplay';
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      TwoStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      TwoStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      TwoStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      TwoStar.appendChild(star1Label);
      final.appendChild(TwoStar);
      Review.appendChild(final);
      
    }
    if(star == 3){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var ThreeStar = document.createElement('div');
      ThreeStar.className='rateDisplay';
      var star3Input = document.createElement('input');
      star3Input.type='radio';
      star3Input.id='star2';
      star3Input.name='rate';
      star3Input.value="3";
      ThreeStar.appendChild(star3Input);
      var star3Label = document.createElement('label');
      star3Label.setAttribute("for","star3");
      star3Label.title='text';
      ThreeStar.appendChild(star3Label);
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      ThreeStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      ThreeStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      ThreeStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      ThreeStar.appendChild(star1Label);
      final.appendChild(ThreeStar);
      Review.appendChild(final);
      
    }
    if(star == 4){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var FourStar = document.createElement('div');
      FourStar.className='rateDisplay';
      var star4Input = document.createElement('input');
      star4Input.type='radio';
      star4Input.id='star4';
      star4Input.name='rate';
      star4Input.value="4";
      FourStar.appendChild(star4Input);
      var star4Label = document.createElement('label');
      star4Label.setAttribute("for","star4");
      star4Label.title='text';
      FourStar.appendChild(star4Label);
      var star3Input = document.createElement('input');
      star3Input.type='radio';
      star3Input.id='star2';
      star3Input.name='rate';
      star3Input.value="3";
      FourStar.appendChild(star3Input);
      var star3Label = document.createElement('label');
      star3Label.setAttribute("for","star3");
      star3Label.title='text';
      FourStar.appendChild(star3Label);
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      FourStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      FourStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      FourStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      FourStar.appendChild(star1Label);
      final.appendChild(FourStar);
      Review.appendChild(final);
      
    }
    if(star == 5){
      
      var final = document.createElement('div');
      final.style.cssText="display:block;margin-bottom:30px;transform:translateX(60px);margin-top:-20px;";
      var FourStar = document.createElement('div');
      FourStar.className='rateDisplay';
      var star5Input = document.createElement('input');
      star5Input.type='radio';
      star5Input.id='star5';
      star5Input.name='rate';
      star5Input.value="5";
      FourStar.appendChild(star5Input);
      var star5Label = document.createElement('label');
      star5Label.setAttribute("for","star5");
      star5Label.title='text';
      FourStar.appendChild(star5Label);
      var star4Input = document.createElement('input');
      star4Input.type='radio';
      star4Input.id='star4';
      star4Input.name='rate';
      star4Input.value="4";
      FourStar.appendChild(star4Input);
      var star4Label = document.createElement('label');
      star4Label.setAttribute("for","star4");
      star4Label.title='text';
      FourStar.appendChild(star4Label);
      var star3Input = document.createElement('input');
      star3Input.type='radio';
      star3Input.id='star2';
      star3Input.name='rate';
      star3Input.value="3";
      FourStar.appendChild(star3Input);
      var star3Label = document.createElement('label');
      star3Label.setAttribute("for","star3");
      star3Label.title='text';
      FourStar.appendChild(star3Label);
      var star2Input = document.createElement('input');
      star2Input.type='radio';
      star2Input.id='star2';
      star2Input.name='rate';
      star2Input.value="2";
      FourStar.appendChild(star2Input);
      var star2Label = document.createElement('label');
      star2Label.setAttribute("for","star2");
      star2Label.title='text';
      FourStar.appendChild(star2Label);
      var star1Input = document.createElement('input');
      star1Input.type='radio';
      star1Input.id='star1';
      star1Input.name='rate';
      star1Input.value="1";
      FourStar.appendChild(star1Input);
      var star1Label = document.createElement('label');
      star1Label.setAttribute("for","star1");
      star1Label.title='text';
      FourStar.appendChild(star1Label);
      final.appendChild(FourStar);
      Review.appendChild(final);
      
    }
    let ReviewDes = document.createElement("p");	// Create a new element
    ReviewDes.innerText = data.Reviews[x].Review_Description; 	// Change the text of the element
    ReviewDes.style.color = 'black';
    ReviewDes.style.cssText="display:block;transform:translateX(70px);margin-top:-20px;";
    Review.appendChild(ReviewDes);
    AllReviews.appendChild(Review);
    }
    
}

});
document.getElementById("ReviewList2").appendChild(AllReviews);



document.getElementById("CloseWriteAReviewPopup").addEventListener("click", CloseWriteReviewsPopup);
var WriteReviewsPopup = document.getElementById("WriteReviewsModal");
document.getElementById("Usernamebox").innerHTML = GetUser;
function DisplayWriteReviewsPopup() {
  var DisplayDeleteButton = document.getElementById("DeleteReview");
  DisplayDeleteButton.style.display="none";
  var changeTitle = document.getElementById("ReviewTitle");
  changeTitle.innerText="Write Review";
  WriteReviewsPopup.style.display ="block";
  document.querySelector("body").style.overflow = 'hidden'; //Stops Body Scroll
  var errorcheck = document.getElementById("ratingerror");
  errorcheck.style.display='none';
  var errorcheck2 = document.getElementById("reviewerror");
  errorcheck2.style.display='none';
  var changePostButton = document.getElementById("SubmitMarketReview");
  changePostButton.value="Post";
}
function CloseWriteReviewsPopup(){
  WriteReviewsPopup.style.display ="none";
  //document.querySelector("body").style.overflow = 'visible'; //Enables Body Scroll
  document.getElementById("MarketReviewInput").value='';
  var ele = document.getElementsByName('MakeRating');
              
           for(let i = 0; i < ele.length; i++) {
                       ele[i].checked = false;
           }
  var ValueButton = document.getElementById("SubmitMarketReview");
  if(ValueButton.value =="value")
  document.querySelector("body").style.overflow = 'hidden'; //Enables Body Scroll
  if(ValueButton.value =="Post")
  document.querySelector("body").style.overflow = 'visible'; //Enables Body Scroll
  
}
var KEY;
const updateUserRev = ref(db, 'Reviews/');
document.getElementById("DeleteReview").addEventListener("click",DeleteReview);
function DeleteReview(){
  var Deletekey = "Reviews/"+KEY;
  const DeletePosition = ref(db,Deletekey);
  remove(DeletePosition);
  alert("Review Deleted!");
}
function EditReview(UserRatingEdit,UserReviewEdit,ReviewKey){
  var DisplayDeleteButton = document.getElementById("DeleteReview");
  DisplayDeleteButton.style.display="inline-block";
   var changeTitle = document.getElementById("ReviewTitle");
   var changePostButton = document.getElementById("SubmitMarketReview");
   document.getElementById("MarketReviewInput").value=UserReviewEdit;
   var ele = document.getElementsByName('MakeRating');
   if(UserRatingEdit==5){
     ele[0].checked = true;
   }
   if(UserRatingEdit==4){
     ele[1].checked = true;
   }
   if(UserRatingEdit==3){
     ele[2].checked = true;
   }
   if(UserRatingEdit==2){
     ele[3].checked = true;
   }
   if(UserRatingEdit==1){
     ele[4].checked = true;
   }
   changeTitle.innerText="Edit Review";
   changePostButton.value="Save";
   WriteReviewsPopup.style.display ="block";
   document.querySelector("body").style.overflow = 'hidden'; //Stops Body Scroll
   var errorcheck = document.getElementById("ratingerror");
   errorcheck.style.display='none';
   var errorcheck2 = document.getElementById("reviewerror");
   errorcheck2.style.display='none';
   KEY = ReviewKey;
   
 }
document.getElementById("SubmitMarketReview").addEventListener("click",AddReview);
function AddReview(){
  var rating;
  var Review = document.getElementById("MarketReviewInput").value;
  var ele = document.getElementsByName('MakeRating');
              
           for(let i = 0; i < ele.length; i++) {
              if(ele[i].checked==true)
                      rating = ele[i].value;
           }
      
  if(rating==null){
    var errorcheck = document.getElementById("ratingerror");
     errorcheck.style.display='block';
  }
  
  if(Review==""){
    var errorcheck = document.getElementById("reviewerror");
     errorcheck.style.display='block';
  }
  if((Review!="") && (rating!=null)){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var ValueButton = document.getElementById("SubmitMarketReview");
    if(ValueButton.value == "Save"){
      var path1 = KEY + "/Review_Date";
      var path2 = KEY + "/Review_Description";
      var path3 = KEY + "/Review_Page";
      var path4 = KEY + "/Review_Rating";
      var path5 = KEY + "/User_Name";
      update(updateUserRev,{
        [path1]:date,
        [path2]:Review,
        [path3]:"Market",
        [path4]:rating,
        [path5]:GetUser
      });
      alert("Review Updated!");
    }
    else{
    const postListRef = ref(db, 'Reviews/'); //Potential Solution 1
      const newPostRef = push(postListRef);
      set(newPostRef, {
        Review_Date:date,
        Review_Description:Review,
        Review_Page:"Market",
        Review_Rating:rating,
        User_Name:GetUser
      })
      .then(()=>{
        

        alert("Review added!");
 
       
      })
      .catch((error)=>{
        
        alert("ERROR: Unable to add review");
      });
    }
  }
 
}

