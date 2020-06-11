function Square(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = document.createElement("img");
    this.isOpened = false;

    this.drawMyself = () => {
        if(this.isOpened){
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        else {
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }   
}