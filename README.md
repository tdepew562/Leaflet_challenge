# Leaflet_challenge-

## Prerequisites
- Ensure you have a modern web browser installed.
- Access to the internet to fetch earthquake data from the USGS GeoJSON Feed.

### Instructions

#### 1. Get the Dataset

- Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.
- Choose a dataset, such as "All Earthquakes from the Past 7 Days".
- Use the provided URL to access the JSON representation of the dataset.

#### 2. Import and Visualize the Data

- Use Leaflet to create a map that plots all earthquakes based on their longitude and latitude.
- Represent the magnitude of each earthquake with marker size and the depth with marker color.
- Larger markers indicate higher magnitude, and darker colors represent greater depth.
- Add popups to provide additional information about each earthquake when clicked.

#### 3. Create a Legend

- Design a legend to provide context for the map data.
- The legend should explain the relationship between marker size/color and earthquake magnitude/depth.

### Implementation

Below are the links to the code files:

- [logic.js](path/to/your/logic.js): JavaScript code for importing and visualizing the earthquake data.
- [style.css](path/to/your/style.css): CSS file for styling the visualization.
- [index.html](path/to/your/index.html): HTML file for displaying the map.

## Results
Upon running the Earthquake Visualization, users will be presented with an interactive map displaying earthquake locations, magnitudes, and depths. Each earthquake marker on the map provides additional information, such as the date, magnitude, and depth of the earthquake. The legend provides context for interpreting the map data, with marker size indicating magnitude and color representing depth.

## Acknowledegments

Special thanks to [ChatGPT](https://www.openai.com/gpt) for providing assistance and guidance during the development of this project.

Special thanks to Berkely Data Analytics for providing code snippets and resources used in this project. [UC Berkeley Extension](https://extension.berkeley.edu/)

# Resources
Special thanks to the contributors of the UCB-VIRT-DATA-PT-11-2023-U-LOLC GitHub repository for providing valuable code and resources used in this project.
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson
https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_plates.json
https://leafletjs.com/
Dataset created by the United States Geological Survey [https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php]
