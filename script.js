let menuBtn = document.querySelector('.menu');
let crossBtn = document.querySelector('.cross');
let menu = document.querySelector('.menuSlider');
let main = document.querySelector('.main');

menuBtn.addEventListener('click', function(){
    menu.style.display = 'block';
    menu.style.transform = 'translateX(0%)';
    menu.style.opacity = 1
    main.style.overflowY = 'hidden';
})

crossBtn.addEventListener('click', function(){
    menu.style.display = 'none';
    menu.style.transform = 'translateX(-100%)';
    menu.style.opacity = 0
    main.style.overflowY = 'auto';
})