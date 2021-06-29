class Dustbin {
    constructor(x, y, width, height, dustbin_options) {
        var dustbin_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, dustbin_options);
        this.width = width;
        this.height = height;
       
        World.add(world,this.body);
   
   }

   display() {
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}