let map;
let service;
let infowindow;

function initialize(location) {

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    let request = {
        location: location,
        radius: '1000',
        type: ['cafe']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
        map : map,
        position : place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            let place = results[i];
            createMarker(results[i]);
        }
    }
}

function updatelocation(location) {
    initialize(location)
}
