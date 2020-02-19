// canvas background color
const kBackgroundColor = 0x000028;
// number of dots that will be created
const kInitialDotCount = 1;

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

        this.t = 0;
    }

    update(dt) {
        console.log(dt);
        this.t += dt; 
        this.x = Math.sin(this.t / 100) * 50;
    }

    render(graphics) {
        graphics.beginFill(this.color);
        graphics.drawRect(this.x, 30, 50, 50);
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
    let newDot = new Dot();

    // TODO: set properties

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
