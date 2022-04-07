

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
//Lines 19-43 Creates Market List that is displayed on Food Page
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