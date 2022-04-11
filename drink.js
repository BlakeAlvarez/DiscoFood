
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
//Lines 19-43 Creates Drinks List that is displayed on drink Page
let div = document.createElement('div');
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Drinks.length;
while(div.hasChildNodes()){
    div.removeChild(div.firstChild);
}
// adds first line before sizes


for(let x in data.Drinks){
    if(x==0){
        let data = ['Espresso', 'Tall', 'Grande', 'Venti' ];
        let list = document.getElementById("section-header");
    
        let li = document.createElement("li");
        li.innerText = data[0];
        li.style.color = 'black';
        li.style.display= 'inline-block';
        li.style.cssText="list-style-type: none;margin-bottom:-15px;margin-left:400px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li);

        let li2 = document.createElement("li");
        li2.innerText = data[1];
        li2.style.color = 'black';
        li2.style.display= 'inline-block';
        li2.style.cssText="list-style-type: none;margin-bottom:-22px;margin-left:680px;text-align:left; font-size:large; font-weight: bold;";
        div.appendChild(li2);

        let li3 = document.createElement("li");
        li3.innerText = data[2];
        li3.style.color = 'black';
        li3.style.display= 'inline-block';
        li3.style.cssText="list-style-type: none;margin-bottom:-22px;margin-left:780px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li3);

        let li4 = document.createElement("li");
        li4.innerText = data[3];
        li4.style.color = 'black';
        li4.style.display= 'inline-block';
        li4.style.cssText="list-style-type: none;margin-bottom:0px;margin-left:920px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li4);

        var line = document.createElement("HR");
        line.style.cssText="text-align:left;margin-left:400px;width:600px;";
        div.appendChild(line); 
    }

    if(x==7){
        let data = ['Teas & other', 'Tall', 'Grande', 'Venti' ];
        let list = document.getElementById("section-header");
    
        let li = document.createElement("li");
        li.innerText = data[0];
        li.style.color = 'black';
        li.style.display= 'inline-block';
        li.style.cssText="list-style-type: none;margin-bottom:-15px;margin-left:400px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li);

        let li2 = document.createElement("li");
        li2.innerText = data[1];
        li2.style.color = 'black';
        li2.style.display= 'inline-block';
        li2.style.cssText="list-style-type: none;margin-bottom:-22px;margin-left:680px;text-align:left; font-size:large; font-weight: bold;";
        div.appendChild(li2);

        let li3 = document.createElement("li");
        li3.innerText = data[2];
        li3.style.color = 'black';
        li3.style.display= 'inline-block';
        li3.style.cssText="list-style-type: none;margin-bottom:-22px;margin-left:780px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li3);

        let li4 = document.createElement("li");
        li4.innerText = data[3];
        li4.style.color = 'black';
        li4.style.display= 'inline-block';
        li4.style.cssText="list-style-type: none;margin-bottom:0px;margin-left:920px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li4);

        var line = document.createElement("HR");
        line.style.cssText="text-align:left;margin-left:400px;width:600px;";
        div.appendChild(line); 
    }
    if(x==12){
        let data = ['Coffee', 'Tall', 'Grande', 'Venti' ];
        let list = document.getElementById("section-header");
    
        let li = document.createElement("li");
        li.innerText = data[0];
        li.style.color = 'black';
        li.style.display= 'inline-block';
        li.style.cssText="list-style-type: none;margin-bottom:-15px;margin-left:400px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li);

        let li2 = document.createElement("li");
        li2.innerText = data[1];
        li2.style.color = 'black';
        li2.style.display= 'inline-block';
        li2.style.cssText="list-style-type: none;margin-bottom:-22px;margin-left:680px;text-align:left; font-size:large; font-weight: bold;";
        div.appendChild(li2);

        let li3 = document.createElement("li");
        li3.innerText = data[2];
        li3.style.color = 'black';
        li3.style.display= 'inline-block';
        li3.style.cssText="list-style-type: none;margin-bottom:-22px;margin-left:780px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li3);

        let li4 = document.createElement("li");
        li4.innerText = data[3];
        li4.style.color = 'black';
        li4.style.display= 'inline-block';
        li4.style.cssText="list-style-type: none;margin-bottom:0px;margin-left:920px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li4);

        var line = document.createElement("HR");
        line.style.cssText="text-align:left;margin-left:400px;width:600px;";
        div.appendChild(line); 
    }
    if(x==14){
        let data = ['Frappuccinos', 'Grande'];
    
        let li = document.createElement("li");
        li.innerText = data[0];
        li.style.color = 'black';
        li.style.display= 'inline-block';
        li.style.cssText="list-style-type: none;margin-bottom:-15px;margin-left:400px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li);

        let li2 = document.createElement("li");
        li2.innerText = data[1];
        li2.style.color = 'black';
        li2.style.display= 'inline-block';
        li2.style.cssText="list-style-type: none;margin-bottom:0px;margin-left:680px;text-align:left; font-size:large; font-weight: bold;";
        div.appendChild(li2);


        var line = document.createElement("HR");
        line.style.cssText="text-align:left;margin-left:400px;width:600px;";
        div.appendChild(line); 
    }

    if(x==18){
        let data = ['Additions','Price'];
        let list = document.getElementById("section-header");
    
        let li = document.createElement("li");
        li.innerText = data[0];
        li.style.color = 'black';
        li.style.display= 'inline-block';
        li.style.cssText="list-style-type: none;margin-bottom:-15px;margin-left:400px;text-align:left; font-size:large;font-weight: bold;";
        div.appendChild(li);

        let li2 = document.createElement("li");
        li2.innerText = data[1];
        li2.style.color = 'black';
        li2.style.display= 'inline-block';
        li2.style.cssText="list-style-type: none;margin-bottom:0px;margin-left:680px;text-align:left; font-size:large; font-weight: bold;";
        div.appendChild(li2);

        var line = document.createElement("HR");
        line.style.cssText="text-align:left;margin-left:400px;width:600px;";
        div.appendChild(line); 
    }
    

    


    let Name = document.createElement("p");	// Create a new element
    Name.innerText = data.Drinks[x].Name;	// Change the text of the element
    Name.style.color = 'black';
    Name.style.display='inline';
    Name.style.cssText="margin-bottom:-15px;margin-left:400px;text-align:left";
    div.appendChild(Name);
    
    if(data.Drinks[x].Price != undefined){
        let Price = document.createElement("p");	// Create a new element
        Price.innerText = data.Drinks[x].Price;	// Change the text of the element
        Price.style.cssText= "display: inline-block; color:black; padding-left:10px;margin-left:670px;margin-top:0;";	// Change the text color of the element
        div.appendChild(Price);
    }

    if(data.Drinks[x].tallPrice != undefined){
        let tallPrice = document.createElement("p");	// Create a new element
        tallPrice.innerText = data.Drinks[x].tallPrice;	// Change the text of the element
        tallPrice.style.cssText= "display: inline-block; color:black; padding-left:10px;margin-left:670px;margin-top:0;";	// Change the text color of the element
        div.appendChild(tallPrice);
    }

    if(data.Drinks[x].grandePrice != undefined){
        let grandePrice = document.createElement("p");	// Create a new element
        grandePrice.innerText = data.Drinks[x].grandePrice;	// Change the text of the element
        //espresso has a string in its price
        if(data.Drinks[x].Name == "Espresso"){
            grandePrice.style.cssText= "display: inline-block;color:black; padding-left:10px;margin-left:35px;margin-top:0;";	// Change the text color of the element
        }
        else if(data.Drinks[x].Name == "Coffee" || data.Drinks[x].Name == "Caramel" || data.Drinks[x].Name == "Vanilla Bean" || data.Drinks[x].Name == "Mocha"){
            grandePrice.style.cssText= "display: inline-block;color:black; padding-left:10px;margin-left:670px;margin-top:0;";	// Change the text color of the element
        }
        else{
            grandePrice.style.cssText= "display: inline-block;color:black; padding-left:10px;margin-left:70px;margin-top:0;";	// Change the text color of the element

        }
        div.appendChild(grandePrice);
    }
    

    if(data.Drinks[x].ventiPrice != undefined){
        let ventiPrice = document.createElement("p");	// Create a new element
        ventiPrice.innerText = data.Drinks[x].ventiPrice;	// Change the text of the element
        ventiPrice.style.cssText= "display: inline-block;color:black; padding-left:10px;margin-left:70px;margin-top:0;";	// Change the text color of the element
        div.appendChild(ventiPrice);
    }

    if(data.Drinks[x].ventiHotPrice != undefined){
        let ventiHotPrice = document.createElement("p");	// Create a new element
        ventiHotPrice.innerText = data.Drinks[x].ventiHotPrice;	// Change the text of the element
        ventiHotPrice.style.cssText= "display: inline-block;color:black; padding-left:10px;margin-left:70px;margin-top:0;";	// Change the text color of the element
        div.appendChild(ventiHotPrice);
    }

    if(data.Drinks[x].ventiIcedPrice != undefined){
        let ventiIcedPrice = document.createElement("p");	// Create a new element
        ventiIcedPrice.innerText = data.Drinks[x].ventiIcedPrice;	// Change the text of the element
        ventiIcedPrice.style.cssText = "color:black; padding-left:10px;margin-left:910px;margin-top:0;";	// Change the text color of the element
        div.appendChild(ventiIcedPrice);
    }
    
    var line = document.createElement("HR");
    line.style.cssText="text-align:left;margin-left:400px;width:600px;";
    div.appendChild(line); 
}
});
document.getElementById("DrinkList").appendChild(div);



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

