mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: (campground.geometry.coordinates === undefined ? [126.9784147, 37.5666805] : campground.geometry.coordinates), // starting position [lng, lat]
  zoom: 11, // starting zoom
  projection: 'globe', // display the map as a 3D globe
});

// new mapboxgl.Marker().setLngLat(campground.geometry.coordinates).addTo(map);
