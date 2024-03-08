/*
    Team: 36
    Names: Jacob Smith and Daniel Springman
    Midterm - Home
*/


//Read file with motorcycleTypes
fetch("./data.json")
    .then(response => response.json())
    .then(motorcycles => loadMotorcycles(motorcycles));

//Function loadMotorcycles
function loadMotorcycles(motorcycles){
    var CardType = document.getElementById("col");
    var cards = [];

    //read every type from the array
    for(var i = 0; i <motorcycles.features.length; i++){
        let category = motorcycles.features[i].category;
        let description = motorcycles.features[i].description;
        let price = motorcycles.features[i].price;
        let pros = motorcycles.features[i].pros;
        let cons = motorcycles.features[i].cons;
        let url = motorcycles.features[i].url;
        let card = "card" + i.toString();
    
        let AddCardType = document.createElement("div");
        AddCardType.classList.add("col");

        //Create Bootstrap Card
        AddCardType.innerHTML = `
        <div id=${card} class="card shadow-sm custom-card">
            <div style="position: relative;">
                <img src=${url} class="card-img-top img-fluid" style="max-width: 1280px; max-height: 720px;" alt="...">
                    <div class="card-body" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; padding: 10px; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
                        <p class="card-text" style="font-size: 16px; font-weight: bold; background-color: #001221; padding: 2px;">
                            Product ID: ${motorcycles.features[i].productId}
                        </p>
                    
                        <p class="card-text" style="font-size: 25px; color: black; font-weight: bold; background-color: yellow; padding: 5px; align-self: flex-end;border: 1px solid black;">
                                Avg: $${price}
                        </p>

                        <div class="d-flex justify-content-between align-items-center"></div>

                        <p class="card-text2" style="font-size: 50px; font-weight: bold; font-family: Baskerville; text-shadow: 2px 2px 4px #000, 0 0 0 #000, 2px 2px 6px #000; text-align: center;">
                            <a href="./motorcycleTypes.html#`+category+`" style="text-decoration: none; color: inherit;" onmouseover="this.style.color='yellow'" onmouseout="this.style.color='inherit'">${category}</a>
                        </p>
                </div>
            </div>
        </div>
        `;

        //Append new division
        CardType.appendChild(AddCardType);
        let ccard = document.getElementById(card);
        cards.push(ccard);

    }//end of for loop
}//end of function

