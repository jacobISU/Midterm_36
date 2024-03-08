/*
    Team: 36
    Names: Jacob Smith and Daniel Springman
    Midterm - Types
*/

// Read file with motorcycleTypes:
fetch("./types.json")
    .then(response => response.json())
    .then(motorcycles => loadMotorcycles(motorcycles))
    .then(() => {
        var fragment = window.location.hash.substring(1);
        console.log(fragment);
        scrollToSection(fragment);
    })
    .catch(error => console.error('Error loading motorcycles:', error));

//Function loadMotorcycles:
function loadMotorcycles(motorcycles){
    var CardType = document.getElementById("col");
    var cards = [];
    reloadFlag = true;

    //read every type from the array
    for(var i = 0; i <motorcycles.types.length; i++){
        let category = motorcycles.types[i].category;
        let description = motorcycles.types[i].description;
        let price = motorcycles.types[i].price;
        let pros = motorcycles.types[i].pros;
        let cons = motorcycles.types[i].cons;
        let fun = motorcycles.types[i].fun;
        let url = motorcycles.types[i].url;
        let card = "card" + i.toString();
    
        let AddCardType = document.createElement("div");
        AddCardType.classList.add("col");
        let modalId = `infoModal${i}`;
        let buttonId = `infoButton${i}`;

        //create Bootstrap Card
        AddCardType.innerHTML = `
            <div id=${category} class="card shadow-sm custom-card">
                <img src=${url} class="card-img-top img-fluid" style="max-width: 1280px; max-height: 720px;" alt="..."></img> 
                <div class="card-body">
                    <p class="card-text" style="font-size: 30px;"><strong>${category}</strong></p>
                    <p>FUN FACT: "${fun}"</p>
                    <p>PROS: "${pros}"</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary view-button" data-bs-toggle="modal" data-bs-target="#${modalId}">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('modalBody').innerHTML += `
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="infoModalLabel">${category}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Category:</strong> ${category}</p>
                        <p><strong>Description:</strong> ${description}</p>
                        <p><strong>Price:</strong> $${price}</p>
                        <p><strong>Pros:</strong> ${pros}</p>
                        <p><strong>Cons:</strong> ${cons}</p>
                        <!-- Add any other information you want to display -->
                    </div>
                </div>
            </div>
        </div>
        `;

        //append new division
        CardType.appendChild(AddCardType);

        let ccard = document.getElementById(card);
        cards.push(ccard);

    }//end of for loop
    console.log(cards);
}//end of function


// Function to scroll to a specific section by ID
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        // Use smooth scrolling to the specified section
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with ID "${sectionId}" not found.`);
    }

}


