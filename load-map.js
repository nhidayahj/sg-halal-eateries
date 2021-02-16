
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



let showAllLayer = L.markerClusterGroup();
showAllLayer.addTo(map)
let midLayer = L.markerClusterGroup();
midLayer.addTo(map)
let affordLayer = L.markerClusterGroup();
affordLayer.addTo(map)

let lowRatingsLayer = L.markerClusterGroup();
lowRatingsLayer.addTo(map)
let medRatingsLayer = L.markerClusterGroup();
medRatingsLayer.addTo(map)
let highRatingsLayer = L.markerClusterGroup();
highRatingsLayer.addTo(map)

// let currentLayer = L.LayerGroup();
// currentLayer.addTo(map)

// function to create the markers & display its info in a tooltip 
function showMarkerTooltip(map, data, layer) {
    //console.log("showMarkerTooltip")
    //console.log(layer);
    layer.clearLayers()
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
    
}


// remembers the previous shown layer; 

function userSelectionOptions(list, layer) {
    if (map.hasLayer(layer) == false) {
        map.addLayer(layer);
    }
    showMarkerTooltip(map, list, layer);
    //console.log(addedLayer)
}


// function checksExistingLayer(bolLayer, list, makeLayer,layer) {
//     let isThereLayer = false;
//     //let isThereLayer = currentLayer.hasLayer(layer)
//     if(!bolLayer) {
//         console.log("layer not exist, so create one")
//         userSelectionOptions(list,makeLayer);
//         isThereLayer = true;
//     } else if (bolLayer) {
//         console.log("previous layer exists")
//         currentLayer.removeFrom(map);
//         userSelectionOptions(list,makeLayer);
//         isThereLayer;
//     }
//     return isThereLayer;
// }


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

