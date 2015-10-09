ymaps.ready(function() {
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
});

function reviewLeft() {
    var currentId = document.getElementsByClassName('shows')[0].id;
    var currentClassList = document.getElementsByClassName('shows')[0].classList;
    toggleVisabilityOfOneReview(currentClassList);

    if (currentId > 1) {
        var hiddenClassList = document.getElementById(--currentId).classList;
        toggleVisabilityOfOneReview(hiddenClassList);
    } else {
        currentId = 3;
        var hiddenClassList = document.getElementById(currentId).classList;
        toggleVisabilityOfOneReview(hiddenClassList);
    }
}

function reviewRight() {
    var currentId = document.getElementsByClassName('shows')[0].id;
    var currentClassList = document.getElementsByClassName('shows')[0].classList;
    toggleVisabilityOfOneReview(currentClassList);

    if (currentId < 3) {
        var hiddenClassList = document.getElementById(++currentId).classList;
        toggleVisabilityOfOneReview(hiddenClassList);
    } else {
        currentId = 1;
        var hiddenClassList = document.getElementById(currentId).classList;
        toggleVisabilityOfOneReview(hiddenClassList);
    }
}
function toggleVisabilityOfOneReview(classList) {
    classList.toggle('hidden');
    classList.toggle('shows');
}

function send() {
    var model =   document.getElementById('model').value;
    var problem = document.getElementById('problem').value;
    var name =    document.getElementById('name').value;
    var phone =   document.getElementById('phone').value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    }
    xhttp.open('GET', 'https://mandrillapp.com/api/1.0/messages/send.json?message[from_email]=mail@7995.by&message[to][0][email]=zdanevich.vitaly@ya.ru&message[subject]=Заявка%20с%207995.by&message[html]=xxxxxx&key=oxdROOvCpKCp6InvVDqiGw', true);
    xhttp.send();

//     var form = document.createElement('form');
//     form.setAttribute('method', 'POST');
//     form.setAttribute('action', 'https://mandrillapp.com/api/1.0/messages/send.json');
//     form.setAttribute('email', 'zdanevich.vitaly@ya.ru');
//     form.setAttribute('subject', 'Заявка с 7995.by');
//     form.setAttribute('html', 'This is the temp body');
//     form.submit();

}