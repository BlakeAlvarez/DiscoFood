var something = sessionStorage.getItem("LOGGED_IN");
if(something=="true"){
var manage = document.getElementById("UserButton");
manage.innerHTML="Manage Account";
manage.setAttribute("href","manage_account.html");
}


