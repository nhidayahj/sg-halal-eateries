let findBtn = document.querySelector("#find-btn")
findBtn.addEventListener('click', async () => {
    let searchValue = document.querySelector("#search-bar").value;
    console.log(searchValue)

})

window.addEventListener('DOMContentLoaded', async () => {
    let allData = await loadData()
    let listOfPlaces = allData.moreBusinesses;
    //raw data info:
    console.log("All the list: ", listOfPlaces);
    //filtered data:
    let cleanFullData = await getUpdatedList(listOfPlaces)
    console.log("clean list: ", cleanFullData)

    //load map with ALL the markers at initial load page
    showMarkerTooltip(map, cleanFullData, showAllLayer)

    let cuisineArr = await getCuisineType()
    //console.log("all cuisine:" ,cuisineArr)

    // display cuisine checkbox in Cuisine filter 
    await createCuisineCheckBox();
    //store user's cuisine selection
    let userCuisineSelection = [];
    let cuisineFilterSelectBtn = document.querySelector("#cuisineFilterSuccessBtn")
    cuisineFilterSelectBtn.addEventListener('click', () => {
        let cuisineSelection = document.querySelectorAll(".cuisine")
        for (let i of cuisineSelection) {
            if (i.checked) {
                userCuisineSelection.push(i.value)
            }
        }
        //console.log(userCuisineSelection)
    })

    // categorize data by their price range
    let priceList = {
        'affordable': [],
        'mid_range': [],
        'expensive': []
    }

    for (let i of cleanFullData) {
        if (i.priceRange) {
            if (i.priceRange == 1) {
                priceList['affordable'].push(i.name);
            } else if (i.priceRange == 2) {
                priceList['mid_range'].push(i.name);
            } else if (i.priceRange >= 3) {
                priceList['expensive'].push(i.name);
            }
        }
    }
    // 13-affordable, 11-mid_range, 0-exp
    //console.log("List of price Range: ", priceList)



    // categorize data by ratings range
    let ratingsList = {
        'low': [],
        'medium': [],
        'high': []
    }
    for (let i of cleanFullData) {
        if (i.ratings < 3) {
            ratingsList['low'].push(i.name)
        } else if (i.ratings <= 4) {
            ratingsList['medium'].push(i.name)
        } else if (i.ratings <= 5) {
            ratingsList['high'].push(i.name)
        }
    }
    //console.log(ratingsList)



    // let currentLayer;
    // let isThereLayer = false;

    document.querySelector("#afford").addEventListener('click', function () {
        map.removeLayer(showAllLayer)
        map.removeLayer(midLayer)
        map.removeLayer(lowRatingsLayer)
        map.removeLayer(medRatingsLayer)
        map.removeLayer(highRatingsLayer)


        let affordPriceList = getPriceRangeLatLng(cleanFullData, priceList['affordable'])
        //checks if there is an existing previous layer on map
        // isThereLayer = checksExistingLayer(isThereLayer,affordPriceList,affordLayer)

        userSelectionOptions(affordPriceList, affordLayer)

    })

    document.querySelector("#mid_range").addEventListener('click', function () {
        map.removeLayer(showAllLayer)
        map.removeLayer(affordLayer)
        map.removeLayer(lowRatingsLayer)
        map.removeLayer(medRatingsLayer)
        map.removeLayer(highRatingsLayer)

        //checks 
    
        let midPriceList = getPriceRangeLatLng(cleanFullData, priceList['mid_range'])
        // isThereLayer = checksExistingLayer(isThereLayer,midPriceList,midLayer)
        
        userSelectionOptions(midPriceList, midLayer)
    })


    document.getElementById('low').addEventListener('click', function () {
        map.removeLayer(showAllLayer)
        map.removeLayer(affordLayer)
        map.removeLayer(midLayer)
        map.removeLayer(medRatingsLayer)
        map.removeLayer(highRatingsLayer)

        let lowRatings = getRatingsLatLng(cleanFullData, ratingsList['low'])
        userSelectionOptions(lowRatings, lowRatingsLayer)
    })

    document.getElementById('medium').addEventListener('click', function () {
        map.removeLayer(showAllLayer)
        map.removeLayer(affordLayer)
        map.removeLayer(midLayer)
        map.removeLayer(lowRatingsLayer)
        map.removeLayer(highRatingsLayer)

        let medRatings = getRatingsLatLng(cleanFullData, ratingsList['medium'])
        userSelectionOptions(medRatings, medRatingsLayer)

    })

    document.getElementById('high').addEventListener('click', function () {
        map.removeLayer(showAllLayer)
        map.removeLayer(affordLayer)
        map.removeLayer(midLayer)
        map.removeLayer(lowRatingsLayer)
        map.removeLayer(medRatingsLayer)

        let highRatings = getRatingsLatLng(cleanFullData, ratingsList['high'])
        userSelectionOptions(highRatings, highRatingsLayer)

    })



})











