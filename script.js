mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpaml0MjAiLCJhIjoiY2tzdTZvZ2djMWN6czMyb2RjZTc5ZnRwaiJ9.MbCRmPJTgDyc57XtwSv9RA';

navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation,{ enableHighAccuracy:true})

    function successLocation(position){
        console.log(position)
        setupMap([position.coords.longitude, position.coords.latitude])

    }
    function errorLocation(){
             setupMap([-77.5946, 12.9716])
       
    }
    function setupMap(center){
      
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position
        zoom: 9 // starting zoom
        });
         
        map.addControl(new mapboxgl.NavigationControl());

        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken ,
          
          });
          
          map.addControl(directions, 'top-left');
        // Add zoom and rotation controls to the map.
      
        
    }

    