
const kAppScreens = [
    'img/header/sQrz.png',
    'img/header/celery-with-me.png',
    'img/header/today.png',
    'img/header/flourish.png',
    'img/header/love.png',
    'img/header/tennis-club.png',
];

var _frontIndex = 0;
var _leftIndex = () => _frontIndex - 1 >= 0 ? _frontIndex - 1 : kAppScreens.length - 1;
var _rightIndex = () => _frontIndex + 1 < kAppScreens.length ? _frontIndex + 1 : 0;

var leftScreenImg = document.getElementById('left-app-screen');
var frontScreenImg = document.getElementById('front-app-screen');
var rightScreenImg = document.getElementById('right-app-screen');
var tmpScreenImg = document.getElementById('tmp-app-screen');

leftScreenImg.addEventListener('click', (e) => _rotateRight());
rightScreenImg.addEventListener('click', (e) => _rotateLeft());

_updateScreens();

function _rotateRight() {
    _frontIndex = _leftIndex();

    tmpScreenImg.setAttribute('src', rightScreenImg.getAttribute('src'));
    _updateScreens();

    /* hack to restart animation everytime this function is called */ 
    /* source: https://css-tricks.com/restart-css-animation/ */ 
    tmpScreenImg.className = "";
    void tmpScreenImg.offsetWidth;
    tmpScreenImg.classList.add('right-disappear');

    leftScreenImg.className = "";
    void leftScreenImg.offsetWidth;
    leftScreenImg.classList.add('left-appear');

    frontScreenImg.className = "";
    void frontScreenImg.offsetWidth;
    frontScreenImg.classList.add('left-rotate-right');

    rightScreenImg.className = "";
    void rightScreenImg.offsetWidth;
    rightScreenImg.classList.add('front-rotate-right');
}

function _rotateLeft() {
    _frontIndex = _rightIndex();

    tmpScreenImg.setAttribute('src', leftScreenImg.getAttribute('src'));
    _updateScreens();

    /* hack to restart animation everytime this function is called */ 
    /* source: https://css-tricks.com/restart-css-animation/ */ 
    tmpScreenImg.className = "";
    void tmpScreenImg.offsetWidth;
    tmpScreenImg.classList.add('left-disappear');

    leftScreenImg.className = "";
    void leftScreenImg.offsetWidth;
    leftScreenImg.classList.add('front-rotate-left');

    frontScreenImg.className = "";
    void frontScreenImg.offsetWidth;
    frontScreenImg.classList.add('right-rotate-left');

    rightScreenImg.className = "";
    void rightScreenImg.offsetWidth;
    rightScreenImg.classList.add('right-appear');
}

function _updateScreens() {
    leftScreenImg.setAttribute('src', kAppScreens[_leftIndex()]);
    frontScreenImg.setAttribute('src', kAppScreens[_frontIndex]);
    rightScreenImg.setAttribute('src', kAppScreens[_rightIndex()]);
}

