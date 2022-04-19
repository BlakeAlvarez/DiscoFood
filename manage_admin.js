document.getElementById("logout").addEventListener('click',LogoutUser);
function LogoutUser(){
    sessionStorage.setItem("LOGGED_IN","false");
    sessionStorage.setItem("ADMIN_LOGGED_IN","false");
    window.location.replace("index.html");
}