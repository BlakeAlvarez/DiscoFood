import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, update, onValue, set, get, child} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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

let grillDiv = document.getElementById("grillContainer");
grillDiv.style.overflow='auto';
let marketDiv = document.getElementById("marketContainer");
marketDiv.style.overflow='auto';
let drinkDiv = document.getElementById("drinkContainer");
drinkDiv.style.overflow='auto';

var grillClicks = 0
var marketClicks = 0
var drinkClicks = 0



get((Menu)).then((snapshot)=> {


    drinkDiv.style.display = "none";
    marketDiv.style.display = "none";
    grillDiv.style.display = "block";
    grillClicks++;
    let SectionHeader = document.createElement("h1");
    SectionHeader.innerText = "Grill";
    SectionHeader.style=" padding: 0px; position:relative; color:#00853E;";
    var data = snapshot.child("Foods/").val(); //Data is string array
    let NameHeader = document.createElement("h2");
    NameHeader.innerText = "Name";
    NameHeader.style="display: inline; padding: 20px; position:relative ;right: 60px; bottom:20px;";
    let PriceHeader = document.createElement("h2");
    PriceHeader.style="display: inline; padding: 20px; position: relative; bottom:20px; left:40px;";
    PriceHeader.innerText = "Price";
    let  br = document.createElement("br");
    let  hr = document.createElement("hr");
    hr.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
    grillDiv.appendChild(SectionHeader);
    grillDiv.appendChild(hr)
    grillDiv.appendChild(NameHeader);
    grillDiv.appendChild(PriceHeader);
    grillDiv.appendChild(br)
    
    for(let x in data){
        let  br = document.createElement("br");
        let name = document.createElement("input");
        let price = document.createElement("input");

        name.style = "display: inline;padding: 10px; position: relative;";
        price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

        name.value = data[x].Name;	// Change the text of the element
        price.value = data[x].Price;	// Change the text of the element
        // Username.value = data.Users[x].User_Username;	// Change the text of the element
        grillDiv.appendChild(name);
        grillDiv.appendChild(price);
        grillDiv.appendChild(br)
    }


    document.getElementById("grillInfo").addEventListener("click", function(){


        drinkDiv.style.display = "none";
        marketDiv.style.display = "none";
        grillDiv.style.display = "block";


        if (grillClicks == 0){
            grillClicks++;
            let SectionHeader = document.createElement("h1");
            SectionHeader.innerText = "Grill";
            SectionHeader.style=" padding: 0px; position:relative; color:#00853E;";
            var data = snapshot.child("Foods/").val(); //Data is string array
            let NameHeader = document.createElement("h2");
            NameHeader.innerText = "Name";
            NameHeader.style="display: inline; padding: 20px; position:relative ;right: 60px; bottom:20px;";
            let PriceHeader = document.createElement("h2");
            PriceHeader.style="display: inline; padding: 20px; position: relative; bottom:20px; left:40px;";
            PriceHeader.innerText = "Price";
            let  br = document.createElement("br");
            let  hr = document.createElement("hr");
            hr.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
            grillDiv.appendChild(SectionHeader);
            grillDiv.appendChild(hr)
            grillDiv.appendChild(NameHeader);
            grillDiv.appendChild(PriceHeader);
            grillDiv.appendChild(br)
            
            for(let x in data){
                let  br = document.createElement("br");
                let name = document.createElement("input");
                let price = document.createElement("input");

                name.style = "display: inline;padding: 10px; position: relative;";
                price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

                name.value = data[x].Name;	// Change the text of the element
                price.value = data[x].Price;	// Change the text of the element
                // Username.value = data.Users[x].User_Username;	// Change the text of the element
                grillDiv.appendChild(name);
                grillDiv.appendChild(price);
                grillDiv.appendChild(br)
            }
        }
    });

document.getElementById("marketInfo").addEventListener("click", function(){

    drinkDiv.style.display = "none";
    grillDiv.style.display = "none";
    marketDiv.style.display = "block";

    if (marketClicks == 0) {
        marketClicks++;
        let Section1Header = document.createElement("h1");
        Section1Header.innerText = "Market";
        Section1Header.style=" padding: 0px; position:relative; color:#00853E;";
        var data = snapshot.child("Market/").val(); //Data is string array
        let Name1Header = document.createElement("h2");
        Name1Header.innerText = "Name";
        Name1Header.style="display: inline; padding: 20px; position:relative; bottom:20px; right: 60px;";
        let Price1Header = document.createElement("h2");
        Price1Header.style="display: inline; padding: 20px; position: relative; left:40px; bottom:20px;";
        Price1Header.innerText = "Price";

        let  br1 = document.createElement("br");
        let  hr1 = document.createElement("hr");
        hr1.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
        marketDiv.appendChild(Section1Header);
        marketDiv.appendChild(hr1)
        marketDiv.appendChild(Name1Header);
        marketDiv.appendChild(Price1Header);
        marketDiv.appendChild(br1)

        for(let x in data){
            let  br = document.createElement("br");
            let name = document.createElement("input");
            let price = document.createElement("input");

            name.style = "display: inline;padding: 10px; position: relative;";
            price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

            name.value = data[x].Name;	// Change the text of the element
            price.value = data[x].Price;	// Change the text of the element
            // Username.value = data.Users[x].User_Username;	// Change the text of the element
            marketDiv.appendChild(name);
            marketDiv.appendChild(price);
            marketDiv.appendChild(br)
        }
    }
});
document.getElementById("drinksInfo").addEventListener("click", function(){

    grillDiv.style.display = "none";
    marketDiv.style.display = "none";
    drinkDiv.style.display = "block";

    if (drinkClicks == 0){
        drinkClicks++;
        let Section2Header = document.createElement("h1");
        Section2Header.innerText = "Drinks";
        Section2Header.style=" padding: 0px; position:relative; color:#00853E;";
        var data = snapshot.child("Drinks/").val(); //Data is string array
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
        drinkDiv.appendChild(Section2Header);
        drinkDiv.appendChild(hr2)
        drinkDiv.appendChild(Name2Header);
        drinkDiv.appendChild(TallHeader);
        drinkDiv.appendChild(GrandeHeader)
        drinkDiv.appendChild(VentiHotHeader);
        drinkDiv.appendChild(VentiIcedHeader);
        drinkDiv.appendChild(br2);

        for(let x in data){

            
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

            name.value = data[x].Name;	// Change the text of the element
            tall.value = data[x].tallPrice;	// Change the text of the element
            grande.value = data[x].grandePrice;
            ventiHot.value = data[x].ventiHotPrice;
            ventiIced.value = data[x].ventiIcedPrice;
            // // Username.value = data.Users[x].User_Username;	// Change the text of the element
            drinkDiv.appendChild(name);
            drinkDiv.appendChild(tall);
            drinkDiv.appendChild(grande);
            drinkDiv.appendChild(ventiHot);
            drinkDiv.appendChild(ventiIced);
            drinkDiv.appendChild(br)
        }
    }
});
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