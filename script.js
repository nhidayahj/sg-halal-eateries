// let baseURL = https://www.yelp.com/search/snippet?find_desc=Halal&find_loc=Singapore&limit=50

let searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click', ()=>{
    let searchValue = document.querySelector("#search-bar").value;
    //console.log(searchValue)

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
})

