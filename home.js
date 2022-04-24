var checkAdmin = sessionStorage.getItem("ADMIN_LOGGED_IN");
var something = sessionStorage.getItem("LOGGED_IN");
if(something=="true"){
var manage1 = document.getElementById("UserButton1");
manage1.innerHTML="Manage Account";
var manage2 = document.getElementById("UserButton2");
manage2.innerHTML="Manage Account";
var manage3 = document.getElementById("UserButton3");
manage3.innerHTML="Manage Account";
if(checkAdmin=="true"){
    manage1.setAttribute("href","manage_admin.html");
    manage2.setAttribute("href","manage_admin.html");
    manage3.setAttribute("href","manage_admin.html");
  }
  else{
  manage1.setAttribute("href","manage_account.html");
  manage2.setAttribute("href","manage_account.html");
  manage3.setAttribute("href","manage_account.html");
  }
}



