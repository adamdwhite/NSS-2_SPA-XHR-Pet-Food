"use strict";

console.log('pet food js');

//Variables for the dog and cat food datasets:

//Functions to load the dog and cat foods from their JSON files:

function loadDogFoods(callBackToInvoke) {

    let getFoods = new XMLHttpRequest();

    getFoods.addEventListener("load", function(event) {
        console.log("fresh dog food, coming right up");
        let dogFood = JSON.parse(this.responseText);
        callBackToInvoke(dogFood);
        return dogFood;
    });

    getFoods.addEventListener("error", function(event) {
        console.log("dataFailed", event);
    });

    getFoods.open("GET", "dogfood.json");
    getFoods.send();
}

//Functions to load the dog and cat foods from their JSON files:

function loadCatFoods(callBackToInvoke) {

    let getFoods = new XMLHttpRequest();

    getFoods.addEventListener("load", function(event) {
        console.log("fresh cat food, coming right up");
        let catFood = JSON.parse(this.responseText);
        callBackToInvoke(catFood);
        return catFood;
    });

    getFoods.addEventListener("error", function(event) {
        console.log("dataFailed", event);
    });

    getFoods.open("GET", "catfood.json");
    getFoods.send();
}

//Ivoke load functions with print functions as CALLBACKs 
loadDogFoods(printDogFoods);
loadCatFoods(printCatFoods);


//Function to print dog food dataset to the DOM
function printDogFoods(dogFood) {
    //For loops that iterate over dog food data sets to compile and organize the data for DOM
    for (var i = 0; i < dogFood.dog_brands.length; i++) {
        let stuffToPrint = "";
        let innerStuffToPrint = "";
        let containerLabel = "";

        stuffToPrint += `<div class="foodName"><h1>Brand: ${dogFood.dog_brands[i].name}</h1></div>`
        for (var j = 0; j < dogFood.dog_brands[i].types.length; j++) {
            stuffToPrint += `<div class="foodType"><h3>Food type: ${dogFood.dog_brands[i].types[j].type}</h3></div>`;
            for (var k = 0; k < dogFood.dog_brands[i].types[j].volumes.length; k++) {
                innerStuffToPrint += `<div class="sizeAndPrice"><span>Size: ${dogFood.dog_brands[i].types[j].volumes[k].name} -- </span><span>Price: $${dogFood.dog_brands[i].types[j].volumes[k].price}</span></div>`;
            }
            stuffToPrint += `<div class="typeContainer"><div class="sizeAndPriceContainer">${innerStuffToPrint}</div></div>`;
        }

        //Print the compiled data
        document.getElementById("dogFood").innerHTML += `<section class="petFoodContainer">${stuffToPrint}</section>`;
    };
}


//Function to print cat food dataset to the DOM
function printCatFoods(catFood) {

    ////For loops that iterate over cat food data sets to compile and organize the data for DOM
    for (var i = 0; i < catFood.cat_brands.length; i++) {
        let stuffToPrint = "";
        let innerStuffToPrint = "";
        let containerLabel = "";
        let breedsToPrint = "";

        stuffToPrint += `<div class="foodName"><h1>Brand: ${catFood.cat_brands[i].name}</h1></div>`
        for (var q = 0; q < catFood.cat_brands[i].breeds.length; q++) {
            breedsToPrint += `<div class="breed">${catFood.cat_brands[i].breeds[q]}</div>`
        }
        stuffToPrint += `<div class="breedNames"><h3>Best for these Breeds: </h3><div class="breedContainer">${breedsToPrint}</div></div>`;
        for (var j = 0; j < catFood.cat_brands[i].types.length; j++) {
            stuffToPrint += `<div class="foodType"><h3>Food type: ${catFood.cat_brands[i].types[j].type}</h3></div>`;
            for (var k = 0; k < catFood.cat_brands[i].types[j].volumes.length; k++) {
                innerStuffToPrint += `<div class="sizeAndPrice"><span>Size: ${catFood.cat_brands[i].types[j].volumes[k].name} -- </span><span>Price: $${catFood.cat_brands[i].types[j].volumes[k].price}</span></div>`;
            }
            stuffToPrint += `<div class="typeContainer"><div class="sizeAndPriceContainer">${innerStuffToPrint}</div></div>`;
        }

        // ****** PRINT COMPILED DATA TO DOM ****** //
        document.getElementById("catFood").innerHTML += `<section class="petFoodContainer">${stuffToPrint}</section>`;
    };
}