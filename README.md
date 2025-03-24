# REMWasteTechTest

### Made by Calin Andrei
In this file, I will walk your through my thought process and my changes.

You can access the website here:
https://rem-waste-tech-test.vercel.app/

First, I looked at the Skip Select Page and figured out the main components. Those were:
1. The stepper (at the top)
2. The title and subtitle
3. The card list
4. The popup when selecting a card

I then noticed some problems with the page. THe stepper was not responsive, the popup didn't show any information, such as price or skip size and once a card was selected, it couldn't be unselected.

When I was making the stepper, I made it responsive by using flexbox when styling it.

When I was making the popup, I made sure the data was being displayed properly by taking the price and skip size of the selected card and displaying them. I multiplied the price by the number of weeks of the hire (price * (hire_period / 7)) to make sure the price was accurate.

And when I was making the cards, I made sure they could also be deselected by adding the `handleCardSelect` function.

After the page was created with the added modifications for a better UI/UX experience and checked for any possible bugs, I started remaking the folder structure and splitting the code in more modular components for better maintainability in the future. I split the components into three major categories:
1. `pages` - each step of the stepper has its own page
2. `templates` - here are the templated for a step page and for the warnings
3. `ui` - here are all the individual components in their own directory. Each directory contains the React `.jsx` file and a styling `.js` file.

I also made a `config` directory. Here is the `strings.js` file, which contains all the strings used, as well as URLs (for the image in the card and for the api that was being called) and colors (all the colors can be changed from here). This makes modifying certain strings or colors a lot easier since you don't have to manually search where that color or string is.

I also have a `utils` directory. Here is the `api.js` file, which contains the function that makes the call to the api.

The way I structured the app makes it very easy to find anything and to change anything. The code is easy to maintain and to build up on, each component having its individual directory.