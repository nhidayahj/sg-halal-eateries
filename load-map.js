
// loads initial map 
// base map 

let singapore = [1.3521, 103.8198]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 10,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// call markers & tooltip func
//showMarkerTooltip(map, data);


let showAllLayer = L.markerClusterGroup();
let affordLayer = L.markerClusterGroup();
let midLayer = L.markerClusterGroup();


// function to create the markers & display its info in a tooltip 
function showMarkerTooltip(map, data, layer) {
    let lat = parseFloat("");
    let lng = parseFloat("");
    let markers = null;
    for (let i of data) {
        lat = i.latitude;
        lng = i.longitude;
        name = i.name,
        ratings = i.ratings

        //create markers for each
        markers = L.marker([lat, lng])
        //create a tooltip for each
        markers.bindTooltip(`
        <p><b>${name}</b></p>
        <p>Ratings: ${ratings}⭐</p>
        <p>Click for more info</p>
        `).openTooltip();
        markers.addTo(layer);
    }
    layer.addTo(map)
}

// function userSelectionOptions(layer) {
//     if (!map.hasLayer(layer)) {
//         map.addLayer(layer)
//     } else {
//         map.remove(layer)
//     }
// }

// create user dropdown selections
// document.querySelector("#afford").addEventListener('click', function () {
//     let data = getPriceRangeLatLng()
//     userSelectionOptions(affordLayer)
// })

// document.querySelector("#mid_range").addEventListener('click', function () {

//     userSelectionOptions(midRangeLayer)
// })







// create the price layers
// layer list to contain all the dropdown menus 

// function forEachFeature(layer) {
//     for (let i of layer) {
//         let lat = i.latitude;
//         let lng = i.longitude;
//         new L.marker([lat, lng]).bindTooltip(`
//             <p>${feature.name}</p>
//             <p>${feature.ratings}⭐</p>
//         `).addTo(affordLayer)
//     }
// }

// let affordLayer = L.markerClusterGroup();
// function getAffordLayer(address) {
//     let affordResult = getUpdatedList(address)
//     console.log(affordResult)
//     layer = L.geoJson(affordResult, {
//         onEachFeature: forEachFeature
//     }).addTo(map)
// }

// getAffordLayer()


// function userSelectionOptions(optionLayer) {
//     if (!map.hasLayer(optionLayer)) {
//         map.addLayer(optionLayer)
//     } else {
//         map.removeLayer(optionLayer)
//     }
// }
