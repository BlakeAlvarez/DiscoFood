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
    div.style.border = "2px solid #72b844";
};
function closeAccessMenu() {
    var div = document.getElementById("accessMenu")
    div.style.width = "0";
    document.getElementById("accessBtn").style.display="block"
    div.style.border = "";
}


window.onload=function(){
    let btn = document.querySelector("#switch-theme");
    btn.addEventListener("click", function() {
        let theme = document.querySelectorAll("[data-theme]");
        for (let i = 0; i < theme.length; i++) {
            if ((theme[i].getAttribute('data-theme') === 'lightMenu') || (theme[i].getAttribute('data-theme') === 'darkMenu')) {
                theme[i].setAttribute('data-theme', theme[i].getAttribute('data-theme') === 'darkMenu' ? 'lightMenu' : 'darkMenu');                
            } else {
                theme[i].setAttribute('data-theme', theme[i].getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
            }

        }
    });

    let textCount = 0;
    let textSize = document.querySelector("#text-size");
    textSize.addEventListener("click", function(){

        if (textCount == 0) {
  
            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                curSize = parseInt($(text[i]).css('font-size')) + 2;
                $(text[i]).css('font-size', curSize);
            }

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
            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                curSize = parseInt($(text[i]).css('font-size')) + 2;
                $(text[i]).css('font-size', curSize);
            }

            var t2 = document.getElementById("textProgress2");
            t2.style.backgroundColor="#72B844";

            textCount++;        
        }
        else if (textCount == 2) {

            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                curSize = parseInt($(text[i]).css('font-size')) + 2;
                $(text[i]).css('font-size', curSize);
            }

            var t3 = document.getElementById("textProgress3");
            t3.style.backgroundColor="#72B844";
            
            textCount++;        
        }
        else {

            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                if ($(text).css('font-family') == 'opendyslexic') {
                    $(text[i]).css('font-size', "");
                    curSize = parseInt($(text[i]).css('font-size')) - 5;
                    $(text[i]).css('font-size', curSize);   
                } else {
                    $(text[i]).css('font-size', "");                   
                }

            }

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

            let od = 'opendyslexic';
            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                $(text[i]).css('font-family', od);
                curSize = parseInt($(text[i]).css('font-size')) - 5;
                $(text[i]).css('font-size', curSize);
            }           

            fontFamCount++;        
        } else {

            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                $(text[i]).css('font-family', "");
                $(text[i]).css('font-size', "");
            }             

            fontFamCount = 0;
        }

       

    });


}

