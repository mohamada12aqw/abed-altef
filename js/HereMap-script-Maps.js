var platform, defaultLayers, map, behavior, ui, coord, Marker;

function moveMapToLocation() {
    getLocation();
}

function getLocation() {
    
    if (navigator.geolocation) {
        if (navigator.geolocation.getCurrentPosition.longitude === 0 && navigator.geolocation.getCurrentPosition.Latitude === 0) {
            navigator.geolocation.getCurrentPosition(showPosition);
            map.setZoom(11);
        } else {
            map.setCenter({ lat: 24.4071379, lng: 44.4836426 });
            map.setZoom(5);
        }

    } else {
        alert('Geolocation is not supported by this browser.');
        map.setCenter({ lat: 24.4071379, lng: 44.4836426 });
        map.setZoom(5);
    }
}

function showPosition(position) {
    
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });

    var Marker = new H.map.Marker({ lat: position.coords.latitude, lng: position.coords.longitude });
    map.addObject(Marker);

}

//Step 1: initialize communication with the platform
platform = new H.service.Platform({
    app_id: 'pr6ratruRepH3pRerA6U', // ALJ Account
    app_code: 'L6JwQvEzUpcRpRgTVnMyKg', // ALJ Account
    useCIT: true,
    useHTTPS: true,
    
});

function setBaseLayer(map, platform) {
    var mapTileService = platform.getMapTileService({
        type: 'aerial'
    });
    var parameters = {
        lg: 'dut'
    };
    var tileLayer = mapTileService.createTileLayer(
        'maptile',
        'hybrid.day',
        256,
        'png8',
        parameters
    );
    map.setBaseLayer(tileLayer);
}

function HereMap() {

    defaultLayers = platform.createDefaultLayers();
    //Step 2: initialize a map  - not specificing a location will give a whole world view.
    map = new H.Map(document.getElementById('map-canvas'), defaultLayers.normal.map);

    var mapTileService = platform.getMapTileService({
        type: 'base'
    }),
        bilingualMapLayer = mapTileService.createTileLayer(
            'maptile',
            'normal.day',
            256,
            'png8',
            { lg: 'ARA', lg2: 'ENG' }
        );
    map.setBaseLayer(bilingualMapLayer);
    restrictMapToKSA(map);

    //setBaseLayer(map,platform)
    //Step 3: make the map interactive

    behavior  = new H.mapevents.Behavior(new H.mapevents.MapEvents(map ));

    // Create the default UI components
    ui = H.ui.UI.createDefault(map, defaultLayers);
    //var panorama = ui.getControl('panorama');
    //panorama.setAlignment('top-right');
    // Now use the map as required...
    moveMapToLocation();
    //addMarkersToMap(map);
    //setUpClickListener(map, behavior );


    setList(map, Cities);
    addInfoBubble(map, branches);
    //setMarkers(map, branches);
    // Update SelectPicker fuction after drawing map and binding branches
    $('#locateAdvisor,#locateAdvisorLA').selectpicker({
        maxOptions: 1,
        liveSearch: true
    });
    $('[data-id*="locateAdvisor"]').parent().find('.dropdown-menu.inner').append('<li>' + ourBranches + brancheNearMe + '</li>');
    $('.buttonClass').click(function () {
        location = $(this).attr('href');
    });

    // Focus on branches when select 
    $('select[id*="locateAdvisor"]').change(function () {
        itemIdx = $(this).find('>option:selected').index();
        if (itemIdx != 0 && $(this).find('>option:selected').attr('data-class') != 'buttonClass' && $(this).find('>option:selected').length > 0) { // Exclude select phrase index
            posValue = $(this).find('>option:selected').val().toString();
            LatLngValue = posValue.split(',');
            map.setCenter({ lat: LatLngValue[0], lng: LatLngValue[1] });
            map.setZoom(11);
            $(".locateAdvisorInner").hide();
            $(".openBox").show();

        }


    });

    setUpClickListener(map, behavior);
};



function setList(map, locations) {

    // Added By Luay
    for (var i = 0; i < locations.length; i++) {
        var City = locations[i];
        // Append Branches Values to DropDown list
        $('#locateAdvisor > option:eq(' + i + ')').after('<option value="' + City[0] + ',' + City[1] + '">' + City[3] + '</option>');
        $('#locateAdvisorLA > option:eq(' + i + ')').after('<option value="' + City[0] + ',' + City[1] + '">' + City[3] + '</option>');
    }
}

function addMarkerToGroup(group, coordinate, html) {
    var icon = new H.map.Icon('./img/map-marker.png', { size: { w: 40, h: 40 } });
    var marker = new H.map.Marker(coordinate, { icon: icon }); 
    marker.setData(html);
    group.addObject(marker);
}

function addInfoBubble(map, locations) {
    var group = new H.map.Group();

    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt) {
        // event target is the marker itself, group is a parent event target
        // for all objects that it contains
        var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {          
            content: evt.target.getData()          
        });
        // show info bubble
        ui.addBubble(bubble);
    }, false);


      for (var i = 0; i < locations.length; i++) {
        var branch = locations[i];
          var contentString = '<div class="speech"><P class="classBold"><strong>' + branch[4] + '</strong></p><p>' + branch[5] + '</p><p>' + branch[6] + '</p><p>' + branch[7] + '</p><p>' + '<a href="javascript:void(0);" onClick="map.setCenter({ lat: ' + branch[1] + ', lng:' + branch[2] + '});map.setZoom(18);">' + branch[8] + '</a>' + '</p></div>';
        addMarkerToGroup(group, { lat: branch[1], lng: branch[2] }, contentString);
      }

}

function restrictMapToKSA(map) {
    var bounds = new H.geo.Rect(32.15, 34.00, 16.35, 55.65);

    map.getViewModel().addEventListener('sync', function () {
        var center = map.getCenter();

        if (!bounds.containsPoint(center)) {
            if (center.lat > bounds.getTop()) {
                center.lat = bounds.getTop();
            } else if (center.lat < bounds.getBottom()) {
                center.lat = bounds.getBottom();
            }
            if (center.lng < bounds.getLeft()) {
                center.lng = bounds.getLeft();
            } else if (center.lng > bounds.getRight()) {
                center.lng = bounds.getRight();
            }
            map.setCenter(center);
        }
    });
}