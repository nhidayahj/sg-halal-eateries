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
    

    let cuisineArr = await getCuisineType()
    //console.log("all cuisine:" ,cuisineArr)

    // display cuisine checkbox in Cuisine filter 
    await createCuisineCheckBox();
    //store user's cuisine selection
    
    let cuisineFilterSelectBtn = document.querySelector("#cuisineFilterSuccessBtn")
    cuisineFilterSelectBtn.addEventListener('click', () => {
        let userCuisineSelection;
        let userSelect;
        let cuisineSelection = document.querySelectorAll(".cuisine")
        for (let i of cuisineSelection) {
            if (i.checked) {
                console.log("User selected: " , i.value)
                userSelect = getCuisineSelection(i.value);
            }
        }
        addCuisineLayers(cuisineLayer, userSelect)
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



    checksExistingLayer(currentLayer, cleanFullData)

    document.querySelector("#afford").addEventListener('click', function () {
        
        let affordPriceList = getPriceRangeLatLng(cleanFullData, priceList['affordable'])
        //checks if there is an existing previous layer on map
        checksExistingLayer(currentLayer, affordPriceList)
    })

    document.querySelector("#mid_range").addEventListener('click', function () {

        let midPriceList = getPriceRangeLatLng(cleanFullData, priceList['mid_range'])
        checksExistingLayer(currentLayer, midPriceList)
    })


    document.getElementById('low').addEventListener('click', function () {
        
        let lowRatings = getRatingsLatLng(cleanFullData, ratingsList['low'])
        checksExistingLayer(currentLayer, lowRatings)
    })

    document.getElementById('medium').addEventListener('click', function () {
        
        let medRatings = getRatingsLatLng(cleanFullData, ratingsList['medium'])
        checksExistingLayer(currentLayer, medRatings)

    })

    document.getElementById('high').addEventListener('click', function () {

        let highRatings = getRatingsLatLng(cleanFullData, ratingsList['high'])
        checksExistingLayer(currentLayer, highRatings)

    })



})











