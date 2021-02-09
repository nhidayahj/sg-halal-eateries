let searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click', async () => {
    let searchValue = document.querySelector("#search-bar").value;
    console.log(searchValue)

})

window.addEventListener('DOMContentLoaded', async () => {
    let listOfPlaces = await loadData();
    //console.log("All the list: ", listOfPlaces);
    loadMap();
    let cuisineArr = await getCuisineType()
    //console.log("all cuisine:" ,cuisineArr)

    let displayCuisineFilters = await createCuisineCheckBox();

    let cuisineFilterSelectBtn = document.querySelector("#cuisineFilterSuccessBtn")
    cuisineFilterSelectBtn.addEventListener('click', () => {
        let cuisineSelection = document.querySelectorAll(".cuisine")
        for (let i of cuisineSelection) {
            if(i.checked){
                console.log(i.value)
            }
        }
    })


})

