let searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click', async ()=>{
    let searchValue = document.querySelector("#search-bar").value;
    console.log(searchValue)
  
})

// Show Modal view for Cuisine type 
let filterByCuisine = document.querySelector("#cuisineType");
let optionsSet = {
    backdrop:true,
    keyboard:true,
    focus:true,
    show:true
}

filterByCuisine.addEventListener('click', ()=>{
    $('#cuisineList').modal(optionsSet);
    
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

   //get category type (i.e cuisine type)
   let cuisineArr = [];
   let allBusinesses = listOfPlaces.moreBusinesses
   console.log(allBusinesses)
   for (let i of allBusinesses){
       for (let x of i.categories) {
           if (cuisineArr.includes(x.title)) {
               cuisineArr;
           } else {
               cuisineArr.push(x.title)
           }
       }
   }
   console.log(cuisineArr)
})

