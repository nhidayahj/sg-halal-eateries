
let listOfPlaces;
let cleanFullData;
window.addEventListener("DOMContentLoaded", async () => {
    listOfPlaces = await loadData();
    //raw data info:
    console.log("All the list: ", listOfPlaces);
    //filtered data:
    cleanFullData = await getUpdatedList(listOfPlaces);
    console.log("clean list: ", cleanFullData);

    // display all cards
    displayCards(cleanFullData);

    let cuisineArr = getCuisineType(cleanFullData);
    // display cuisine checkbox in Cuisine filter
    createCuisineCheckBox(cuisineArr);

    // get user inputs    
    $("#userSearch").keyup(function (event) {
        // when use clicks on 'Enter key'
        if (event.keyCode === 13) {
            $("#find-btn").click()
        }
    });

    $("#find-btn").click(function () {
        let userSearch = document.getElementById('userSearch').value
        let searchVal = getUserSearch(userSearch, cleanFullData);
        console.log(searchVal)
        displayCards(searchVal)

        if (searchVal) {
            if (searchVal.length > 1) {
                document.querySelector(".searchResult").innerHTML = `
                 <span style="font-weight:bold; color:rgb(18, 151, 18)">${searchVal.length} search results found .. </span>
            `
            } else if (searchVal.length == 1) {
                document.querySelector(".searchResult").innerHTML = `
                <span style="font-weight:bold; color:rgb(18, 151, 18)"> 1 search result found .. </span>
                `
            } else if (searchVal.length < 1) {
                document.querySelector(".searchResult").innerHTML = `
                <span style="color:red; font-weight:bold"> No result found .. </span>
                `
            }
        }
    })

    let getLocationBtn = document.querySelector("#getLoc")
    getLocationBtn.addEventListener('click', function () {
        getLocation();
    })

    //store user's cuisine selection
    let cuisineFilterSelectBtn = document.querySelector(
        "#cuisineFilterSuccessBtn"
    );
    cuisineFilterSelectBtn.addEventListener("click", () => {
        let userSelect;
        document.querySelector("#userSearch").value = "search by keywords";
        document.querySelector(".searchResult").innerHTML = "";

        let cuisineSelection = document.querySelectorAll(".cuisine");
        for (let i of cuisineSelection) {
            if (i.checked) {
                console.log("User selected: ", i.value);
                userSelect = getCuisineSelection(i.value);
            }
        }
        displayCards(userSelect);
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

    // resets back to original display after user interaction
    document.querySelector("#reset").addEventListener("click", () => {
        clearField();
        displayCards(cleanFullData);
        checksExistingLayer(currentLayer, cleanFullData);
    })

    document.querySelector("#afford").addEventListener("click", function () {
        clearField();
        let affordPriceList = getPriceRangeLatLng(
            cleanFullData,
            priceList["affordable"]
        );

        //display all cards 
        displayCards(affordPriceList);

        //checks if there is an existing previous layer on map
        console.log("Afford List: ", affordPriceList);
        checksExistingLayer(currentLayer, affordPriceList);
    });

    document.querySelector("#mid_range").addEventListener("click", function () {
        clearField();
        let midPriceList = getPriceRangeLatLng(
            cleanFullData,
            priceList["mid_range"]
        );
        displayCards(midPriceList);
        console.log("Mid Range List: ", midPriceList);
        checksExistingLayer(currentLayer, midPriceList);
    });

    let alertModal = document.getElementById('alert-modal')
    $("#alert-modal").click(function (event) {
        // when use clicks on 'Enter key'
        if (event.target == alertModal) {
            alertModal.style.display = 'none';
            let nodata = [];
            let cardContent = document.querySelector(".card-deck");
            cardContent.innerHTML = " ";
            clearField();
            checksExistingLayer(currentLayer, nodata);
        }
    });

    document.getElementById("low").addEventListener("click", function () {
        clearField();
        let lowRatings = getRatingsLatLng(cleanFullData, ratingsList["low"]);

        displayCards(lowRatings);

        console.log("Low ratings: ", lowRatings);
        checksExistingLayer(currentLayer, lowRatings);
    });

    document.getElementById("medium").addEventListener("click", function () {
        clearField();
        let medRatings = getRatingsLatLng(cleanFullData, ratingsList["medium"]);

        displayCards(medRatings);
        console.log("Medium Ratings: ", medRatings);
        checksExistingLayer(currentLayer, medRatings);
    });

    document.getElementById("high").addEventListener("click", function () {
        clearField();
        let highRatings = getRatingsLatLng(cleanFullData, ratingsList["high"]);
        displayCards(highRatings);
        console.log("High Ratings: ", highRatings);
        checksExistingLayer(currentLayer, highRatings);
    });
});
