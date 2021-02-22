# SG Halal Eateries 

This project targets the Muslim community in Singapore in easing their food searches for the nearest and all 
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
## Content Information
The page is first loaded displaying all the available Halal eateries in Singapore on the map. The map is then dynamically 
altered based on the user selection from the filter drpdown menus or by searching through the search bar.

#### Information required for map interaction 
For the map to be displayed with the relevant markers, 
Users can use these 4 ways to interact; 
1. Using the search bar - keywords of address , type of food or name of restaurant 
2. Cuisine types - dropdown as a form of radio buttons
3. Price range - dropdowns
4. Ratings - dropdowns, with 'High' denoting max of 5 stars

In any of the above inputs, if a restaurant exist,  it displays a marker in the map. When user clicks on any of these markers, a popup 
will appear that provides all relevant information a user wants to know about the stall. A link is also embedding 
in these popup, which will direct them to a deck of cards below for users to view restaurants' images.

#### Images for map & cards
All images displayed were taken directly from the source of data, that has a photo URL link provided.
These images are used to provide a more visual appearance that fits well in a restaurant-searching webpage. 

## Content Structure 
This webpage follows a **Linear Structure** from Top to Bottom, single webpage.

1. Top Header:

- The top section of the webpage contains the main user interations of the search bar and the filter dropdown options. 
- The Find and Filter button is first displayed on first load.
- The Filter button will then open the collapsible menus. This is maintain a clean look in the header section. 

2. Mid Section:
- The map takes up the main display where users can view the whole of Singapore map. It is zoomed out on first load, 
so users are able to view all pinned markers on the map. 
- The markers can be viewed individually or in a cluster depending on the zoom level of map which is interactive.
- The map also holds in the information pop-up, when use clicks on any of the markers. These pop-ups fits nicely 
within the width and height of the map dimension. 

3. Last Section:
- This section displays more relevant information of the restaurants in a card version. 
- The cards contains the addresses and links that user may want to obtain when deciding for a place to eat. 

# Skeleton 
## Interface Design 

#### Header Design 
The two top logos is the visual representation of what the webpage service. A Halal logo and an image of a 
restaurant. The background image chosen is due to the vibrate and deep colors of the food condiments that brings contrast to the 
lighter and brighter buttons/maps colors. 

The design plan of the webpage has a page header that groups together the page title, search bar, page icons 
and the main search buttons, while the map and card decks are designed separately. 

The filter dropdowns are intentionally grouped in a collapsible menu to allow white space in the header section when 
webpage is viewed in a smaller screen. Only when user wishes to interact, it will display. 

#### Map & Cards Design
This is a single webpage that displays the both the map and the corresponding images/cards to the markers. A bookmark 
concept is implemented to quickly navigate users from the cards and back to the map / top of page. 

Bootstrap framework is used to aid in the visual responsiveness of the layout.

![all](https://user-images.githubusercontent.com/60766668/108634676-a1f4a700-74b5-11eb-95cf-246d82b923bb.png)
####  Other Future Features / Implementations 
Future works to be done is to have a distance/radius algoritm in identifying nearest food stalls based on a 
range of distances that users can select. 

# Surface 
## Theme 
The theme that is chosen has to vibrant and appealing as this webpage represents a happy mood when it comes to eating 
and finding food. Hence, the background image projects the vibrancy from the colors of food spices as the borders 
of the pages, against a light colors on a slightly opaque overlay. 

## Colors
The colors are consistent for visual communication. 
- Shades of blue is an all general color function 
- Green denotes that the search input value is valid and can be read
- Red denotes a warning or alert indicating if data is not captured or no available data or requires caution such 
as preventing reseting of map 
- Markers on the maps provides constrast to quickly be identified and recognised on the map.

# Features
## Content 
The webpage contains all the relevant information and data required for user to use in a food searching 
application with appropriate filters, images and contents.

## Responsiveness 
The webpage is able to display all the above contents nicely in various screen sizes. Buttons, images and maps 
are scaled down nicely for smooth navigation. 

## Map overview
Upon first load, map is already pinned with existing restaurants in Singapore, also an indication to user
that the page is loaded.

# Testing 
## Functionality Test 
|Category|Actions/Inputs|Output/Errors|
|--------------:|----------------------:|:--------------------------------:|
|Overall        |   Mobile Responsive   |No display errors                |
|Search bar     |   Partial Address     |   Green(valid): Red(invalid) |
|               |   Partial restaurant name|                          |
|Nav bar        |    Filter buttons        | Displays all 3 dropdowns |
| Map           |   Page Loaded      | All pins & cluster



# Deployment 
 Consistently maintained to ensure that all changes has been save and push to GitHub. 

 The webpage is deployed and capable to view online. 

There is only one branch used in this application.


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
Icons & Background image:
1. [Flaticons](https://www.flaticon.com/)
2. [Freepik](https://www.freepik.com)
3. [Pinterest](https://www.pinterest.com/pin/643381496745735949/) 


# Acknowledgements 
- Mr Paul Chor, Instructor 
- Mr Ace Liang, TA 
- Mr Shun, TA
- Fellow classmates for their guidance, suggestions and opinios



