window.onload = function() {
   MaskedInput({
      elm: document.getElementById('phone'),
      format: '+375 (__) ___-__-__',
      separator: '+375 ()-'
   });
};


ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
            center: [53.90, 27.60],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([53.941135, 27.599812], {
            balloonContent: 'Минск Мележа 1 (БЦ Парус) офис 23'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([53.904671, 27.495526], {
            balloonContent: 'Минск Одоевского 28 офис 8'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([53.88428, 27.448275], {
            balloonContent: 'Минск Шаранговича 25 (ТЦ Магнит пав. 230)'
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

function handleForm() {
    var model =   document.getElementById('model').value;
    var problem = document.getElementById('problem').value;
    var name =    document.getElementById('name').value;
    var phone =   document.getElementById('phone').value;

    var regex = new RegExp('^\\+375 \\((17|29|33|44)\\) [0-9]{3}-[0-9]{2}-[0-9]{2}$');
    if (regex.test(phone))
        sendRequest(model, problem, name, phone);
    else    
        alert('Неверный формат телефона');
}

function isEnter(e) {
    if (e.keyCode == 13) handleForm();
}

function showModal() {
    if (document.getElementById('modal-send-review').style.display == 'none')
        document.getElementById('modal-send-review').style.display = 'block';
    else 
        document.getElementById('modal-send-review').style.display = 'none';
}

document.onkeydown = handleKey;
function handleKey(e) {
    if (e.keyCode == 27) // esc
        document.getElementById('modal-send-review').style.display = 'none';
}

function sendRequest(model, problem, name, phone) {
    document.getElementById('page').className = 'waiting';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert('Заявка отправлена, скоро мы вам позвоним');
            document.getElementById('page').className = '';
        }
    }
    var message = 'Модель: ' + model + '<br>Что случилось: ' + problem + '<br>Имя: ' + name + '<br>Телефон: ' + phone;
    xhttp.open('GET', 'https://mandrillapp.com/api/1.0/messages/send.json?message[from_email]=mail@7995.by&message[to][0][email]=zdanevich.vitaly@ya.ru&message[subject]=Заявка%20с%207995.by&message[html]='+message+'&key=oxdROOvCpKCp6InvVDqiGw', true);
    xhttp.send();
}

function sendReview() {
    document.getElementById('page').className = 'waiting';
    var review = document.getElementById('users-review').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert('Ваш отзыв отправлен, спасибо, мы его изучим - нам важно чтобы вы были довольны')
            document.getElementById('page').className = '';
        }
    }
    xhttp.open('GET', 'https://mandrillapp.com/api/1.0/messages/send.json?message[from_email]=mail@7995.by&message[to][0][email]=zdanevich.vitaly@ya.ru&message[subject]=Отзыв%20с%207995.by&message[html]='+review+'&key=oxdROOvCpKCp6InvVDqiGw', true);
    xhttp.send();
}