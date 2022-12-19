# OpenRent Redesign

This project is an example of how the OpenRent map view of a region could be redesigned. While using the OpenRent app, I often wished that I could keep track of which properties I had already visited, view my favorites on the map, and also "dismiss" or define certain properties as undesirable. 

This interface allows users to favorite each item, mark it as a viewed, or "dismiss" it. Users can toggle showing favorited, viewed, and dismissed items on the map. 

View a demo [here](https://secret-mountain-95480.herokuapp.com/)

## How to interact with the demo

Click on the icons in the corner of each listing to favorite the listing, mark it as already viewed, or dismiss it.

![Icons in the corner of each housing listing](src/images/demo_images/corner_icons.png?raw=true "Corener Icons")

Then click on the buttons on the map to toggle the category that you would like to see. 

![Toggle buttons for the map view](src/images/demo_images/map_toggle.png?raw=true "Corener Icons")

## Bugs 

The items on the map will not update automatically when you favorite a listing, mark it as viewed, or dismiss it. You will need to refresh the view on the map by toggling the appropriate button for each category. 

## How to run the demo

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Further improvements

I would like to spend more time on the "dismiss" property. I wasn't sure whether dismissing a property ought to remove it from the map completely. On the one hand, users might not want to see properties that they have decided to dismiss. However, it might also be useful to them to view items that they have already dismissed on the map and compare them to ones that they have marked as viewed or favorited. Perhaps it could useful to introduce a "hide" property so that users can hide items that they no longer want to see. 




