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




// get all the addresses from data.json 
let all_addresses = []
function getDataAddress(data) {
    let addressCollection = data.moreBusinesses
    for (let i of addressCollection) {
        all_addresses.push(i.addressLine1)
    }
    return all_addresses;
}

// to only get the clean address for map API
let cleanAddress = [];
function getDataAddress2(data) {
    let addressCollection = data.moreBusinesses;
    for(let i of addressCollection) {
        let indexComma = i.addressLine1.indexOf(",")
        if (indexComma == -1) {
            cleanAddress.push(i.addressLine1)
        } else if (indexComma) {
            cleanAddress.push(i.addressLine1.slice(0,indexComma))
        }
    }
    return cleanAddress;
}




async function getLatLng (address) {
    let add1 = address[0];
    let mapUrl = `https://developers.onemap.sg/commonapi/search?searchVal=${add1}&returnGeom=Y&getAddrDetails=N`
    let response = await axios.get(mapUrl)
    console.log("From OneMap's: ", response.data)
}

// get individial lat-lng 
// let mapBaseUrl = "https://developers.onemap.sg/commonapi/search"

// async function getLatLng(addresses) {
//     let response = await axios.get(mapBaseUrl, {
//         params = {
//             'searchVal': "${address}",
//             'returnGeom': "Y",
//             'getAddrDetails': "N"
//         }
//     })

// }


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
