

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 13.5// starting zoom
});

console.log(listing)

const marker1 = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)// Listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({offset: 25, className: 'my-class'})
    .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking<p>`
    ))
    .addTo(map);