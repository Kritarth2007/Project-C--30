class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.4,
          friction:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255
    }
    display(){
      if (this.body.speed<3){
     push() 
     var pos =this.body.position;
     var angle =this.body.angle;
     translate(pos.x,pos.y)
     rotate (angle)
      rectMode(CENTER);
      fill("green");
      rect(0,0,this.width, this.height);
      pop()
      }
      else {
        World.remove(world,this.body)
        push ()
        this.Visibility-= 5
        pop()
      }
    }
  };