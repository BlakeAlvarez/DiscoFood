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

// function darkMode() {
//     var element = document.body;
//     var e2 = document.getElementsByClassName("section1");
//     // element.classList.toggle("darkMode");
//     e2.toggle("darkMode");
// }


window.onload=function(){
    let btn = document.querySelector("#switch-theme");
    let sec2 = document.getElementsByClassName('section2');
    btn.addEventListener("click", function() {
        let theme = document.querySelectorAll("[theme]");
        for (let i = 0; i < theme.length; i++) {
            theme[i].setAttribute('theme', theme[i].getAttribute('theme') === 'dark' ? 'light' : 'dark');
            
        }
    });
}