
//snazzymap styling

var mapStyle=[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f1efed"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f1efed"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e0dedc"
            },
            {
                "lightness": "27"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e0dedc"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f9f7f5"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f9f7f5"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f9f7f5"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f9f7f5"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    }
]




function initMap(){

	//put your stores in a array []
	var stores = [{
					latlng:{lat: -36.7879462, lng: 174.7726528},
					name: 'Movenpick Takapuna',
					address: '33-45 Hurstmere Rd, Takapuna',
					icon: 'marker1.png'
				},


				{
					latlng:{lat: -36.8484344, lng: 174.8298158},
					name: 'Movenpick Misson Bay',
					address: '75 Tamaki Dr, Mission Bay',
					icon: 'marker2.png'
				},

				{
				
					latlng:{lat: -36.8680645, lng: 174.7784261},
					name: 'Movenpick New Market',
					address: '160 Broadway, New Market',
					icon: 'marker3.png'	
			 	}]


	var map = new google.maps.Map(document.getElementById('map'), {

		zoom: 12,
		center: {lat: -36.7879462, lng: 174.7726528},
		styles: mapStyle
	});


	for(var i=0;i<stores.length;i++){
		

		let store = stores[i];

		let markerIcon = {
					//change icon to url for your own icons
					url:'assets/'+store.icon,
					size: new google.maps.Size(100,100),
		};
		let storeMarker = new google.maps.Marker({
							position:store.latlng,
							map: map,
							icon: markerIcon
						});
        //everything that appears inside window pop-up
        let infoText = '<div class="content"><h2>'+store.name+'</h2>'+'&nbsp;'+'<p class="address">'+store.address+'</p></div>'


        // console.log(infoText);


		let storeInfoWindow = new google.maps.InfoWindow({
							content: infoText
						});	

		storeMarker.addListener('click',function(){
			storeInfoWindow.open(map,storeMarker);
		});	
	}
											
};			 	