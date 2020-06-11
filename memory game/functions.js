let crateGrid = () => {
    for(let row = 0; row < gridSize; row++){

        grid[row] = [];

        for(let col = 0; col < gridSize; col++){
            grid[row].push(new Square(col * squareSize, row * squareSize, squareSize, squareSize))
        }
    }
},

random = (min, max) => (Math.random() * (max - min) + min) | 0

drawGrid = () => {
    grid.forEach(row => row.forEach(square => square.drawMyself()))
},

attachRandomImageToEachSquare = () => {
    let srcNames = ["flower.jpg", "guy.jpg", "hawai.jpg", "heart.jpg", "kuche.jpg", "kushta.jpg", "lions.jpg", "love.jpg"],
        index = 0;

    srcNames.forEach(name => srcNames.push(name));
    
    for(let i = 0; i < srcNames.length; i++){
        srcNames[i] = "photos/" + srcNames[i];
    }

    for(let i = 0; i < srcNames.length - 1; i++){
        let rnd = random(i + 1, srcNames.length),
            temp = srcNames[i];

            srcNames[i] = srcNames[rnd];
            srcNames[rnd] = temp;
    }
    
    grid.forEach(row => row.forEach(square => {
        square.img.src = srcNames[index];
        index++;
    }));
}
