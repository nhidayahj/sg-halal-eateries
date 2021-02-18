async function loadData() {
    let response = await axios.get("data.json");
    let listOfPlaces = response.data;
    return listOfPlaces;
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
                'priceRange': data[i].priceRange,
                'categories': data[i].categories

            })
        } else if (indexComma) {
            clean_add.push({
                'name': data[i].name,
                'full_address': data[i].addressLine1.slice(0, indexComma),
                'ratings': data[i].rating,
                'priceRange': data[i].priceRange,
                'categories': data[i].categories
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
                'categories': i.categories,
                'postal': result.results[0]['POSTAL'],
                'latitude': result.results[0]['LATITUDE'],
                'longitude': result.results[0]['LONGITUDE']
            })
        }
    }
    //console.log("full data: ", newLatLngObj)
    return newLatLngObj;
}



// get the list of categories type from Clean Data to do up Modal Popup
let cuisineArr = [];
async function getCuisineType() {
    let listOfPlaces = await loadData()
    let allBusinesses = listOfPlaces.moreBusinesses
    //    console.log(allBusinesses)
    for (let i of allBusinesses) {
        for (let x of i.categories) {
            if (x.title == 'Halal') {
                continue;
            } else if (cuisineArr.includes(x.title)) {
                cuisineArr;
            } else {
                cuisineArr.push(x.title)
            }
        }
    }
    return cuisineArr;
}

//create the list of checkboxes in Cuisine Modal Popup 
async function createCuisineCheckBox() {
    let cuisineArr = await getCuisineType();
    let dropdownOption = document.querySelector(".displayCuisine")
    for (let i of cuisineArr) {
        let newCheckBox = `
        <input type="radio" class="cuisine" name="cuisine" value="${i}"/>
        <label>${i}</label>
        <p>
        `
        dropdownOption.innerHTML += newCheckBox;
    }
}


// get cuisine type from user checkbox and return its name, add & lat-lng  

function getCuisineSelection(userSelect) {
    //console.log(newLatLngObj)
    let userSelectObj = [];
    for (let i of newLatLngObj) {
        let categories = i.categories;
        for (let j of categories) {
            if (j.title == userSelect) {
                // userSelectObj['name']=i.name
                // userSelectObj['latitude']=i.latitude
                // userSelectObj['longitude']=i.longitude
                // userSelectObj['ratings']=i.ratings
                // userSelectObj['categories']=i.categories
                // check if previous user selection is alr added in this obj
                // if it is alr added, ignore 
                userSelectObj.push({
                    'name': i.name,
                    'latitude': i.latitude,
                    'longitude': i.longitude,
                    'ratings': i.ratings,
                    'categories': i.categories
                })

            }

        }
    }
    console.log("User Obj: ", userSelectObj)
    return userSelectObj;

}


// get all the addresses from data.json 
// may be redundant 
// let all_addresses = []
// function getDataAddress(data) {
//     let addressCollection = data.moreBusinesses
//     for (let i of addressCollection) {
//         all_addresses.push(i.addressLine1)
//     }
//     return all_addresses;
// }




// compare different price range list with cleanData
function getPriceRangeLatLng(cleanData, pricelist) {
    let priceRangeLatLng = []
    for (let i of pricelist) {
        for (let j of cleanData) {
            if (j.name == i) {
                priceRangeLatLng.push({
                    'name': j.name,
                    'latitude': j.latitude,
                    'longitude': j.longitude,
                    'ratings': j.ratings
                })
            }
        }
    }
    //console.log(priceRangeLatLng)
    return priceRangeLatLng;
}



// get the lat-lngs for ratings
function getRatingsLatLng(cleanData, ratings) {
    let ratingsLatLng = [];
    for (let i of ratings) {
        for (let j of cleanData) {
            if (j.name == i) {
                ratingsLatLng.push({
                    'name': j.name,
                    'latitude': j.latitude,
                    'longitude': j.longitude,
                    'ratings': j.ratings
                })
            }
        }
    }
    return ratingsLatLng;
    //console.log("Ratings Lat-Lng: " , ratingsLatLng)
}
