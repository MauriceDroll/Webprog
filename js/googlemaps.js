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
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
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

function updatelocation() {
    if (event.key === 'Enter' || event.type === 'click') {
        let location = document.getElementById('locationinput').value;

        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyCIst2p6GS6U5TAFAKYYR1XK1vuPrPsro0').then(response => {
            const json = response.json().then(res => {
                let lat = parseFloat(res.results[0].geometry.location.lat);
                let lng = parseFloat(res.results[0].geometry.location.lng);
                let position = new google.maps.LatLng(lat, lng);
                console.log(position);
                initialize(position)
            })
        })
    }
}
