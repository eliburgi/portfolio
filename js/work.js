
// TODO: 
const myWork = [
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png'
    }
];

var workContainer = document.getElementById('my-work-container');
myWork.forEach(function (work) {
    let card = _buildWorkCard(work);
    workContainer.appendChild(card);
});

function _buildWorkCard(work) {
    var card = document.createElement('div');
    card.setAttribute('class', 'card-work');

    if (work.img) {
        var bgImg = document.createElement('div');
        bgImg.setAttribute('class', 'card-work-bg');
        bgImg.style.backgroundImage = "url(\'" + work.img + "\')";
        card.appendChild(bgImg);
    }

    var content = document.createElement('div');
    content.setAttribute('class', 'card-work-content');
    card.appendChild(content);

    var title = document.createElement('h1');
    if (work.fontFamily) {
        title.style.fontFamily = work.fontFamily;
    }
    title.style.opacity = 1.0;
    title.innerHTML = work.title || 'no_title';
    content.appendChild(title);

    content.innerHTML += "adsad <br> adsda <br> asd <br> adsad <br> adsda <br> asd";

    return card;
}