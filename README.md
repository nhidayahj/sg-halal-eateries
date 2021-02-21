# SG Halal Eateries 

This project targets the Muslim communities in Singapore in easing their food searches for the nearest and all 
available Halal eateries in the area. This application also hopes that it will come in handy and beneficial to 
other Non-Muslims in finding food places if they plan to have a lunch out with their fellow Muslim colleagues 
and friends. 

A live demo is available at: `https://nhidayahj.github.io/sg-halal-eateries`

# How To Use 
The web application is first loaded with all the current Halal eateries in Singapore that are Halal-certified by Singapore's Muslims
Council. These places are pinned onto the map, which provides an overall visual representation of all eateries. 
Users can then navigate around in 3 ways: 

1. Users can make use of the Search bar to key in keywords of addresses or places or name of restaurants. 
2. A filter option is also available to further narrow down user's searches in 3 categories
    - by cuisines types, prices ranges or ratings 
3. A GPS locator is also available to pinpoint user's current location on the map.

If the food places exists, a marker will be placed on the map. 

# Strategy 
## Identifying External Users
The primary audience for this application is for the Muslim community. Knowing that there is available Halal eatery in the area is crucial as 
it helps to ease the worry if there is any places to eat. 

## Identifying External Users' Issues 
Generally, finding Halal places can be a stressful process 
especially when one is in an unfamiliar neighbourhood. While it is sometimes easier to just head to the nearest neighbourhood malls, where there
can have variety of food options, however some of these small malls may not even have the variety. Plus, malls restaurants can be abit pricier as well. Hence, money can be an issue. 
And if eating out is a norm - especially lunchtime for working adults, having to spend more can be a pain to our wallets. 

## Identifying External Users' Goals 
There are already many Halal places in Singapore, and will continue to grow however, these places that is recognized or heard is only through a word of mouth of friends/family. 
Sometimes giving support to other smaller establishment is enough to suffice our daily hunger pangs.
While wanting to have delicious food for every meal is desired, but having just food is a necessity. 

## Site Owner's Goals 
The motivation to build this website is to help ease the process of thinking "Where can I eat?" or "What is there to eat here?" 
These thoughts will always be in the minds of users if eating out is not a planned activity and if they are in an unfamiliar place. 

Therefore, addressing these issues with this website hopes to not only give users an overall Halal eateries in the areas but 
also recognize other Halal stalls that are outside of malls, and that is sufficient to statify 
the hunger and craving needs' of users. 

In the future, the hope of this application can be a reference point for aspiring food owners in their planning and have an overall
outlook of the distribution of Halal eateries in Singapore. It can also aid in identifying competition to similar food establishment, but will
also add to the variety and expansion of setting up a stall in the area. 

## User Stories 
1. As a user, I want to be able to quickly view and locate Halal places within the area or in Singapore
2. As a user, I want to be able to filter Halal places based on my food choices and preferences.
3. As a user, I want to be able to have all kinds of Halal eateries displayed to me - including restaurants, 
hawker places, malls or cafes.
4. As a user, I want to be able to see the addresses of these places and have a link that can direct me to their 
official social media pages.


# Scope 
This application must be able to perform the following functions:
### Functional Requirements 
1. Flexibility for users to have the options to narrow their search findings by using the Filter options
2. The search function is able to accept and store various search keywords and still provide similar results 

### Content Requirements 
1. Since this application is built to provide convenience and quick access, it should be able 
to display responsiveness in different screensizes, and more appropriately on mobile devices and tablets. 
2. Buttons and navigation of the page is appropriately sized to ensure readability and is easily clickable.
3. Addresses and links' to restaurants social media sites is valid and available for users to find out more about 
the stalls. 
4. Displaying alerts if search is not valid or when data is not yet available to be displayed (for future updates)
5. Users can have a quick glance of important details of the restaurants

# Structure 
The page is first loaded displaying all the available Halal eateries in Singapore on the map. The map is then dynamically 
altered based on the user selection from the filter drpdown menus or by searching through the search bar.

There are 3 dropdown menus are mutually exclusive and categorise by; 
1. Cuisine types as a form of radio buttons. 
2. Price range 
3. Ratings with a maximum of 5 stars

From the map, it displays existing restaurants in Singapore. When user clicks on any of these markers, a popup 
will appear that provides all relevant information a user wants to know about the stall. A link is also embedding 
in these popup, which will direct them to a deck of cards below for users to view restaurants' images and customers reviews.


# Skeleton 





# Technologies Used
1. HTML / CSS 
2. JavaScript 
3. Axios
4. Bootstrap 4
5. LeafletJS
6. Favicons
    - map pin icons
    - webpage icons 
7. Google Fonts 

# API References
1. OneMap
2. Open Street Map
3. Mapbox 

# Credits 
1. Flaticons
2. Background Image 
- 

# Acknowledgements 


