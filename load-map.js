
// loads initial map 
// base map 

let singapore = [1.3521, 103.8198]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// customize icon for marker 
let myIcon = L.icon({
    iconUrl: 'icons/pin.png',
    iconSize: [32, 32],
    iconAnchor: [14, 30],
})



let currentLayer = L.markerClusterGroup();
currentLayer.addTo(map)

function userSelectionOptions(list) {
    let lat = parseFloat("");
    let lng = parseFloat("");
    let markers = null;
    for (let i of list) {
        lat = i.latitude;
        lng = i.longitude;
        name = i.name,
            ratings = i.ratings

        //create markers for each
        markers = L.marker([lat, lng], { icon: myIcon })
        //create a tooltip for each
        markers.bindTooltip(`
        <p><b>${name}</b></p>
        <p>Ratings: ${ratings}⭐</p>
        <p>Click for more info</p>
        `).openTooltip()
        markers.addTo(currentLayer)
    }
}

function checksExistingLayer(currentLayer, list) {
    if (map.hasLayer(currentLayer) == false) {
        userSelectionOptions(list)
    } else {
        currentLayer.clearLayers()
        userSelectionOptions(list)
    } 
}

let cuisineLayer = L.markerClusterGroup();
cuisineLayer.addTo(map)

function addCuisineLayers(cuisineLayer, list) {
    if (map.hasLayer(currentLayer)) {
        currentLayer.clearLayers()
        userSelectionOptions(list)
    } else if (map.hasLayer(cuisineLayer) == false) {
        userSelectionOptions(list)
    } else if (map.hasLayer(showAllLayer)) {
        showAllLayer.clearLayers()
        userSelectionOptions(list)
    }
}


// get userSearch value
function getUserSearch(userVal, cleanData) {
    let userSearch = []
    for (let i of cleanData) {
        let name = i.name.toLowerCase()
        if (name.includes(userVal)) {
            userSearch.push({
                'name': i.name,
                'latitude': i.latitude,
                'longitude': i.longitude,
                'ratings': i.ratings
            })
        }
    }
    // user search value does not exists
    if (userSearch) {
        checksExistingLayer(currentLayer, userSearch)
    } else {
        return userSearch;
    }
    return userSearch;
}


// get GPS Location
// function displayAlert() {

// }



