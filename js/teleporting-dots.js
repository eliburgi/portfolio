// canvas background color
const kBackgroundColor = 0x000028;
// number of dots that will be created
const kInitialDotCount = 30;

// the PIXI application
var app;
// array containing all teleporting dots
var dots;
// PIXI.Graphics object for rendering all dots
var dotsGraphics;

class Dot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.color = 0xffffff;
    }

    update(dt) {
    }

    render(graphics) {
        graphics.beginFill(this.color);
        graphics.drawCircle(this.x, this.y, this.radius);
    }
}

function createInitialDots() {
    let dots = [];
    for (var i = 0; i < kInitialDotCount; i++) {
        dots.push(createRandomDot());
    }
    return dots;
}

function createRandomDot() {
    let width = canvasWidth();
    let height = canvasHeight();
    let newDot = new Dot();
    newDot.radius = width * 4 / 640;
    newDot.x = random(0, width);
    newDot.y = random(0, height);
    newDot.color = randomColor();
    return newDot;
}

function updateDots(dt) {
    dots.forEach(function (dot) {
        dot.update(dt);
        dot.render(dotsGraphics);
    });
}

// create a PIXI application
app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    resolution: 1
});

// add the canvas that Pixi automatically created to the HTML page
document.getElementById("canvas-container").appendChild(app.view);

// use a nice background color for the canvas
app.renderer.backgroundColor = kBackgroundColor;

// make the canvas fill the entire window
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.autoDensity = true;

// setup teleporting dots 
dots = createInitialDots();
dotsGraphics = new PIXI.Graphics();
app.stage.addChild(dotsGraphics);

// start game-loop
app.ticker.add(dt => gameLoop(dt));
function gameLoop(dt) {
    dotsGraphics.clear();
    updateDots(dt);
}

function canvasWidth() {
    return window.innerWidth;
}

function canvasHeight() {
    return window.innerHeight;
}

function random(inclusive, exclusive) {
    return inclusive + Math.random() * (exclusive - inclusive);
}

function randomColor() {
    let hue = random(0, 1);
    let saturation = 0.5;
    let value = 1.0;

    let rgb = HSVtoRGB(hue, saturation, value);
    let hexStr = rgbToHex(rgb.r, rgb.g, rgb.b);
    return PIXI.utils.string2hex(hexStr);
}

// Source: https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function rgbToHex(r, g, b) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
