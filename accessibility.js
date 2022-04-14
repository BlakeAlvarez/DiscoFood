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
            } else if ((theme[i].getAttribute('data-theme') === 'lightIcon') || (theme[i].getAttribute('data-theme') === 'darkIcon')) {
                // theme[i].setAttribute('data-theme', theme[i].getAttribute('data-theme') === 'darkIcon' ? 'lightIcon' : 'darkIcon')
            } else {
                theme[i].setAttribute('data-theme', theme[i].getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
            }
        }
        if (theme[0].getAttribute('data-theme') === 'dark') {
            var toggle = document.getElementById("themeToggle");    
            toggle.style.backgroundColor="#72B844";  
            document.getElementById("lightIcon").src="Images/Accessibility/darkMode.png";

        } else if (theme[0].getAttribute('data-theme') === 'light') {
            var toggle = document.getElementById("themeToggle");    
            toggle.style.backgroundColor="";    
            document.getElementById("lightIcon").src="Images/Accessibility/lightMode.png";
            
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
            var toggle = document.getElementById("dyslexiaToggleDot");    
            toggle.style.backgroundColor="#72B844";  

            fontFamCount++;        
        } else {

            let text = document.querySelectorAll("[data-fontSize]");
            for (let i = 0; i < text.length; i++) {
                $(text[i]).css('font-family', "");
                $(text[i]).css('font-size', "");
            }             
            var toggle = document.getElementById("dyslexiaToggleDot");    
            toggle.style.backgroundColor="";  

            fontFamCount = 0;
        }

    });

    var ttsCount = 0;
    let tts = document.getElementById('textSpeech');
    const delay = 10000;
    let lastExecution = 0;
    tts.addEventListener("click",  function() {

        if (ttsCount == 0) {
            ttsCount++;
            var toggle = document.getElementById("ttsToggle");
            toggle.style.display="inline-block";
            toggle.style.backgroundColor="#72B844";

              
        } else {

            var toggle = document.getElementById("ttsToggle");
            toggle.style.display="";
            toggle.style.backgroundColor= "";

            ttsCount = 0;
        }    

        if (ttsCount == 1 && ((lastExecution + delay) < Date.now())) {

            $(document).mouseup(function(){
                var highlightedText = "";
                if (ttsCount == 1 && ((lastExecution + delay) < Date.now())) {
                    var highlightedText = "";
                    if (window.getSelection) {
                        highlightedText = window.getSelection().toString();
                    } 
                    else if (document.selection && document.selection.type != "Control") {
                        highlightedText = document.selection.createRange().text;
                    }
                    if(highlightedText != "") {
                        VoiceRSS.speech({
                            key: '1463989e69f145c784a02965f9a1e505',
                            src: highlightedText,
                            hl: 'en-us',
                            v: 'Linda',
                            r: 0, 
                            c: 'mp3',
                            f: '44khz_16bit_stereo',
                            ssml: false
                        });    
                        lastExecution = Date.now();
                    }             
                }
            });           
        }
        
    });
}