import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, update, onValue, set, get, child, remove} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


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
    let IDHeader = document.createElement("h2");
    IDHeader.innerText = "ID";
    IDHeader.style="display: inline; padding: 20px; position:relative ;right: 110px; bottom:20px;";
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
    grillDiv.appendChild(IDHeader);
    grillDiv.appendChild(NameHeader);
    grillDiv.appendChild(PriceHeader);
    grillDiv.appendChild(br)
    
    for(let x in data){
        let  br = document.createElement("br");
        let id = document.createElement("input");
        let name = document.createElement("input");
        let price = document.createElement("input");

        id.setAttribute("readonly", "true");
        id.style = "display: inline;padding: 10px; position: relative; width: 20px";
        name.style = "display: inline;margin-left:10px;padding: 10px; position: relative;";
        price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

        id.value = x
        name.value = data[x].Name;	// Change the text of the element
        price.value = data[x].Price;	// Change the text of the element
        // Username.value = data.Users[x].User_Username;	// Change the text of the element
        grillDiv.appendChild(id);
        grillDiv.appendChild(name);
        grillDiv.appendChild(price);
        grillDiv.appendChild(br)
    }
    //delting food by ID                          
    let deleteFButton = document.createElement("Button");
    deleteFButton.innerText = "Delete Food by ID";
    deleteFButton.id="deleteFButton";
    deleteFButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
    grillDiv.appendChild(deleteFButton)
    
    document.getElementById("deleteFButton").addEventListener("click", function(){
        let foodID=window.prompt("Enter food ID to delete:");
        for(let x in data){
            if(x==foodID){
                remove(ref(db, "Foods/" + x));
                alert(foodID + "Successfully Deleted!")
            }
        }
    });

    //adding A food                   
    let addFButton = document.createElement("Button");
    addFButton.innerText = "Add Food";
    addFButton.id="addFButton";
    addFButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
    grillDiv.appendChild(addFButton)
    
    document.getElementById("addFButton").addEventListener("click", function(){
        // let foodID=window.prompt("Enter food ID:");
        let foodName =window.prompt("Enter Food Name:");
        let foodPrice=window.prompt("Enter Food Price:");

        if(foodName.length != 0 && foodPrice.length != 0){
            const postListRef = ref(db, 'Foods/'); //Potential Solution 1
            const newPostRef = push(postListRef);
            set(newPostRef, {
                Name: foodName,
                Price: foodPrice
            })
            alert("Food", foodName, "Added!");
        }else{
            alert("Failed!");
        }
        
    });


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
        let ID1Header = document.createElement("h2");
        ID1Header.innerText = "ID";
        ID1Header.style="display: inline; padding: 20px; position:relative ;right: 110px; bottom:20px;";
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
        marketDiv.appendChild(ID1Header);
        marketDiv.appendChild(Name1Header);
        marketDiv.appendChild(Price1Header);
        marketDiv.appendChild(br1)

        for(let x in data){
            let  br = document.createElement("br");
            let id = document.createElement("input");
            let name = document.createElement("input");
            let price = document.createElement("input");


            id.setAttribute("readonly", "true");
            id.style = "display: inline;padding: 10px; position: relative; width: 20px";
            name.style = "display: inline;padding: 10px;;margin-left: 10px; position: relative;";
            price.style = "display: inline;margin-left: 20px; display: inline;padding: 10px; position: relative; ";

            id.value=x;
            name.value = data[x].Name;	// Change the text of the element
            price.value = data[x].Price;	// Change the text of the element
            // Username.value = data.Users[x].User_Username;	// Change the text of the element
            marketDiv.appendChild(id);
            marketDiv.appendChild(name);
            marketDiv.appendChild(price);
            marketDiv.appendChild(br)
        }
        //delting a market item by ID                          
        let deleteMButton = document.createElement("Button");
        deleteMButton.innerText = "Delete Market Item by ID";
        deleteMButton.id="deleteMButton";
        deleteMButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
        marketDiv.appendChild(deleteMButton)
        
        document.getElementById("deleteMButton").addEventListener("click", function(){
            let marketID=window.prompt("Enter Market Item ID to delete:");
            for(let x in data){
                if(x==marketID){
                    remove(ref(db, "Market/" + x));
                    alert(marketID + "Successfully Deleted!")
                }
            }
        });

        //adding A market item                  
        let addMButton = document.createElement("Button");
        addMButton.innerText = "Add Market Item";
        addMButton.id="addMButton";
        addMButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
        marketDiv.appendChild(addMButton)
        
        document.getElementById("addMButton").addEventListener("click", function(){
            // let foodID=window.prompt("Enter food ID:");
            let marketName =window.prompt("Enter Market Item Name:");
            let marketPrice=window.prompt("Enter Market Item Price:");

            if(marketName.length != 0 && marketPrice.length != 0){
                const postListRef = ref(db, 'Market/'); 
                const newPostRef = push(postListRef);
                set(newPostRef, {
                    Name: marketName,
                    Price: marketPrice
                })
                alert("Food", marketName, "Added!");
            }else{
                alert("Failed!");
            }
            
        });
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
        let ID2Header = document.createElement("h2");
        ID2Header.innerText = "ID";
        ID2Header.style="display: inline; padding: 20px; position:relative ;right: 90px; bottom:20px;";
        let Name2Header = document.createElement("h2");
        Name2Header.innerText = "Name";
        Name2Header.style="display: inline; padding: 20px; position:relative; bottom:20px; right: 70px;";
        let PricingHeader = document.createElement("h2");
        PricingHeader.style="display: inline; padding: 20px; position: relative; left:40px; bottom:20px;";
        PricingHeader.innerText = "Pricing";



        let  br2 = document.createElement("br");
        let  hr2 = document.createElement("hr");
        hr2.style=" padding: 0px; position:relative; bottom:20px; color:#00853E;";
        drinkDiv.appendChild(Section2Header);
        drinkDiv.appendChild(hr2)
        drinkDiv.appendChild(ID2Header);
        drinkDiv.appendChild(Name2Header);
        drinkDiv.appendChild(PricingHeader);
        drinkDiv.appendChild(br2);

        for(let x in data){
            
            let  br = document.createElement("br");
            let  br2 = document.createElement("br");
            let id = document.createElement("input");
            let name = document.createElement("input");
            let pricing = document.createElement("input");

 
            id.setAttribute("readonly", "true");
            id.style = "display: inline;padding: 10px; position: relative; width: 20px";
            name.style = "display: inline;padding: 10px;;margin-left: 10px; position: relative;width:125px;";
            pricing.style = "display: inline;margin-left: 20px;width:200px; display: inline;padding: 10px; position: relative; ";

            id.value = x;
            name.value = data[x].Name;
            pricing.value = data[x].Pricing;	// Change the text of the element

            drinkDiv.appendChild(id)
            drinkDiv.appendChild(name)
            drinkDiv.appendChild(pricing)
            drinkDiv.appendChild(br)
            // drinkDiv.appendChild(br2)
        }
                //delting a market item by ID                          
                let deleteDButton = document.createElement("Button");
                deleteDButton.innerText = "Delete Drink by ID";
                deleteDButton.id="deleteDButton";
                deleteDButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
                drinkDiv.appendChild(deleteDButton)
                
                document.getElementById("deleteDButton").addEventListener("click", function(){
                    let drinkID=window.prompt("Enter Drink ID to delete:");
                    for(let x in data){
                        if(x==drinkID){
                            remove(ref(db, "Drinks/" + x));
                            alert(drinkID + "Successfully Deleted!")
                        }
                    }
                });
        
                //adding A market item                  
                let addDButton = document.createElement("Button");
                addDButton.innerText = "Add Market Item";
                addDButton.id="addDButton";
                addDButton.style="display: inline; padding: 10px; margin-top: 30px;margin-bottom: 20px;";
                drinkDiv.appendChild(addDButton)
                
                document.getElementById("addDButton").addEventListener("click", function(){
                    let drinkName =window.prompt("Enter Drink Name:");
                    let drinkPrice=window.prompt("Enter Drink Price (if multiple prices: seperate by spaces):");
        
                    if(drinkName.length != 0 && drinkPrice.length != 0){
                        const postListRef = ref(db, 'Drinks/'); 
                        const newPostRef = push(postListRef);
                        set(newPostRef, {
                            Name: drinkName,
                            Pricing: drinkPrice
                        })
                        alert("Drink", drinkName, "Added!");
                    }else{
                        alert("Failed!");
                    }
                    
                });
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

            for (var i = 0; i < inputs3.length; i+=2) {
                const data = snapshot.val(); //Data is string array
                for(let x in data.Drinks){
                    
                    if( (i+2)/2 ==data.Drinks[x].id){
                        var path1 = x + "/Name";
                        var path2 = x + "/Pricing";
                        update(updateDrinks,{
                            [path1]: inputs3[i].value,
                            [path2]: inputs3[i+1].value
                        });
                    }
                }
            }



        });
        window.location.href="manage_admin.html";
        alert("Changes Saved Successfully!")
        
    }
});