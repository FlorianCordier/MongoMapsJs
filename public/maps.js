let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.692054, lng: 6.184416999999939},
        zoom: 12
    });
}