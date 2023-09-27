const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuBlock = document.querySelector('.menu__block'),
      closeElem = document.querySelector('.menu__close'),
      closeElemTwo = document.querySelector('.menu__overlay');          

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    menuBlock.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBlock.classList.remove('active');
});

closeElemTwo.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBlock.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});