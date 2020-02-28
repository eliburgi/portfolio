
const kAppScreens = [
    'img/header/app.png',
    'img/header/app-1.png',
    'img/header/app-2.png'
];

var _frontIndex = 0;
var _leftIndex = () => _frontIndex - 1 >= 0 ? _frontIndex - 1 : kAppScreens.length - 1;
var _rightIndex = () => _frontIndex + 1 < kAppScreens.length ? _frontIndex + 1 : 0;

var leftScreenImg = document.getElementById('left-app-screen');
var frontScreenImg = document.getElementById('front-app-screen');
var rightScreenImg = document.getElementById('right-app-screen');

leftScreenImg.addEventListener('click', (e) => rotateRight());
rightScreenImg.addEventListener('click', (e) => rotateLeft());

_updateScreens();

function rotateRight() {
    _frontIndex = _leftIndex();

    /* TODO: animate change */ 
    _updateScreens();
}

function rotateLeft() {
    _frontIndex = _rightIndex();

    /* TODO: animate change */ 
    _updateScreens();
}

function _updateScreens() {
    leftScreenImg.setAttribute('src', kAppScreens[_leftIndex()]);
    frontScreenImg.setAttribute('src', kAppScreens[_frontIndex]);
    rightScreenImg.setAttribute('src', kAppScreens[_rightIndex()]);
}

