ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [53.90, 27.60],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([53.941135, 27.599812], {
            balloonContent: 'Минск Мележа 1 (офис 23)'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([53.904671, 27.495526], {
            balloonContent: 'Минск Одоевского 28 офис 8'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }));
}
