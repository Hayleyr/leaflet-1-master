var map = L.map('map').setView([40.68025, -73.9903], 13);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

//define parks icon

var parksIcon = L.icon({
    iconUrl: 'img/forest2.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

$('.centralPark').on('click', function(){
	map.panTo(new L.LatLng(40.778997, -73.968973), {animate: true, duration: 1.0});


});

$('.riversidePark').on('click', function(){
	map.panTo(new L.LatLng(40.800097, -73.968973), {animate: true, duration: 1.0});


});

$('.prospectPark').on('click', function(){
	map.panTo(new L.LatLng(40.6617, -73.9708), {animate: true, duration: 1.0});


});

//create markers for parks 

var centralparkmarker = L.marker([40.7833, -73.9667,], {icon: parksIcon}).addTo(map);
centralparkmarker.bindPopup("Central Park").openPopup();

var riversideparkmarker = L.marker([40.800097, -73.968973,], {icon: parksIcon}).addTo(map);
riversideparkmarker.bindPopup("Riverside Park").openPopup();

var prospectparkmarker = L.marker([40.6617, -73.9708,], {icon: parksIcon}).addTo(map);
prospectparkmarker.bindPopup("Prospect Park").openPopup();

//listeners for sidebar hovers 

$('.park').on('mouseover', function(){

$(this).css('background', '#8ECEFA');
});

$('.park').on('mouseout', function(){

$(this).css('background', '#46B3FE');
});

// central park click listener

//listeners for map hover 
centralparkmarker.on('mouseover', function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout', function() {
		$('.centralPark').toggleClass('hover');

	

});
	prospectparkmarker.on('mouseover', function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout', function() {
		$('.prospectPark').toggleClass('hover');

	


});


		riversideparkmarker.on('mouseover', function(){
	$('.riversidePark').toggleClass('hover');
})
	.on('mouseout', function() {
		$('.riversidePark').toggleClass('hover');

	

});


