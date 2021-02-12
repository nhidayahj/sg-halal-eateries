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

function getDataAddress2(data) {
    for (let i=0; i<data.length; i++) {
        let indexComma = data[i].addressLine1.indexOf(",")
        if (indexComma == -1) {
            clean_add.push({
                'address':data[i].addressLine1
            })
        } else if (indexComma) {
            clean_add.push({
                'address': data[i].addressLine1.slice(0, indexComma)
            })
        } 
    }
    return clean_add;
}








// async function getLatLng(address) {
//     for (let i = 0; i < address.length; i++) {
//         newLatLngObj.push({
//             'index': i
//         })
//     }
    //console.log(newLatLngObj);
   // let index = newLatLngObj.index
    // let mapUrl = `https://developers.onemap.sg/commonapi/search?searchVal=${address[index]}&returnGeom=Y&getAddrDetails=N`
    // let response = await axios.get(mapUrl)
    // let result = response.data

    // console.log("Found result: ", result)
    // only if there is a 'found' value, then 
    // take only the values of thte first index from the list 
    // if (result.found) {
    //     newLatLngObj.push({
    //         'full_address': result.results[0]['SEARCHVAL'],
    //         'latitude': result.results[0]['LATITUDE'],
    //         'longitude': result.results[0]['LONGITUDE']
    //     })
    // }
    // return newLatLngObj;
//}

// create a list of objects that stores name, clean address and its lat-lng


// get lat-lng function from clean addresses
// async function newLatLngObj(shops, address) {
//     let latlng = await getLatLng(address[i]);
//     // let index = 0;
//     for (let i = 0; i < shops.length; i++) {

//         //let full_add = latlng.full_address
//         let lat = latlng.latitude;
//         let lng = latlng.longitude;
//         addLatLngObj.push({
//             'name': i.name,
//             'full_address': i.addressLine1,
//             'latitude': lat,
//             'longitude': lng
//         })
//     }
//     return newLatLngObj;
// }





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
