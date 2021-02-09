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
    console.log("All the list: ", listOfPlaces);
    loadMap();
    let cuisineArr = await getCuisineType()
    console.log("all cuisine:" ,cuisineArr)
   
    let dropdownOption = document.querySelector(".displayCuisine")
    for(let i of cuisineArr) {
        let newCheckBox = `
        <input type="checkbox" class="cuisine" name="${i}" value="${i.toLowerCase().replace(" ","-")}"/>
        <label>${i}</label>
        <p>
        `
        dropdownOption.innerHTML += newCheckBox;
    }
    

})

