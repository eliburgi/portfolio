
// TODO: 
const _kWorkList = [
    {
        title: 'sQrz',
        desc: 'A highly addictive puzzle-game.',
        img: 'img/work/sQrz.png',
        githubUrl: 'TODO',
        playStoreUrl: 'TODO',
        appStoreUrl: 'TODO',
        hashtags: ['#flutter', '#android', '#ios']
    },
    {
        title: 'Celery With Me',
        desc: 'Inspired by @medicalmedium. For every celery lover out there.',
        img: 'img/work/celery_with_me.png',
        githubUrl: 'https://github.com/eliburgi/celerywithme',
        playStoreUrl: 'TODO',
        hashtags: ['#flutter', '#android', '#ios'],
        fontFamily: 'Pacifico'
    },
    {
        title: 'Today',
        desc: 'The todo list that focuses on what is important today.',
        img: 'img/work/today.png',
        githubUrl: 'https://github.com/eliburgi/celerywithme',
        playStoreUrl: 'TODO',
        hashtags: ['#flutter', '#android', '#ios']
    },
    {
        title: 'Butterfly',
        desc: 'Become the best version of you. Day by day.',
        img: 'img/work/butterfly.png',
        githubUrl: 'https://github.com/eliburgi/celerywithme',
        playStoreUrl: 'TODO',
        hashtags: ['#flutter', '#android', '#ios'],
        fontFamily: 'Pacifico'
    },
    {
        title: 'gOOse',
        desc: 'Prototype for a tinder-like news application.',
        img: 'img/work/goose.png',
        githubUrl: 'TODO',
        hashtags: ['#flutter', '#prototype', '#tinder-cards']
    },
    {
        title: 'nmbrz',
        desc: 'Number trivia app. Explore the meaning of numbers.',
        img: 'img/work/nmbrz.png',
        githubUrl: 'TODO',
        appStoreUrl: 'TODO'
    }
];

var workContainer = document.getElementById('my-work-container');
for (var i = 0; i < _kWorkList.length; i++) {
    let card = _buildWorkCard(_kWorkList[i], i);
    workContainer.appendChild(card);
}

function _buildWorkCard(work, index) {
    var card = document.createElement('div');
    card.setAttribute('class', 'work-card');

    if (work.img) {
        var bgImg = document.createElement('div');
        bgImg.setAttribute('class', 'work-card-img');
        bgImg.style.backgroundImage = "url(\'" + work.img + "\')";
        card.appendChild(bgImg);
    }

    var content = document.createElement('div');
    content.setAttribute('class', 'work-card-body');
    card.appendChild(content);

    var title = document.createElement('h1');
    if (work.fontFamily) {
        title.style.fontFamily = work.fontFamily;
    }
    title.style.opacity = 1.0;
    title.innerHTML = work.title || 'no_title';
    content.appendChild(title);

    if (work.desc) {
        var description = document.createElement('p');
        description.innerHTML = work.desc;
        content.appendChild(description);
    }

    if (work.hashtags) {
        var hashtags = document.createElement('p');
        hashtags.setAttribute('class', 'caption');
        for (var i = 0; i < work.hashtags.length; i++) {
            if (i > 0) {
                hashtags.innerHTML += ' '
            }
            hashtags.innerHTML += work.hashtags[i];
        }
        content.appendChild(hashtags);
    }

    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'work-card-overlay');
    card.appendChild(overlay);

    var overlayContent = document.createElement('div');
    overlayContent.setAttribute('class', 'work-card-overlay-content');
    overlay.appendChild(overlayContent);

    if (work.githubUrl) {
        var githubButton = document.createElement('button');
        githubButton.setAttribute('class', 'icon-button');
        githubButton.onclick = function () {
            _launchUrl(work.githubUrl);
        };
        overlayContent.appendChild(githubButton);
        var githubIcon = document.createElement('i');
        githubIcon.setAttribute('class', 'fa fa-github fa-3x');
        githubButton.appendChild(githubIcon);
    }

    if (work.playStoreUrl) {
        var googlePlayButton = document.createElement('button');
        googlePlayButton.setAttribute('class', 'icon-button');
        googlePlayButton.onclick = function () {
            _launchUrl(work.playStoreUrl);
        };
        overlayContent.appendChild(googlePlayButton);
        var googlePlayIcon = document.createElement('i');
        googlePlayIcon.setAttribute('class', 'fa fa-android fa-3x');
        googlePlayButton.appendChild(googlePlayIcon);
    }

    if (work.appStoreUrl) {
        var appStoreButton = document.createElement('button');
        appStoreButton.setAttribute('class', 'icon-button');
        appStoreButton.onclick = function () {
            _launchUrl(work.appStoreUrl);
        };
        overlayContent.appendChild(appStoreButton);
        var appStoreIcon = document.createElement('i');
        appStoreIcon.setAttribute('class', 'fa fa-apple fa-3x');
        appStoreButton.appendChild(appStoreIcon);
    }

    /* animate on scroll */
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 100);

    return card;
}

function _launchUrl(url) {
    window.open(url);
}