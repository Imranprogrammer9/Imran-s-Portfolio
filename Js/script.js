// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }, autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
});

// TypeWriter JS Typing Effect For Desc
var descTypeWriterEffect = document.getElementById('descTypeWriterEffect');
var typewriterDesc = new Typewriter(descTypeWriterEffect, {
    loop: true,
});
typewriterDesc.typeString('I am a Web Developer.')
    .pauseFor(2000)
    .deleteChars(16)
    .typeString('Passionate in FrontEnd Dev.')
    .pauseFor(2000)
    .start();
document.getElementById('descTypeWriterEffect').style.backgroundColor = 'black';
document.getElementById('descTypeWriterEffect').style.color = 'white';
document.getElementById('descTypeWriterEffect').style.paddingLeft = '5px';

// Second Line
var descTypeWriterEffect1 = document.getElementById('descTypeWriterEffect1');
var typewriterDesc1 = new Typewriter(descTypeWriterEffect1, {
    loop: true,
});
typewriterDesc1.typeString('Lets Work Together.')
    .pauseFor(2000)
    .deleteChars()
    .start();
document.getElementById('descTypeWriterEffect1').style.marginTop = '5px';
document.getElementById('descTypeWriterEffect1').style.paddingLeft = '5px';
document.getElementById('descTypeWriterEffect1').style.backgroundColor = 'black';
document.getElementById('descTypeWriterEffect1').style.color = 'white';

// Third Line
var descTypeWriterEffect2 = document.getElementById('descTypeWriterEffect2');
var typewriterDesc2 = new Typewriter(descTypeWriterEffect2, {
    loop: true,
});
typewriterDesc2.typeString('For Further Info Contact Me!.')
    .pauseFor(2000)
    .deleteChars()
    .start();
document.getElementById('descTypeWriterEffect2').style.marginTop = '5px';
document.getElementById('descTypeWriterEffect2').style.paddingLeft = '5px';
document.getElementById('descTypeWriterEffect2').style.backgroundColor = 'black';
document.getElementById('descTypeWriterEffect2').style.color = 'white';


// Side Bar
function toggleNav() {
    document.getElementById("sideNav").classList.toggle('openMenu');
}