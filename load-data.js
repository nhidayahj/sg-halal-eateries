async function loadData () {
    let response = await axios.get("data.json");
    let listOfPlaces = response.data;
    return listOfPlaces; 
}