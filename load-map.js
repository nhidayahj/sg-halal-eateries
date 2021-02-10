// let singapore = [1.29, 103.85]; // #1 Singapore latlng
//     let map = L.map('map').setView(singapore, 13); // #2 Set the center point

//     // setup the tile layers
//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox/streets-v11',
//         tileSize: 512,
//         zoomOffset: -1,
//         accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
//     }).addTo(map);



let mapOfPlaces = loadData();
// get all the addresses from data.json 
function getDataAddress(data){
    let addressCollection = data.moreBusinesses
    let addresses = {}
    for (let i of addressCollection) {
        console.log("Address List: ", i.addressLine1)
    }
}

// get individial lat-lng 
params = {
    'searchVal': "", 
    'returnGeom': "Y", 
    'getAddrDetails': "N"
}

function loadMap(lat, lng) {
    let restaurant = [1.303220, 103.858790]; // #1 Singapore latlng
    let map = L.map('map').setView(restaurant, 13); // #2 Set the center point

    // setup the tile layers
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    }).addTo(map);

    let restMarker = L.marker([1.303220, 103.858790])
    restMarker.addTo(map);

}
