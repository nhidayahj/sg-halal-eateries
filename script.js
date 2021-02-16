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


    document.querySelector("#afford").addEventListener('click', function () {
        map.removeLayer(showAllLayer)
        map.removeLayer(midLayer)
        
        let affordPriceList = getPriceRangeLatLng(cleanFullData, priceList['affordable'])
        // showMarkerTooltip(map, affordPriceList, affordLayer);
        userSelectionOptions(affordPriceList, affordLayer)

    })

    document.querySelector("#mid_range").addEventListener('click', function () {
         map.removeLayer(showAllLayer)
         map.removeLayer(affordLayer)
         
        let midPriceList = getPriceRangeLatLng(cleanFullData, priceList['mid_range'])
        //showMarkerTooltip(map, midPriceList, midLayer);
        userSelectionOptions(midPriceList, midLayer)
    })

})











