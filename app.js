// On vérifie si le navigateur supporte la géolocalisation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handlePosition);
}

function handlePosition(position) {
    var position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'latLng': position
    }, function (results, status) {
        console.log(results);
        console.log("Address: ", results[0].formatted_address);
    });
}
