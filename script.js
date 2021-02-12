let searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click', async () => {
    let searchValue = document.querySelector("#search-bar").value;
    console.log(searchValue)

})

window.addEventListener('DOMContentLoaded', async () => {
    let listOfPlaces = await loadData();
    console.log("All the list: ", listOfPlaces.moreBusinesses);
    loadMap();
    let cuisineArr = await getCuisineType()
    //console.log("all cuisine:" ,cuisineArr)

    // display cuisine checkbox in Cuisine filter 
    let displayCuisineFilters = await createCuisineCheckBox();
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

    // categories data by their price range
    let priceList = {
        'affordable':[],
        'mid_range': [],
        'expensive':[]
    }

    for (let i of listOfPlaces.moreBusinesses) {
        if (i.priceRange) {
            if (i.priceRange == 1) {
                priceList['affordable'].push(i.name);
            } else if (i.priceRange == 2) {
                priceList['mid_range'].push(i.name);
            } else if (i.priceRange >= 3) {
                priceList['expensrive'].push(i.name);
            }
        }
    }
    //console.log(priceList)


    //get the user's price selection from the 'Price Range' dropdown


    //all restaurant's list
    let add = getDataAddress(listOfPlaces)
    console.log("original add:" ,add)
    let add2 = getDataAddress2(listOfPlaces)
    console.log("clean add:" , add2)

    //find the lat-lng of each restaurant from data.json
    //test map API
    //getLatLng(add);

})
    
    









