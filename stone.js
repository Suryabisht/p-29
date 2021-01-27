new class Stones {
    constructor(x,y,w,h) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

    }
    display() {
        stone = createSprite(boy.x,boy.y,50,50,options) ;
        stone.stroke(48,22,8) ;
        World.add(world.this.stone) ;
    }

    
}
function mouseDragged() {
    this.stone.x = mouseX ;
    this.stone.y = mouseY ;
    }

function mouseRelease() {
    if (stone.x > 400) {
       fly() ;
    }

}

function fly() {
    bodyA = null ;
}