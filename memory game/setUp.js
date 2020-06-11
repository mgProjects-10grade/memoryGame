const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    strokeColor = "white",
    strokeWeight = 4;
    fillColor = "chartreuse",
    gridSize = 4,    
    grid = [],
    currentOpenSquares = [],
    couplesCount = gridSize ** 2 / 2,
    millisecondsToWait = 1000;
                        

canvas.width = window.innerHeight - 5;
canvas.height = canvas.width;

let squareSize = canvas.width / gridSize,
    couplesGuessed = 0,
    congratulationImage = document.createElement("img");

document.body.style.margin = 0;
document.body.style.overflow = "hidden";
canvas.style.border="2px solid chartreuse";

canvas.style.position = "relative";
canvas.style.left = window.innerWidth / 2 - canvas.width / 2 + "px";

congratulationImage.src = "photos/congratulations.jpg";