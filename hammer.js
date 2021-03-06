class Hammer{
    constructor(x,y,width,height) {
        var options = {
            restitution:0.3,
            density:6,
            friction:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
          this.body.position.x=mouseX
          this.body.position.y=mouseY
        push()
        fill("brown")
        var pos =this.body.position;
        translate (pos.x, pos.y)
        rotate (this.body.angle)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop ()
      }
}