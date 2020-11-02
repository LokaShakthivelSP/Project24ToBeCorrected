class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
        this.body=Bodies.circle(100,150,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("orange");
        ellipseMode(CENTER);
        ellipse(0,0,40,40);
        pop();
    }
}