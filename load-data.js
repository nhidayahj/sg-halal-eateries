async function loadData() {
    let response = await axios.get("data.json");
    let listOfPlaces = response.data;
    return listOfPlaces;
}

// get the list of categories type for filter options
async function getCuisineType() {
    let listOfPlaces = await loadData()
    let cuisineArr = [];
    let allBusinesses = listOfPlaces.moreBusinesses
    //    console.log(allBusinesses)
    for (let i of allBusinesses) {
        for (let x of i.categories) {
            if (cuisineArr.includes(x.title)) {
                cuisineArr;
            } else {
                cuisineArr.push(x.title)
            }
        }
    }
    return cuisineArr;
}

//create the list of checkboxes in Cuisine filter 
async function createCuisineCheckBox() {
    let cuisineArr = await getCuisineType();
    let dropdownOption = document.querySelector(".displayCuisine")
    for(let i of cuisineArr) {
        let newCheckBox = `
        <input type="checkbox" class="cuisine" name="${i}" value="${i.toLowerCase().replace(" ","-")}"/>
        <label>${i}</label>
        <p>
        `
        dropdownOption.innerHTML += newCheckBox;
    }
}


// data for the maps 


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



// compare Afford list with cleanData
function getPriceRangeLatLng(cleanData, pricelist) {
    let priceRangeLatLng = []
    for (let i of pricelist) {
        for (let j of cleanData) {
            if (j.name == i) {
                priceRangeLatLng.push({
                    'name':j.name,
                    'lat':j.latitude,
                    'lng':j.longitude
                })
            }
        }
    }
    return priceRangeLatLng;
}