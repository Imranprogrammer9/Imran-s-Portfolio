// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }, autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

// TypeWriter JS Typing Effect For Desc
var introTypeWriterEffect = document.getElementById('introTypeWriterEffect');
var typewriterIntro = new Typewriter(introTypeWriterEffect, {
    loop: true,
    cursor: ""
});
typewriterIntro.typeString('<h1>Hi, I am <span>Imran Haider</span> </h1>')
    .pauseFor(100)
    .deleteChars()
    .typeString('A Guy Pasionate in JavaScript')
    .pauseFor(10)
    .deleteChars(4)
    .typeString('Hello World')
    .pauseFor(10)
    .start();
