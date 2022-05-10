function setup() {
    let canvas = document.getElementById("invaders-canvas");
    let context = canvas.getContext("2d");
    context.font = "48px serif";
    context.fillText("space invaders", 10, 50);
}


window.addEventListener("load", setup);