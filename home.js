var checkAdmin = sessionStorage.getItem("ADMIN_LOGGED_IN");
var something = sessionStorage.getItem("LOGGED_IN");
if(something=="true"){
var manage = document.getElementById("UserButton");
manage.innerHTML="Manage Account";
if(checkAdmin=="true"){
    manage.setAttribute("href","manage_admin.html");
  }
  else
  manage.setAttribute("href","manage_account.html");
}



