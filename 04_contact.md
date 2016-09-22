---
title: Contact
permalink: "/contact/"
layout: page
---

## {{ site.title }}

<div class="footer-wrapper">
    <div class="footer-col footer-col-1">
        <h5>Address</h5>
        <p>Via Giuseppe Meda, 25<br/>20136 Milan, Italy</p>
        <p class="small-text">P.Iva & C.F. IT 03567400969</p>
    </div>

    <div class="footer-col footer-col-2">
        <h5>Phone</h5>
        <p>+39 (02) 4548 7894/5</p>
        <h5>Fax</h5>
        <p>+39 (02) 4548 7896</p>
    </div>

    <div class="footer-col footer-col-3">
        <h5>General</h5>
        <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        <h5>Careers</h5>
        {% assign var = site.data.variables[0] %}
        <p><a href="mailto:{{ var.jobEmail }}">{{ var.jobEmail }}</a></p>
    </div>
</div>

<div id="map"></div>
<script>
	function initMap() {
	    var mapDiv = document.getElementById('map');
	    var map = new google.maps.Map(mapDiv, {
	        center: {lat: 45.4429383, lng: 9.1703584},
	        zoom: 15
	    });
	    map.set('styles', [
			
		]);
		var marker = new google.maps.Marker({
			position: {lat: 45.4429383, lng: 9.1703584},
			map: map,
			title: 'Hello World!'
        });
	}
</script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?callback=initMap">
</script>
