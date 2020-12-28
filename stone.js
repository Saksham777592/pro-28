class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            friction: 1,
            density: 1.3
        }
       
        this.r = r;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, r, options);

        World.add(world, this.body);
    }
    display() {
       var pos=this.body.position;
        push();
        rotate(this.body.angle);
        fill("white");
        imageMode(CENTRE);
        image(this.image,pos.x,pos.y, this.r, this.r);
        pop();
    }
} 