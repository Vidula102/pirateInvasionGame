class Cannon {
  constructor(x, y, width, height, angle) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannonImg = loadImage('./assets/canon.png');
    this.cannonBaseImg = loadImage('./assets/cannonBase.png');

  }

  display(){

    if (keyIsDown (RIGHT_ARROW) ){
      this.angle += 1;
    }

    if (keyIsDown (LEFT_ARROW) ){
      this.angle -= 1;
    }

    push();

    imageMode(CENTER);

    //image command for cannon
    image(this.cannonImg,this.x, this.y, this.width, this.height);

    pop();

    noFill();

    //image command for cannonbase
    image(this.cannonBaseImg, 70, 20, 200, 200);

  }
}
