
const kAppScreens = [
    'img/header/app.png',
    'img/header/app.png',
    'img/header/app.png'
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

    /* TODO: animate change */ 
    // front -> right
    // left -> front
    // right -> left and gets new img
    // _updateScreens();
}

function _rotateLeft() {
    _frontIndex = _rightIndex();

    tmpScreenImg.setAttribute('src', kAppScreens[_leftIndex()]);
    leftScreenImg.setAttribute('src', kAppScreens[_leftIndex()]);
    frontScreenImg.setAttribute('src', kAppScreens[_frontIndex]);
    rightScreenImg.setAttribute('src', kAppScreens[_rightIndex()]);

    /* hack to restart animation everytime this function is called */ 
    /* source: https://css-tricks.com/restart-css-animation/ */ 
    tmpScreenImg.classList.remove('left-disappear');
    void tmpScreenImg.offsetWidth;
    tmpScreenImg.classList.add('left-disappear');

    leftScreenImg.classList.remove('front-rotate-left');
    void leftScreenImg.offsetWidth;
    leftScreenImg.classList.add('front-rotate-left');

    frontScreenImg.classList.remove('right-rotate-left');
    void frontScreenImg.offsetWidth;
    frontScreenImg.classList.add('right-rotate-left');

    rightScreenImg.classList.remove('right-appear');
    void rightScreenImg.offsetWidth;
    rightScreenImg.classList.add('right-appear');
}

function _updateScreens() {
    leftScreenImg.setAttribute('src', kAppScreens[_leftIndex()]);
    frontScreenImg.setAttribute('src', kAppScreens[_frontIndex]);
    rightScreenImg.setAttribute('src', kAppScreens[_rightIndex()]);
}

