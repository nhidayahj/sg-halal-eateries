let searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click', async () => {
    let searchValue = document.querySelector("#search-bar").value;
    console.log(searchValue)

})



// let loadData = document.querySelector("#load")

// loadData.addEventListener('click', async function(){
//     let response = await axios.get("data.json");
//     //console.log(response.data)
// })


window.addEventListener('DOMContentLoaded', async () => {
    let listOfPlaces = await loadData();
    console.log(listOfPlaces);
    loadMap();
    let cuisineArr = getCuisineType()
    console.log(cuisineArr)


    // Show Modal view for Cuisine type 
    let filterByCuisine = document.querySelector("#cuisineType");
    let optionsSet = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
    }

    filterByCuisine.addEventListener('click', () => {
        $('#cuisineList').modal(optionsSet);
        let displayCuisine = createCuisineCheckBox();
    })

})

