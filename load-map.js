
// get all the addresses from data.json 
// may be redundant 
let all_addresses = []
function getDataAddress(data) {
    let addressCollection = data.moreBusinesses
    for (let i of addressCollection) {
        all_addresses.push(i.addressLine1)
    }
    return all_addresses;
}

// to only get the clean address for map API

let clean_add = []
function getCleanAdd(data) {
    for (let i = 0; i < data.length; i++) {
        let indexComma = data[i].addressLine1.indexOf(",")
        if (indexComma == -1) {
            clean_add.push({
                'name': data[i].name,
                'full_address': data[i].addressLine1,
                'ratings': data[i].rating,
                'priceRange': data[i].priceRange
            })
        } else if (indexComma) {
            clean_add.push({
                'name': data[i].name,
                'full_address': data[i].addressLine1.slice(0, indexComma),
                'ratings': data[i].rating,
                'priceRange': data[i].priceRange
            })
        }
    }
    for (let i = 0; i < clean_add.length; i++) {
        if (clean_add[i].full_address == "2") {
            clean_add.splice(i, 1)
        }
    }
    //console.log("clean add 2:", clean_add)
    return clean_add;
}



// getting the lat-lng for all the clean addresses 
let newLatLngObj = []
//update the clean add list 

async function getUpdatedList(address) {
    let cleanAdd = getCleanAdd(address)
    for (let i of cleanAdd) {
        let mapUrl = `https://developers.onemap.sg/commonapi/search?searchVal=${i.full_address}&returnGeom=Y&getAddrDetails=Y`
        let response = await axios.get(mapUrl)
        let result = response.data
        //console.log("result: ", result)
        // if there is a 'found' address, get the lat-lng
        if (result.found) {
            newLatLngObj.push({
                'name': i.name,
                'full_address': result.results[0]['ADDRESS'],
                'ratings': i.ratings,
                'priceRange': i.priceRange,
                'postal': result.results[0]['POSTAL'],
                'latitude': result.results[0]['LATITUDE'],
                'longitude': result.results[0]['LONGITUDE']
            })
        }
    }
    //console.log("full data: ", newLatLngObj)
    return newLatLngObj;
}

// function loadMap(address) {
//     for (let i of address) {
//         let lat = parseFloat(i.latitude)
//         let lng = parseFloat(i.longitude)
//         let eachShop = [lat,lng]

//         let map = L.map('map').setView(eachShop, 13); // #2 Set the center point

//         // setup the tile layers
//         L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//             attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//             maxZoom: 18,
//             id: 'mapbox/streets-v11',
//             tileSize: 512,
//             zoomOffset: -1,
//             accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
//         }).addTo(map);

//         let restMarker = L.marker([lat, lng])
//         restMarker.addTo(map);
//     }
// }

// loads initial map 
async function loadMap(data) {
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
    showMarkerTooltip(map, data);

    //map.on('click', onClick(data))


}

// function to create the markers & display its info in a tooltip 
function showMarkerTooltip(map, data) {
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

        markers.addTo(map);
        //console.log(markers)
        markers.on('click', onClick)
    }

}

function onClick() {
    console.log("hello")
}

// display markers based on user selections 
function displayUserMapCheap() {
    console.log("hello")
}