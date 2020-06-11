ctx.strokeStyle = strokeColor;
ctx.fillStyle = fillColor;
ctx.lineWidth = strokeWeight;

crateGrid();
attachRandomImageToEachSquare();
drawGrid();

document.body.addEventListener("click", (event) => {
    let xToCheck = event.clientX - parseFloat(canvas.style.left),
        yToCheck = event.clientY;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++){
            let currentSquare = grid[row][col];
            if(currentSquare.x <= xToCheck && currentSquare.x + squareSize >= xToCheck &&
                currentSquare.y <= yToCheck && currentSquare.y + squareSize >= yToCheck && !currentSquare.isOpened){

                currentSquare.isOpened = true;
                currentOpenSquares.push({row : row, col : col});                                

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawGrid();

                if(currentOpenSquares.length == 2){
                    if(grid[currentOpenSquares[0].row][currentOpenSquares[0].col].img.src != grid[currentOpenSquares[1].row][currentOpenSquares[1].col].img.src){
                        grid[currentOpenSquares[0].row][currentOpenSquares[0].col].isOpened = false;
                        grid[currentOpenSquares[1].row][currentOpenSquares[1].col].isOpened = false;
                        
                        setTimeout(() => {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            drawGrid();
                            
                        }, millisecondsToWait);
                    }
                    else {
                        couplesGuessed++;
                    }

                    currentOpenSquares = [];                    
                }

                if(couplesGuessed == couplesCount){   
                    setTimeout(() => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        grid = [];
                        
                        ctx.drawImage(congratulationImage, 0, 0, canvas.width, canvas.height);
                    }, millisecondsToWait)      
                    
                    setTimeout(() => {
                        crateGrid();
                        attachRandomImageToEachSquare();
                        drawGrid();
                    }, millisecondsToWait * 2)

                    couplesGuessed = 0;
                }

                return;
            }
        }
    }
});