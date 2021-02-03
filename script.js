let loadData = document.querySelector("#load")
loadData.addEventListener('click', async function(){
    let response = await axios.get("https://www.yelp.com/c/singapore/halal")
    console.log(response.data)
})