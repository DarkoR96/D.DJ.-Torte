


function initMap() {
	var myLatLng = {lat: 43.366819, lng: 22.000693};

     map = new google.maps.Map(document.getElementById('map'), {
         center: {
             lat: 43.366819,
             lng: 22.000693
         },
         zoom: 16,
         
     });

     var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
	});

 }
