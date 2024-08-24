// script.js
/*
////////////////////////////////////////////////////
 _____ _____ _____ 
|     |  _  |  _  |
| | | |     |   __|
|_|_|_|__|__|__|   
                   
////////////////////////////////////////////////////
*/

var CRSPixel = L.Util.extend(L.CRS.Simple, {
	transformation: new L.Transformation(1,0,1,0)
});

var map = L.map('map', {
    crs: CRSPixel,
    maxZoom: 5, // define the maxZoom on map so you can retrieve it in your bounds computation
    minZoom: 2,
    zoomControl: false,
    scrollWheelZoom: false, // disable original zoom function
    smoothWheelZoom: true,  // enable smooth zoom 
    smoothSensitivity: 1,   // zoom speed. default is 1
    zoomAnimationThreshold: 1
}).setView([128,128], 2);


var southWest = map.unproject([0, 8192], map.getMaxZoom());
var northEast = map.unproject([8192, 0], map.getMaxZoom());

var bounds = L.latLngBounds(southWest, northEast);

L.tileLayer('images/maptiles-location/{z}/{x}/{y}.png', {
    tileSize: 256,
	//minZoom: 2,
    minZoom: 0, // Just for testing as you seem to still tiles at zooms 0 and 1
	maxZoom: 5,
	center: [0,0],
	noWrap: true,
    //tms: true, // Not sure why you use tms whereas it scrambles your tiles?
    tms: false,
    bounds: bounds
	//crs: L.CRS.Simple // crs is a map option, not a tile layer one.
}).addTo(map);

var markerLayer = L.layerGroup().addTo(map);

// Function to transform coordinates
function transformCoordinates(x, y) {

    // Define map margins
    var marginW = 24; // Min x
    var marginE = 256-24; // Max x
    var marginN = 24; // Min y (Leaflet uses pixel coords, meaning it starts from the top)
    var marginS = 256-24; // Max y
    var targetSize = 1300; // Custom map coords

    // Map x-coordinate to new range
    var newX = (x - marginW) / (marginE - marginW) * targetSize;

    // Map y-coordinate to new range and flip the Y-axis
    var newY = targetSize - ((y - marginN) / (marginS - marginN) * targetSize);

    return [newY, newX];
}

function updateCoordBox(coords) {
    var coordBox = document.getElementById('coordBox');
    // Transform coordinates
    var transformedCoords = transformCoordinates(
        coords.lng,
        coords.lat // Note: Leaflet uses lat-lng, so we swap the order
    );

    coordBox.textContent = "" + transformedCoords[1].toFixed(0) + ", " + transformedCoords[0].toFixed(0);
    //coordBox.textContent = "Coordinates: " + coords.lat.toFixed(2) + ", " + coords.lng.toFixed(2);
}

map.on('click', function (e) {
    updateCoordBox(e.latlng);
});


function updateMarkersVisibility() {
    markers.forEach(function (label) {
        var checkbox = document.getElementById(label.name.toLowerCase());
        if (checkbox.checked) {
            label.markers.forEach(function (marker) {
                markerLayer.eachLayer(function (layer) {
                    if (layer.category === marker.category) {
                        layer.addTo(map);
                    }
                });
            });
        } else {
            label.markers.forEach(function (marker) {
                markerLayer.eachLayer(function (layer) {
                    if (layer.category === marker.category) {
                        map.removeLayer(layer);
                    }
                });
            });
        }
    });
};

// Get all details elements
var detailsElements = document.querySelectorAll('details');

// Loop through each details element
detailsElements.forEach(function (details) {
    // Get the symbol span inside this details element
    var symbol = details.querySelector('.symbol');

    // Add event listener for toggle event on this details element
    details.addEventListener('toggle', function () {
        // Check if this details element is open
        if (details.open) {
            // Change symbol to -
            symbol.textContent = '-';
        } else {
            // Change symbol to +
            symbol.textContent = '+';
        }
    });
});

document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', updateMarkersVisibility);
});

document.getElementById('showAllButton').addEventListener('click', function () {
    document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.checked = true;
    });
    updateMarkersVisibility();
});

document.getElementById('hideAllButton').addEventListener('click', function () {
    document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.checked = false;
    });
    updateMarkersVisibility();
});


// Summary Checkbox Listeners

document.getElementById('workbench_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="workbench_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('store_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="store_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('service_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="service_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('entrance_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="entrance_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('wood_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="wood_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('ore_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="ore_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('fish_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="fish_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('crop_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="crop_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('herb_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="herb_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});

document.getElementById('animal_checkbox').addEventListener('change', function () {
    var isChecked = this.checked;
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="animal_"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    updateMarkersVisibility();
});