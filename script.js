let loadData = document.querySelector("#load")

loadData.addEventListener('click', async function(){
    //let response = await axios.get(baseURL + '?lat=' + lat + '?lng=' + lng)
    //let response = await axios.get(baseURL+id)
    let response = await axios.get("data.json");
    console.log(response.data)
})

// window.addEventListener('DOMContentLoaded', () => {
//     let oriAddress = 
// })

