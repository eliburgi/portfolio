// the colors used in the app
const kBackgroundColor = 0x000028;

// create a PIXI application
let app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    resolution: 1
});

// add the canvas that Pixi automatically created to the HTML page
document.body.appendChild(app.view);

// use a nice background color for the canvas
app.renderer.backgroundColor = kBackgroundColor;

// make the canvas fill the entire window
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// setup game-loop
app.ticker.add(dt => gameLoop(dt));
function gameLoop(dt) {
    console.log("update " + dt);
}