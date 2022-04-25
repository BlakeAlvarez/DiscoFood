//  PREVENT USERS/ADMINS FROM DIRECT ACCESS TO PAGE THROUGH URL, THE USER/ADMIN MUST LOGGED IN FIRST!
var checkAdmin = sessionStorage.getItem("ADMIN_LOGGED_IN");
if(checkAdmin!="true"){
 window.location.replace("index.html");
}

document.getElementById("logout").addEventListener('click',LogoutUser);
function LogoutUser(){
    sessionStorage.setItem("LOGGED_IN","false");
    sessionStorage.setItem("ADMIN_LOGGED_IN","false");
    window.location.replace("index.html");
}