class Ground{
    constructor(x, y, width, height, ground_options) {
        var ground_options = {
            isStatic: true
        }
     
        this.body = Bodies.rectangle(0, 350, 1600, 10, ground_options);
        this.width = 1600;
        this.height = 10;
        World.add(world,this.body);
    }
     display() {
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
     }
}