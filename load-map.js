
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
    iconUrl: 'images/pin.png',
    iconSize: [32, 32],
    iconAnchor: [14, 30],
})

let currentLayer = L.markerClusterGroup();
currentLayer.addTo(map)

// markers.on('click', displayCards);


function userSelectionOptions(list) {
    let lat = parseFloat("");
    let lng = parseFloat("");
    let markers = null;
    for (let i of list) {
        lat = i.latitude;
        lng = i.longitude;
        name = i.name,
        ratings = i.ratings,
        photoURL = i.photoURL

        //create markers for each
        markers = L.marker([lat, lng], { icon: myIcon })
        //console.log(markers);
        //create a tooltip for each
        markers.bindPopup(`
        <p><b>${name}</b></p>
        <img src="${photoURL}" style="width:150px;height:150px"/>
        <p>Ratings: ${ratings}⭐</p>
        Click <a href=" #${name} ">here</a> for more information.
        `).openPopup()
        // markers.on('click', displayCards)
        markers.addTo(currentLayer)
        
    }

}



function checksExistingLayer(currentLayer, list) {
    if (map.hasLayer(currentLayer) == false) {
        // youLayer.clearLayers()
        userSelectionOptions(list)
    } else {
        youLayer.clearLayers()
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
    } else if (map.hasLayer(youLayer)) {
        youLayer.clearLayers()
        userSelectionOptions(list)
    }
}


// get userSearch value
function getUserSearch(userVal, cleanData) {
    let userSearch = []
    let userval = userVal.toLowerCase()
    for (let i of cleanData) {
        let name = i.name.toLowerCase()
        let address = i.full_address.toLowerCase()
        if (name.includes(userval) || (address.includes(userval))) {
            userSearch.push({
                'name': i.name,
                'latitude': i.latitude,
                'longitude': i.longitude,
                'ratings': i.ratings,
                'address':i.full_address,
                'photoURL':i.photoURL,
                'neighborhood':i.neighborhood
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



// show yourAreHere marker 
let youIcon = L.icon({
    iconUrl: 'images/you.png',
    iconSize: [32, 32],
    iconAnchor: [14, 30],
})

let youLayer = L.layerGroup()
youLayer.addTo(map)

let yourAreHere = (lat, lng) => {
    L.marker([lat, lng], { icon: youIcon }).bindPopup("You are here").openPopup().addTo(youLayer);
}
map.on('locationfound', yourAreHere);

// get GEO Location 
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        console.log("geo location is not supported")
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude
    // console.log(" Latitude: " + position.coords.latitude + ", Longitutude: " + position.coords.longitude) 
    yourAreHere(lat, lng)
}

