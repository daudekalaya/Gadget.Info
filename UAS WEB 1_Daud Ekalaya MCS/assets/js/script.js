const menuToggle = document.querySelector('.menu-toggle-daud input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// peta
var map = L.map('map-daud').setView([-7.3511235916714, 108.220046591301], 13);

	var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	var marker = L.marker([-7.3338428608421395, 108.21718600995965]).addTo(map)
		.bindPopup('<b>Gudang Cell</b><br/><small>Jl. Nagarawangi No.25, Nagarawangi, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46124</small>').openPopup();

	var marker = L.marker([-7.330213081935901, 108.21942590425284]).addTo(map)
		.bindPopup('<b>AGUNG CELLULAR</b><br/><small>Jl. KHZ. Mustofa No.126, Yudanagara, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46121</small>').openPopup();
	
	var marker = L.marker([-7.341833068597462, 108.21659349166595]).addTo(map)
		.bindPopup('<b>ERAFONE PLAZA ASIA</b><br/><small>Plaza Asia Tasikmalaya Lower Ground Floor, Jl. KHZ. Mustofa No.326, Tugujaya, Cihideung, Tasikmalaya Regency, West Java 46126</small>').openPopup();

	var marker = L.marker([-7.333405416186246, 108.21929715822618]).addTo(map)
		.bindPopup('<b>Budi Cellular</b><br/><small>Jl. Tentara Pelajar No.7, Nagarawangi, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46124</small>').openPopup();

	var marker = L.marker([-7.3325652525304355, 108.22147762991162]).addTo(map)
		.bindPopup('<b>Bursa Phone</b><br/><small>Jl. Tentara Pelajar No.46, Nagarawangi, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46124</small>').openPopup();
	// var circle = L.circle([51.508, -0.11], {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5,
	// 	radius: 500
	// }).addTo(map).bindPopup('I am a circle.');

	// var polygon = L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(map).bindPopup('I am a polygon.');


	// var popup = L.popup()
	// 	.setLatLng([-7.330213081935901, 108.21942590425284])
	// 	.setContent('I am a standalone popup.')
	// 	.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent('You clicked the map at ' + e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);