//Lines 78-348 is used to display the first 5 reviews on drink Page
let Reviews = document.createElement('div');
//var UsersTest = document.createElement('p'); //TEST STATEMENT DELETE LATER
onValue(Menu, (snapshot) => {
const data = snapshot.val(); //Data is string array
let len = data.Drinks.length;
while(Reviews.hasChildNodes()){
    Reviews.removeChild(Reviews.firstChild);
}
var MaxReviews = 0;
for(let x in data.Reviews){
  
    if(data.Reviews[x].Review_Page =="Drink"){
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
let len = data.Drinks.length;
while(AllReviews.hasChildNodes()){
    AllReviews.removeChild(AllReviews.firstChild);
}

for(let x in data.Reviews){
  
    if(data.Reviews[x].Review_Page =="Drink"){
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
  
  WriteReviewsPopup.style.display ="block";
  document.querySelector("body").style.overflow = 'hidden'; //Stops Body Scroll
  var errorcheck = document.getElementById("ratingerror");
  errorcheck.style.display='none';
  var errorcheck2 = document.getElementById("reviewerror");
     errorcheck2.style.display='none';
}
function CloseWriteReviewsPopup(){
  WriteReviewsPopup.style.display ="none";
  document.querySelector("body").style.overflow = 'visible'; //Enables Body Scroll
  document.getElementById("DrinkReviewInput").value='';
}

document.getElementById("SubmitDrinkReview").addEventListener("click",AddReview);
function AddReview(){
  var rating;
  var Review = document.getElementById("DrinkReviewInput").value;
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
    const postListRef = ref(db, 'Reviews/'); //Potential Solution 1
      const newPostRef = push(postListRef);
      set(newPostRef, {
        Review_Date:date,
        Review_Description:Review,
        Review_Page:"Drink",
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

