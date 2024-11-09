function showText(textId, clickedButton) {
    // Скрываем все текстовые блоки
    var texts = document.querySelectorAll('.box2 .text-block');
    texts.forEach(function(text) {
        text.classList.remove('visible');
        text.classList.add('hidden');
    });

    // Показываем выбранный текст
    var selectedText = document.getElementById(textId);
    selectedText.classList.remove('hidden');
    selectedText.classList.add('visible');

    // Сбрасываем все кнопки в "неактивное" состояние только внутри блока box2
    var buttons = document.querySelectorAll('.box2 button');
    buttons.forEach(function(button) {
        button.classList.remove('active-button');
        button.classList.add('inactive-button');
    });

    // Добавляем класс "active-button" к нажатой кнопке
    clickedButton.classList.remove('inactive-button');
    clickedButton.classList.add('active-button');
}

// Кнопки дом коттедж и гос заказы
function showButton(textId, clickedButton) {
    
    var texts = document.querySelectorAll('.btn-text');
    texts.forEach(function(text) {
        text.classList.remove('visible');
        text.classList.add('hidden');
    });

    
    var selectedText = document.getElementById(textId);
    selectedText.classList.remove('hidden');
    selectedText.classList.add('visible');

   
    var buttons = document.querySelectorAll('.test button');
    buttons.forEach(function(button) {
        button.classList.remove('active-btn');
        button.classList.add('inactive-btn');
    });

// Сбрасываем цвет текста всех абзацев
var paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(p) {
    p.classList.remove('active-text'); // Убираем класс активного текста
});

// Добавляем класс активного текста к соответствующему абзацу
if (textId === 'btnText1') {
    document.getElementById('btn-home').classList.add('active-text');
} else if (textId === 'btnText2') {
    document.getElementById('btn-cotege').classList.add('active-text');
} else if (textId === 'btnText3') {
    document.getElementById('btn-goss').classList.add('active-text');
}  

    clickedButton.classList.remove('inactive-btn');
    clickedButton.classList.add('active-btn');
}


// Слайдер
let currentSlides = { slider1: 0, slider2: 0, slider3: 0};

function changeSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slides img');
    currentSlides[sliderId] += direction;

    if (currentSlides[sliderId] < 0) {
        currentSlides[sliderId] = slides.length - 1;
    } else if (currentSlides[sliderId] >= slides.length) {
        currentSlides[sliderId] = 0;
    }

    const slideWidth = slides[0].clientWidth;
    const offset = -currentSlides[sliderId] * slideWidth;

    slider.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

