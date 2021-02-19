
let listOfPlaces;
let cleanFullData;
window.addEventListener("DOMContentLoaded", async () => {
    listOfPlaces = await loadData();
    //raw data info:
    console.log("All the list: ", listOfPlaces);
    //filtered data:
    cleanFullData = await getUpdatedList(listOfPlaces);
    console.log("clean list: ", cleanFullData);




    let cuisineArr = getCuisineType(cleanFullData);
    //console.log("all cuisine:", cuisineArr);

    // display cuisine checkbox in Cuisine filter
    createCuisineCheckBox(cuisineArr);

    
    $("#userSearch").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#find-btn").click()
        }
    });

    $("#find-btn").click(function(){
        alert("Hello!")
    })


    //store user's cuisine selection
    let cuisineFilterSelectBtn = document.querySelector(
        "#cuisineFilterSuccessBtn"
    );
    cuisineFilterSelectBtn.addEventListener("click", () => {
        let userSelect;
        let cuisineSelection = document.querySelectorAll(".cuisine");
        for (let i of cuisineSelection) {
            if (i.checked) {
                console.log("User selected: ", i.value);
                userSelect = getCuisineSelection(i.value);
            }
        }
        addCuisineLayers(cuisineLayer, userSelect);
    });

    // categorize data by their price range
    let priceList = {
        affordable: [],
        mid_range: [],
        expensive: [],
    };

    for (let i of cleanFullData) {
        if (i.priceRange) {
            if (i.priceRange == 1) {
                priceList["affordable"].push(i.name);
            } else if (i.priceRange == 2) {
                priceList["mid_range"].push(i.name);
            } else if (i.priceRange >= 3) {
                priceList["expensive"].push(i.name);
            }
        }
    }
    // 13-affordable, 11-mid_range, 0-exp
    //console.log("List of price Range: ", priceList)

    // categorize data by ratings range
    let ratingsList = {
        low: [],
        medium: [],
        high: [],
    };
    for (let i of cleanFullData) {
        if (i.ratings < 3) {
            ratingsList["low"].push(i.name);
        } else if (i.ratings <= 4) {
            ratingsList["medium"].push(i.name);
        } else if (i.ratings <= 5) {
            ratingsList["high"].push(i.name);
        }
    }
    //console.log(ratingsList)

    // initial display of ALL markers
    checksExistingLayer(currentLayer, cleanFullData);

    document.querySelector("#afford").addEventListener("click", function () {
        let affordPriceList = getPriceRangeLatLng(
            cleanFullData,
            priceList["affordable"]
        );
        //checks if there is an existing previous layer on map
        console.log("Afford List: ", affordPriceList);
        checksExistingLayer(currentLayer, affordPriceList);
    });

    document.querySelector("#mid_range").addEventListener("click", function () {
        let midPriceList = getPriceRangeLatLng(
            cleanFullData,
            priceList["mid_range"]
        );
        console.log("Mid Range List: ", midPriceList);
        checksExistingLayer(currentLayer, midPriceList);
    });

    document.getElementById("low").addEventListener("click", function () {
        let lowRatings = getRatingsLatLng(cleanFullData, ratingsList["low"]);
        console.log("Low ratings: ", lowRatings);
        checksExistingLayer(currentLayer, lowRatings);
    });

    document.getElementById("medium").addEventListener("click", function () {
        let medRatings = getRatingsLatLng(cleanFullData, ratingsList["medium"]);
        console.log("Medium Ratings: ", medRatings);
        checksExistingLayer(currentLayer, medRatings);
    });

    document.getElementById("high").addEventListener("click", function () {
        let highRatings = getRatingsLatLng(cleanFullData, ratingsList["high"]);
        console.log("High Ratings: ", highRatings);
        checksExistingLayer(currentLayer, highRatings);
    });
});
