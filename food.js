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
const Menu = ref(db);
let div = document.createElement('div');
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Foods.length;
while(div.hasChildNodes()){
    div.removeChild(div.firstChild);
}
for(let x in data.Foods){
    
    let Name = document.createElement("p");	// Create a new element
    Name.innerText = data.Foods[x].Name;	// Change the text of the element
    Name.style.color = 'black';
    Name.style.display='inline';
    Name.style.cssText="margin-bottom:-15px;margin-left:400px;text-align:left";
    div.appendChild(Name);
    let Price = document.createElement("p");	// Create a new element
    Price.innerText = data.Foods[x].Price;	// Change the text of the element
    Price.style.cssText= "color:black; padding-left:100px;margin-left:670px;margin-top:0;";	// Change the text color of the element
    div.appendChild(Price);
    var line = document.createElement("HR");
    line.style.cssText="text-align:left;margin-left:400px;width:410px;";;
    div.appendChild(line);
    
}
});
document.getElementById("FoodList").appendChild(div);

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

let Reviews = document.createElement('div');
//var UsersTest = document.createElement('p'); //TEST STATEMENT DELETE LATER
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Foods.length;
while(Reviews.hasChildNodes()){
    Reviews.removeChild(Reviews.firstChild);
}
var MaxReviews = 0;
for(let x in data.Reviews){
  
    if(data.Reviews[x].Review_Page =="Food"){
  
    
    var Review = document.createElement('div');
    Review.style.cssText="height:auto;width:500px;transform:translateX(400px);margin-bottom:20px;";
    var Icon = document.createElement('div');
    Icon.style.cssText="height:70px;width:70px;display:inline-block";
    var img = document.createElement('img');
    img.src = 'Images/Food/Small_Icon.svg';
    Icon.appendChild(img);
    Review.appendChild(Icon);
    let Name = document.createElement("p");	// Create a new element
    Name.innerText = data.Reviews[x].User_Name; 	// Change the text of the element
    Name.style.color = 'black';
    Name.style.display="inline";
    Review.appendChild(Name);
    
    
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
  
    }
    MaxReviews++;
    if(MaxReviews == 5)
      break;
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