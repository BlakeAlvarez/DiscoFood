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
        Name2Header.style="display: inline; padding: 20px; position:relative; bottom:20px; right: 200px;";
        let TallHeader = document.createElement("h2");
        TallHeader.style="display: inline; padding: 20px; position: relative; right:150px; bottom:20px;";
        TallHeader.innerText = "Tall";
        let GrandeHeader = document.createElement("h2");
        GrandeHeader.style="display: inline; padding: 20px; position: relative; right:100px; bottom:20px;";
        GrandeHeader.innerText = "Grande";
        let VentiHeader = document.createElement("h2");
        VentiHeader.style="display: inline; padding: 20px; position: relative; left:40px; bottom:20px;";
        VentiHeader.innerText = "Venti";


        let  br2 = document.createElement("br");
        let  hr2 = document.createElement("hr");
        hr2.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
        drinkDiv.appendChild(Section2Header);
        drinkDiv.appendChild(hr2)
        drinkDiv.appendChild(Name2Header);
        drinkDiv.appendChild(TallHeader);
        drinkDiv.appendChild(GrandeHeader)
        drinkDiv.appendChild(VentiHeader);
        drinkDiv.appendChild(br2);

        for(let x in data){
            
            let  br = document.createElement("br");
            let  br2 = document.createElement("br");
            let name = document.createElement("input");
            let price = document.createElement("input");
            let tall = document.createElement("input");
            let grande = document.createElement("input");
            let ventiHot = document.createElement("input");
            let  ventiIced= document.createElement("input");
            let  venti= document.createElement("input");

            name.style = "float: left; display: inline; padding: 7px; position: relative; width: 160px;";
            price.style = "float: left;display: inline; padding: 7px; position: relative; width:120px; left: 10px;";
            tall.style = "float: left;display: inline; padding: 7px; position: relative; width:120px; left: 20px;";
            grande.style = "float: left;display: inline; padding: 7px; position: relative; width:120px; left: 30px; " ;
            ventiHot.style = "float: left;display: inline;padding: 7px; position: relative; width:120px; left: 40px;";
            venti.style = "float: left;display: inline;padding: 7px; position: relative; width:120px; left: 40px;";
            ventiIced.style = "float: left;display: inline; padding: 7px; position: relative; width:120px; left: 50px;";
 

            name.value = data[x].Name;
            price.value = data[x].Price;	// Change the text of the element
            tall.value = data[x].tallPrice;	// Change the text of the element
            grande.value = data[x].grandePrice;
            venti.value = data[x].ventiPrice;
            ventiHot.value = data[x].ventiHotPrice;
            ventiIced.value = data[x].ventiIcedPrice;

            if(data[x].Name!= undefined){
                drinkDiv.appendChild(name);
            }
            if(data[x].Price!= undefined){
                drinkDiv.appendChild(price);
            }
            if(data[x].tallPrice!= undefined){
                drinkDiv.appendChild(tall)
            }
            if(data[x].grandePrice!= undefined){
                drinkDiv.appendChild(grande);
            }
            if(data[x].ventiPrice!= undefined){
                drinkDiv.appendChild(venti);
            }
            if(data[x].ventiHotPrice!= undefined){
                drinkDiv.appendChild(ventiHot);
            }
            if(data[x].ventiIcedPrice!= undefined){
                drinkDiv.appendChild(ventiIced);
            }
        
            drinkDiv.appendChild(br)
            drinkDiv.appendChild(br2)
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
  document.getElementById("save_system_changes").addEventListener("click", function(){
    const updateFoods = ref(db, 'Foods/');
    const updateMarket = ref(db, 'Market/');
    const updateDrinks = ref(db, 'Drinks/');

    if(confirm("CHANGES CANNOT BE UNDONE, ARE YOU SURE YOU WANT TO SAVE?")){

        var inputs = document.getElementById("grillContainer").elements;
        var inputs2 = document.getElementById("marketContainer").elements;
        var inputs3 = document.getElementById("drinkContainer").elements;

        onValue(Menu, (snapshot) => {
            for (var i = 0; i < inputs.length; i+=2) {
                const data = snapshot.val(); //Data is string array
                for(let x in data.Foods){
                    
                    if( (i+2)/2 ==data.Foods[x].id){
                        var path1 = x + "/Name";
                        var path2 = x + "/Price";
                        update(updateFoods,{
                            [path1]: inputs[i].value,
                            [path2]: inputs[i+1].value
                        });
                    }
                }
            }

            for (var i = 0; i < inputs2.length; i+=2) {
                const data = snapshot.val(); //Data is string array
                for(let x in data.Market){
                    
                    if( (i+2)/2 ==data.Market[x].id){
                        var path1 = x + "/Name";
                        var path2 = x + "/Price";
                        update(updateMarket,{
                            [path1]: inputs2[i].value,
                            [path2]: inputs2[i+1].value
                        });
                    }
                }
            }

            // for (var i = 0; i < inputs3.length; i+=0) {
            //     const data = snapshot.val(); //Data is string array
            //     for(let x in data.Drinks){
            //         console.log(x)
            //         if( (i+2)/2 ==data.Drinks[x].id){
            //             console.log(inputs3[i].value)
            //             var path1 = x + "/Name";
            //             var path7 = x + "/Price";
            //             var path2 = x + "/tallPrice";
            //             var path3 = x + "/grandePrice";
            //             var path4 = x + "/ventiPrice";
            //             var path5 = x + "/ventiHotPrice";
            //             var path6 = x + "/ventiIcedPrice";
            //             if(x<4){
            //                 update(updateDrinks,{
            //                     [path1]: inputs3[i].value,
            //                     [path2]: inputs3[i+1].value,
            //                     [path3]: inputs3[i+2].value,
            //                     [path5]: inputs3[i+3].value,
            //                     [path6]: inputs3[i+4].value
            //                 });
            //                 i+=5
            //             }
            //             if(x==4){
            //                 i=-1;
            //                 update(updateDrinks,{
            //                     [path1]: inputs3[i].value,
            //                     [path2]: inputs3[i+1].value,
            //                     [path3]: inputs3[i+2].value,
            //                     [path5]: inputs3[i+3].value
            //                 });
            //                 i+=4;
            //             }
            //             if(x==6){
            //                 i=-1;
            //                 update(updateDrinks,{
            //                     [path1]: inputs3[i].value,
            //                     [path2]: inputs3[i+1].value,
            //                     [path3]: inputs3[i+2].value
            //                 });
            //                 i+=3;
            //             }
            //             if(x==5 || (x >6 && x<14) ){
            //                 if(x!=5){
            //                     i+=1;
            //                 }
            //                 update(updateDrinks,{
            //                     [path1]: inputs3[i].value,
            //                     [path2]: inputs3[i+1].value,
            //                     [path3]: inputs3[i+2].value,
            //                     [path4]: inputs3[i+3].value

            //                 });
            //                 i+=4;
            //             }
            //             if( x>13){
            //                 i=-2;
            //                 update(updateDrinks,{
            //                     [path1]: inputs3[i].value,
            //                     [path7]: inputs3[i+1].value

            //                 });
            //                 i+=2;
            //             }
                        
            //         }
            //     }
            // }

        });
        window.location.href="manage_admin.html";
        alert("Changes Saved Successfully!")
        
    }
});