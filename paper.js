class Paper {
    constructor(x,y,radius){
       var options = {
           isStatic:false,
           density:1.2,
           friction: 0.5,
           restitution:0.3
       };
       
       this.x = x;
       this.y =y;
       this.r = radius;
       this.body = Bodies.circle(this.x, this.y, this.r/2, options);
       this.image=loadImage("paper.png");
       World. add(world, this. body);
   }
   
   display () {
   var paperPosition = this . body. position;
   push();
   translate(paperPosition . x, paperPosition .y) ;
   imageMode(CENTER);
   image(this.image, 0, 0, this.width, this.height);
   pop ( ) ;
       }
    }     
   
   
   
   
   
   
   
   
   
   
   
   