mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmEwMSIsImEiOiJja3cwc3RlNDliOWI3MzFxd3VqcWg5YTJ1In0.LNNlhWH8D3qlEMSg6bvlRQ';

var lat = 51.5014
var long = 0.1419

var map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [long, lat], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true}, 
        trackUserLocatation: true
    }),
);