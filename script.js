var map;

DG.then(function () {
    map = DG.map('map', {
        center: [54.72, 20.52],
        zoom: 16
    });

    DG.marker([54.7214, 20.5265], {label: "Студия звукозаписи Red Room"}).addTo(map).bindPopup('Заблудился? Звони: +7(900)567-97-48', { static: true });
    

});