// Define the URL to fetch earthquake data
const earthquakeDataURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson';

// Fetch earthquake data and create markers
d3.json(earthquakeDataURL).then(createMarkers);

function createMarkers(data) {
    const earthquakes = [];
    // Loop through each earthquake data feature
    for (const earthquake of data.features) {
        // Extract earthquake depth and latitude/longitude
        const depth = earthquake.geometry.coordinates[2];
        const latlng = [earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]];
        // Create circle marker for each earthquake
        earthquakes.push(
            L.circle(latlng, {
                radius: earthquake.properties.mag * 25000,
                fillColor: getColor(depth),
                color: "#000",
                weight: 0.5,
                fillOpacity: 1
            }).bindPopup(`
                <h3>${earthquake.properties.title}</h3>
                <hr>
                <p><b>Date:</b> ${new Date(earthquake.properties.time)}</p>
                <p><b>Magnitude:</b> ${earthquake.properties.mag}</p>
                <p><b>Depth:</b> ${depth} km</p>
            `)
        );
    }
    // Create a layer group for earthquake markers
    const earthquakeLayer = L.layerGroup(earthquakes);
    // Call function to create map with earthquake layer
    createMap(earthquakeLayer);
}

// Function to determine color based on earthquake depth
function getColor(depth) {
    return depth >= 90 ? '#d73027' :
           depth >= 70 ? '#fc8d59' :
           depth >= 50 ? '#fee08b' :
           depth >= 30 ? '#d9ef8b' :
           depth >= 10 ? '#91cf60' : '#1a9850';
}

// Function to create map with earthquake layer
function createMap(earthquakes) {
    // Define base layer using OpenStreetMap tiles
    const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Define overlay maps with earthquake layer
    const overlayMaps = { "Earthquakes": earthquakes };

    // Create map centered at [38.5, -96.5] with zoom level 5
    const myMap = L.map("map", {
        center: [38.5, -96.5],
        zoom: 5,
        layers: [baseLayer, earthquakes]
    });

    // Add layer control to switch between base and overlay maps
    L.control.layers(null, overlayMaps).addTo(myMap);

    // Create legend control to display earthquake depth color scale
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'info legend');
        const depths = [-10, 10, 30, 50, 70, 90];
        div.innerHTML = '<h4> Earthquake Depth </h4>';
        // Loop through depth intervals and generate legend items
        for (const depth of depths) {
            div.innerHTML += `
                <i style="background:${getColor(depth + 1)}"></i>
                ${depth} ${depths[depths.indexOf(depth) + 1] ? '&ndash;' + depths[depths.indexOf(depth) + 1] + '<br>' : '+'}
            `;
        }
        return div;
    };
    legend.addTo(myMap); // Add legend to map
}


