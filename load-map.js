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
    for (let i of data) {
        let indexComma = i.addressLine1.indexOf(",")
        if (indexComma == -1) {
            cleanAddress.push(i.addressLine1)
        } else if (indexComma) {
            cleanAddress.push(i.addressLine1.slice(0, indexComma))
        }
    }
    return cleanAddress;
}


async function getLatLng(address) {
    let add1 = address[1];
    let mapUrl = `https://developers.onemap.sg/commonapi/search?searchVal=${add1}&returnGeom=Y&getAddrDetails=N`
    let response = await axios.get(mapUrl)
    console.log("response data: " , response.data)
    // let lat = response.data[0]['latitude']
    // let lng = response.data[0]['longitude']
    // return {
    //     'latitude': lat,
    //     'longitude': lng
    // }
}

// create a list of objects that stores name, clean address and its lat-lng
let addLatLngObj = [
    {
        'name': "",
        'address': "",
        'latitude': "",
        'longitude': "",
    }
]

// get lat-lng function from clean addresses
async function newLatLngObj(shops, address) {
    let index = 0;
    for (let i of shops) {
        let latlng = await getLatLng(address[index]);
        let lat = latlng.latitude;
        let lng = latlng.longitude;
        addLatLngObj.push({
            'name': i.name, 'address': address[index],
            'latitude': lat, 
            'longitude':lng})
        index++
    }
    return newLatLngObj;
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
