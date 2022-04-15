import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, update, onValue, set} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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



const db = getDatabase();
const Menu = ref(db);

//this works on the admin manage system page
//creates div for users and makes it scrollable
let div = document.getElementById("system-container");
div.style.overflow='auto';


onValue(Menu, (snapshot) => {
    // let SectionHeader = document.createElement("h1");
    // SectionHeader.innerText = "Grill";
    // SectionHeader.style=" padding: 0px; position:relative; color:#00853E;";
    const data = snapshot.val(); //Data is string array
    // let NameHeader = document.createElement("h2");
    // NameHeader.innerText = "Name";
    // NameHeader.style="display: inline; padding: 20px; position:relative ;right: 60px; bottom:20px;";
    // let PriceHeader = document.createElement("h2");
    // PriceHeader.style="display: inline; padding: 20px; position: relative; bottom:20px; left:40px;";
    // PriceHeader.innerText = "Price";
    // let  br = document.createElement("br");
    // let  hr = document.createElement("hr");
    // hr.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
    // div.appendChild(SectionHeader);
    // div.appendChild(hr)
    // div.appendChild(NameHeader);
    // div.appendChild(PriceHeader);
    // div.appendChild(br)
    
    // for(let x in data.Foods){
    //     let  br = document.createElement("br");
    //     let name = document.createElement("input");
    //     let price = document.createElement("input");

    //     name.style = "display: inline;padding: 10px; position: relative;";
    //     price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

    //     name.value = data.Foods[x].Name;	// Change the text of the element
    //     price.value = data.Foods[x].Price;	// Change the text of the element
    //     // Username.value = data.Users[x].User_Username;	// Change the text of the element
    //     div.appendChild(name);
    //     div.appendChild(price);
    //     div.appendChild(br)

    // }


    // let Section1Header = document.createElement("h1");

    // Section1Header.innerText = "Market";
    // Section1Header.style=" padding: 0px; position:relative; color:#00853E;";
    // let Name1Header = document.createElement("h2");
    // Name1Header.innerText = "Name";
    // Name1Header.style="display: inline; padding: 20px; position:relative; bottom:20px; right: 60px;";
    // let Price1Header = document.createElement("h2");
    // Price1Header.style="display: inline; padding: 20px; position: relative; left:40px; bottom:20px;";
    // Price1Header.innerText = "Price";

    // let  br1 = document.createElement("br");
    // let  hr1 = document.createElement("hr");
    // hr1.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
    // div.appendChild(Section1Header);
    // div.appendChild(hr1)
    // div.appendChild(Name1Header);
    // div.appendChild(Price1Header);
    // div.appendChild(br1)
    // for(let x in data.Market){
    //     let  br = document.createElement("br");
    //     let name = document.createElement("input");
    //     let price = document.createElement("input");

    //     name.style = "display: inline;padding: 10px; position: relative;";
    //     price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

    //     name.value = data.Market[x].Name;	// Change the text of the element
    //     price.value = data.Market[x].Price;	// Change the text of the element
    //     // Username.value = data.Users[x].User_Username;	// Change the text of the element
    //     div.appendChild(name);
    //     div.appendChild(price);
    //     div.appendChild(br)

    // }

    let Section2Header = document.createElement("h1");

    Section2Header.innerText = "Drinks";
    Section2Header.style=" padding: 0px; position:relative; color:#00853E;";
    let Name2Header = document.createElement("h2");
    Name2Header.innerText = "Name";
    Name2Header.style="display: inline; padding: 20px; position:relative; bottom:20px; right: 150px;";
    let TallHeader = document.createElement("h2");
    TallHeader.style="display: inline; padding: 20px; position: relative; right:10px; bottom:20px;";
    TallHeader.innerText = "Tall";
    let GrandeHeader = document.createElement("h2");
    GrandeHeader.style="display: inline; padding: 20px; position: relative; left:50px; bottom:20px;";
    GrandeHeader.innerText = "Grande";
    let VentiHotHeader = document.createElement("h2");
    VentiHotHeader.style="display: inline; padding: 20px; position: relative; left:100px; bottom:20px;";
    VentiHotHeader.innerText = "Venti Hot";
    let VentiIcedHeader = document.createElement("h2");
    VentiIcedHeader.style="display: inline; padding: 20px; position: relative; left:100px; bottom:20px;";
    VentiIcedHeader.innerText = "Venti Iced";

    let  br2 = document.createElement("br");
    let  hr2 = document.createElement("hr");
    hr2.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
    div.appendChild(Section2Header);
    div.appendChild(hr2)
    div.appendChild(Name2Header);
    div.appendChild(TallHeader);
    div.appendChild(GrandeHeader)
    div.appendChild(VentiHotHeader);
    div.appendChild(VentiIcedHeader);
    div.appendChild(br2);




    for(let x in data.Drinks){

        
        let  br = document.createElement("br");
        let name = document.createElement("input");
        let tall = document.createElement("input");
        let grande = document.createElement("input");
        let ventiHot = document.createElement("input");
        let  ventiIced= document.createElement("input");

        name.style = "display: inline; padding: 7px; position: relative; width:20%; right:120px";
        tall.style = "display: inline; padding: 7px; position: relative; width:10%; right:80px;";
        grande.style = "display: inline; padding: 7px; position: relative; width:10%; right:40px;" ;
        ventiHot.style = "display: inline;padding: 7px; position: relative; width:10%; left: 30px;";
        ventiIced.style = "display: inline; padding: 7px; position: relative; width:10%;left: 70px;";




        name.value = data.Drinks[x].Name;	// Change the text of the element
        tall.value = data.Drinks[x].tallPrice;	// Change the text of the element
        grande.value = data.Drinks[x].grandePrice;
        ventiHot.value = data.Drinks[x].ventiHotPrice;
        ventiIced.value = data.Drinks[x].ventiIcedPrice;
        // // Username.value = data.Users[x].User_Username;	// Change the text of the element
        div.appendChild(name);
        div.appendChild(tall);
        div.appendChild(grande);
        div.appendChild(ventiHot);
        div.appendChild(ventiIced);
        div.appendChild(br)
    }
});


//cancels changes
document.getElementById("cancel_system_changes").addEventListener("click", function(){
    if(confirm("CHANGES WILL NOT BE SAVED!")){
        window.location.href="manage_admin.html";
    }
});

  //saves changes made to system
  document.getElementById("save_account_changes").addEventListener("click", function(){
    const updateUser = ref(db, 'Foods/');
    if(confirm("CHANGES CANNOT BE UNDONE, ARE YOU SURE YOU WANT TO SAVE?")){

        // var inputs = document.getElementById("system-container").elements;
        // onValue(Menu, (snapshot) => {
        //     for (var i = 0; i < inputs.length; i+=3) {
        //         const data = snapshot.val(); //Data is string array
        //         for(let x in data.Users){
        //             if(inputs[i].value==data.Users[x].User_Username){
        //                 console.log(inputs[i].value)
        //                 var path1 = x + "/User_Name";
        //                 var path2 = x + "/User_Email";
        //                 update(updateUser,{
        //                     [path1]: inputs[i+1].value,
        //                     [path2]: inputs[i+2].value,
        //                 });
        //             }
        //         }
            
        //     }
        // });
        window.location.href="manage_admin.html";
        alert("Changes Saved Successfully!")
        
    }
  });