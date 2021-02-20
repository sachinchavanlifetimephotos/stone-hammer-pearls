class Hammer{ 
    constructor(x,y,width,height,angle){ 
        var ground_options ={
            restitution:1, 
            friction:1 
        }
    
        this.body = Bodies.rectangle(x,y,width,height); 
        this.width=width; 
        this.height=height; 
        World.add(world,this.body); 
    } 
    display(){ 
        var pos=this.body.position; 
        var angles=this.body.angle; 
        push ();
        translate (pos.x,pos.y); 
        rotate (angles);
        pop (); 
    }
}
