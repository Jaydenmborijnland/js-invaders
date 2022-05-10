let player = {
    x: 400
};


function draw() {
    let canvas = document.getElementById("invaders-canvas");
    let context = canvas.getContext("2d");
    
    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 600);
    context.font = "48px serif";
    context.fillStyle = "white";

    context.fillText("space invaders", 10, 50);
    context.fillStyle = "blue";
    //context.fillRect(390, 580, 20, 20);
    context.beginPath();
    context.moveTo(player.x, 580);
    context.lineTo(player.x - 10, 600);
    context.lineTo(player.x + 10, 600);
    context.fill();
}

function setup() {
    draw();
}

function movePlayer(event) {
    switch(event.key){
        case "ArrowLeft":
        player.x -= 10;    
        break;
        case "ArrowRight":
            player.x += 10;
        break;

    }
        
    draw();



}

window.addEventListener("load", setup);
window.addEventListener("keydown", movePlayer);