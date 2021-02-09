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

    let priceList = {}
    let affordable = [];
    let mid_range = [];
    let expensive = [];


    for (let i of listOfPlaces.moreBusinesses) {
        if (i.priceRange) {
            if (i.priceRange == 1) {
                affordable.push(i.name);
            } else if (i.priceRange == 2) {
                mid_range.push(i.name)
            } else if (i.priceRange >= 3) {
                expensive.push(i.name)
            }
        }
        priceList['affordable'] = affordable;
        priceList['mid_range'] = mid_range;
        priceList['expensive'] = expensive;
    }
    // console.log(priceList)
})
    
    









