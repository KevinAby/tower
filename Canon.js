class Canon{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.7,
            'friction':1.2,
            'density':3.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
         this.width = width;
         this.height = height;
         this.image = loadImage("sprites/polygon.png");
        World.add(world, this.body);
      }
      display(){
       
        push();
        
        
     imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width+20, this.height+20);
        pop();
      }
}