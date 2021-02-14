async function loadData() {
    let response = await axios.get("data.json");
    let listOfPlaces = response.data;
    return listOfPlaces;
}

// get the list of categories type for filter options
async function getCuisineType() {
    let listOfPlaces = await loadData()
    let cuisineArr = [];
    let allBusinesses = listOfPlaces.moreBusinesses
    //    console.log(allBusinesses)
    for (let i of allBusinesses) {
        for (let x of i.categories) {
            if (cuisineArr.includes(x.title)) {
                cuisineArr;
            } else {
                cuisineArr.push(x.title)
            }
        }
    }
    return cuisineArr;
}

//create the list of checkboxes in Cuisine filter 
async function createCuisineCheckBox() {
    let cuisineArr = await getCuisineType();
    let dropdownOption = document.querySelectorAll(".displayCuisine")
    for(let i of cuisineArr) {
        let newCheckBox = `
        <input type="checkbox" class="cuisine" name="${i}" value="${i.toLowerCase().replace(" ","-")}"/>
        <label>${i}</label>
        <p>
        `
        dropdownOption.innerHTML += newCheckBox;
    }
}