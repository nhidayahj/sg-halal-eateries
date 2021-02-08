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

// async function createCuisineCheckBox() {
//     let cuisineArr = await getCuisineType();
//     for (let i of cuisineArr) {
//         //let cuisineCheckbox = document.querySelector(".cuisine-checkbox")
//         let input = document.createElement("input")
//         input.setAttribute("type", "checkbox");
//         input.className="cuisine";
//         input.name=i;
//         input.innerHTML=i;
//         input.value = i.toLowerCase().replace(" ","-");
//         //cuisineCheckbox.appendChild(input);
       
//         // console.log(input)
//     }
// }