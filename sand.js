class Sand{
    constructor(x,y,radius) {
        var options = {
            restitution:1,
            density:0.1,
            friction:0.3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=2*radius;
        World.add(world, this.body);
      }
      display(){
        push()
        fill("yellow")
        var pos =this.body.position;
        translate (pos.x, pos.y)
        rotate (this.body.angle)
        rectMode(CENTER);
        circle(0,0, this.radius);
        pop ()
      }



    

}