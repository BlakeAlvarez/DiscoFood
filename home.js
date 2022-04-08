var something = sessionStorage.getItem("LOGGED_IN");
if(something=="true")
document.getElementById("UserButton").innerHTML = "Manage Account";

topBtn = document.getElementById("topButton")

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

accessBtn = document.getElementById("accessBtn")
function openAccessMenu() {
    var div = document.getElementById("accessMenu")
    div.style.width = "25%"
    document.getElementById("accessBtn").style.display="none"
};
function closeAccessMenu() {
    var div = document.getElementById("accessMenu")
    div.style.width = "0";
    document.getElementById("accessBtn").style.display="block"
}


window.onload=function(){
    let btn = document.querySelector("#switch-theme");
    btn.addEventListener("click", function() {
        let theme = document.querySelectorAll("[theme]");
        for (let i = 0; i < theme.length; i++) {
            theme[i].setAttribute('theme', theme[i].getAttribute('theme') === 'dark' ? 'light' : 'dark');
        }

    });

    let textCount = 0;
    let textSize = document.querySelector("#text-size");
    textSize.addEventListener("click", function(){

        if (textCount == 0) {
            curSize = parseInt($('.section1').css('font-size')) + 2;
            $('.section1').css('font-size', curSize);
            curSize = parseInt($('.section2').css('font-size')) + 2;
            $('.section2').css('font-size', curSize);
            curSize = parseInt($('.meal_plan_positioning').css('font-size')) + 2;
            $('.meal_plan_positioning').css('font-size', curSize);
            curSize = parseInt($('.createAccountText').css('font-size')) + 2;
            $('.createAccountText').css('font-size', curSize);
            curSize = parseInt($('.mealPlans').css('font-size')) + 2;
            $('.mealPlans').css('font-size', curSize);
            curSize = parseInt($('.accessMenu').css('font-size')) + 2;
            $('.accessMenu').css('font-size', curSize);  
            
            
            var t1 = document.getElementById("textProgress1");
            var t2 = document.getElementById("textProgress2");
            var t3 = document.getElementById("textProgress3");
            t1.style.display="inline-block";
            t2.style.display="inline-block";
            t3.style.display="inline-block";
            t1.style.backgroundColor="#72B844";

            textCount++;        
        }
        else if (textCount == 1) {
            curSize = parseInt($('.section1').css('font-size')) + 2;
            $('.section1').css('font-size', curSize);
            curSize = parseInt($('.section2').css('font-size')) + 2;
            $('.section2').css('font-size', curSize);
            curSize = parseInt($('.meal_plan_positioning').css('font-size')) + 2;
            $('.meal_plan_positioning').css('font-size', curSize);
            curSize = parseInt($('.createAccountText').css('font-size')) + 2;
            $('.createAccountText').css('font-size', curSize);
            curSize = parseInt($('.mealPlans').css('font-size')) + 2;
            $('.mealPlans').css('font-size', curSize);
            curSize = parseInt($('.accessMenu').css('font-size')) + 2;
            $('.accessMenu').css('font-size', curSize);   

            var t2 = document.getElementById("textProgress2");
            t2.style.backgroundColor="#72B844";

            textCount++;        
        }
        else if (textCount == 2) {
            curSize = parseInt($('.section1').css('font-size')) + 2;
            $('.section1').css('font-size', curSize);
            curSize = parseInt($('.section2').css('font-size')) + 2;
            $('.section2').css('font-size', curSize);
            curSize = parseInt($('.meal_plan_positioning').css('font-size')) + 2;
            $('.meal_plan_positioning').css('font-size', curSize);
            curSize = parseInt($('.createAccountText').css('font-size')) + 2;
            $('.createAccountText').css('font-size', curSize);
            curSize = parseInt($('.mealPlans').css('font-size')) + 2;
            $('.mealPlans').css('font-size', curSize);
            curSize = parseInt($('.accessMenu').css('font-size')) + 2;
            $('.accessMenu').css('font-size', curSize);  

            var t3 = document.getElementById("textProgress3");
            t3.style.backgroundColor="#72B844";
            
            textCount++;        
        }
        else if (textCount == 3) {
            curSize = parseInt($('.section1').css('font-size')) + 2;
            $('.section1').css('font-size', "");
            curSize = parseInt($('.section2').css('font-size')) + 2;
            $('.section2').css('font-size', "");
            curSize = parseInt($('.meal_plan_positioning').css('font-size')) + 2;
            $('.meal_plan_positioning').css('font-size', "");
            curSize = parseInt($('.createAccountText').css('font-size')) + 2;
            $('.createAccountText').css('font-size', "");
            curSize = parseInt($('.mealPlans').css('font-size')) + 2;
            $('.mealPlans').css('font-size', "");
            curSize = parseInt($('.accessMenu').css('font-size')) + 2;
            $('.accessMenu').css('font-size', "");  
        
            var t1 = document.getElementById("textProgress1");
            var t2 = document.getElementById("textProgress2");
            var t3 = document.getElementById("textProgress3");
            t1.style.display="";
            t2.style.display="";
            t3.style.display="";
            t1.style.backgroundColor="";
            t2.style.backgroundColor="";
            t3.style.backgroundColor="";

            textCount = 0;
        }
    });

    let fontFamCount = 0;
    let dyslexiaBtn = document.querySelector("#dyslexiaToggle");
    dyslexiaBtn.addEventListener("click", function() {
        
        if (fontFamCount == 0) {
            $('body').css('font-family', 'opendyslexic');
            $('.section1').css('font-family', 'opendyslexic');
            $('.section2').css('font-family', 'opendyslexic');
            $('.meal_plan_positioning').css('font-family', 'opendyslexic');
            $('.createAccountText').css('font-family', 'opendyslexic');
            $('.mealPlans').css('font-family', 'opendyslexic');
            $('.accessMenu').css('font-family', 'opendyslexic');  
            $('.createAccountTitle').css('font-family', 'opendyslexic');  
            $('.createAccountTitle').css('font-size', "24px");  
            $('.hours').css('font-family', 'opendyslexic');  
            $('.hours').css('font-size', "24px");  
            $('.discoPerks').css('font-family', 'opendyslexic');  
            $('.discoPerks').css('font-size', "24px");  

            fontFamCount++;        
        } else {
            $('body').css('font-family', "");
            $('.section1').css('font-family', "");
            $('.section2').css('font-family', "");
            $('.meal_plan_positioning').css('font-family', "");
            $('.createAccountText').css('font-family', "");
            $('.mealPlans').css('font-family', "");
            $('.accessMenu').css('font-family', ""); 
            $('.createAccountTitle').css('font-family', "");  
            $('.createAccountTitle').css('font-size', "");  
            $('.hours').css('font-family', "");  
            $('.hours').css('font-size', "");  
            $('.discoPerks').css('font-family', "");  
            $('.discoPerks').css('font-size', "");  


            fontFamCount = 0;
        }

       

    });


}

