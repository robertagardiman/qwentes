---
title: Contact
permalink: "/contact/"
layout: page
---

# {{ page.title }}

## {{ site.title }}

<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-4">
        <h5>Address</h5>
        <p>Via Giuseppe Meda, 25<br/>20136 Milan, Italy</p>
        <p class="small-text">P.Iva & C.F. IT 03567400969</p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
        <h5>Phone</h5>
        <p>+39 (02) 4548 7894/5</p>
        <h5>Fax</h5>
        <p>+39 (02) 4548 7896</p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
        <h5>General</h5>
        <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        <h5>Careers</h5>
        {% assign var = site.data.variables[0] %}
        <p><a href="mailto:{{ var.jobEmail }}">{{ var.jobEmail }}</a></p>
    </div>
</div>

<div id="map"></div>
<script>
    var marker
	function initMap() {
	    var mapDiv = document.getElementById('map');
	    var map = new google.maps.Map(mapDiv, {
	        center: {lat: 45.442942, lng: 9.1799191},
	        zoom: 15,
            scrollwheel: false
	    });
        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: 45.442942, lng: 9.1799191}
        });
        marker.addListener('click', toggleBounce);
    }
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
</script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?callback=initMap">
</script>