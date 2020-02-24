
// TODO: 
const myWork = [
    {
        title: 'sQrz',
        desc: 'A highly addictive puzzle-game.',
        img: 'img/work/sQrz.png',
        githubUrl: 'TODO',
        playStoreUrl: 'TODO',
        appStoreUrl: 'TODO'
    },
    {
        title: 'Celery With Me',
        desc: 'Inspired by @medicalmedium. For every celery lover out there.',
        img: 'img/work/celery_with_me.png',
        githubUrl: 'TODO',
        playStoreUrl: 'TODO',
        fontFamily: 'Pacifico'
    },
    {
        title: 'sQrz',
        img: 'img/work/sQrz.png',
        githubUrl: 'TODO',
        appStoreUrl: 'TODO'
    },
    {
        title: 'Celery With Me',
        fontFamily: 'Pacifico',
        img: 'img/work/celery_with_me.png',
        githubUrl: 'TODO'
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

    if (work.desc) {
        content.innerHTML += work.desc;
    } else {
        content.innerHTML += "adsad <br> adsda <br> asd <br> adsad <br> adsda <br> asd";
    }

    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'card-work-overlay');
    card.appendChild(overlay);

    var overlayContent = document.createElement('div');
    overlayContent.setAttribute('class', 'overlay-content');
    overlay.appendChild(overlayContent);

    if (work.githubUrl) {
        var githubButton = document.createElement('button');
        githubButton.setAttribute('class', 'icon-button');
        overlayContent.appendChild(githubButton);
        var githubIcon = document.createElement('i');
        githubIcon.setAttribute('class', 'fa fa-github fa-3x');
        githubButton.appendChild(githubIcon);
    }

    if (work.playStoreUrl) {
        var googlePlayButton = document.createElement('button');
        googlePlayButton.setAttribute('class', 'icon-button');
        overlayContent.appendChild(googlePlayButton);
        var googlePlayIcon = document.createElement('i');
        googlePlayIcon.setAttribute('class', 'fa fa-android fa-3x');
        googlePlayButton.appendChild(googlePlayIcon);
    }

    if (work.appStoreUrl) {
        var appStoreButton = document.createElement('button');
        appStoreButton.setAttribute('class', 'icon-button');
        overlayContent.appendChild(appStoreButton);
        var appStoreIcon = document.createElement('i');
        appStoreIcon.setAttribute('class', 'fa fa-apple fa-3x');
        appStoreButton.appendChild(appStoreIcon);
    }

    return card;
}