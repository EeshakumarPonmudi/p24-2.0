class Paper{
    constructor(x, y, radius, paper_options,) {
        var paper_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        
            
        this.body = Matter.Bodies.circle(200,330,20,paper_options);
        World.add(world,this.body);
    }

    display() {
        //var pos = this.body.position;
        fill("lightblue");   
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 20, 20);
    
    }
}