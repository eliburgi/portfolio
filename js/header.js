
const kAppScreens = [
    'img/header/app.png',
    'img/header/app.png',
    'img/header/app.png'
];

let leftScreenImg = document.getElementById('left-app-screen');
let frontScreenImg = document.getElementById('front-app-screen');
let rightScreenImg = document.getElementById('right-app-screen');

leftScreenImg.setAttribute('src', kAppScreens[0]);
frontScreenImg.setAttribute('src', kAppScreens[1]);
rightScreenImg.setAttribute('src', kAppScreens[2]);