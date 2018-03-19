/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(550, 500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
var size = 30;
var pads = [];
var turtles = [];

    
draw = function() {
    background(135, 209, 255);
    noStroke();
    
    //makes a new location for a lilypad
    if(random(200)>199){
        pads.push({x:random(400,500),y:random(500)})
    }
    
    //draws the lilypads
    for(var i=0; i< pads.length; i++){
        
        //the pad part
        fill(125, 230, 97);
        strokeWeight(3);
        stroke(121, 209, 98);
        ellipse(pads[i].x, pads [i].y,120,120);
        
        //the lotus
        strokeWeight(4);
        stroke(247, 99, 185);
        fill(247, 99, 185);
    
        bezier(pads[i].x-8,pads [i].y+2,pads[i].x+-2,pads [i].y+69,pads[i].x+14,pads [i].y+-8,pads[i].x-5,pads [i].y+2);
        bezier(pads[i].x+16,pads [i].y+-2,pads[i].x+60,pads [i].y+27,pads[i].x+-30,pads [i].y+-8,pads[i].x-5,pads [i].y+2);
        bezier(pads[i].x+16,pads [i].y+28,pads[i].x+42,pads [i].y+29,pads[i].x+-9,pads [i].y+-8,pads[i].x-19,pads [i].y+-8);
        bezier(pads[i].x-6,pads [i].y+-1,pads[i].x+76,pads [i].y+-5,pads[i].x+-21,pads [i].y+-35,pads[i].x+-3,pads [i].y+17);  
        bezier(pads[i].x-2,pads [i].y+-2,pads[i].x+-37,pads [i].y+4,pads[i].x+-34,pads [i].y+55,pads[i].x+-7,pads [i].y+4);
        bezier(pads[i].x+-5,pads [i].y+2,pads[i].x+-44,pads [i].y+18,pads[i].x+-55,pads [i].y+-34,pads[i].x+2,pads [i].y+6);
        bezier(pads[i].x+-3,pads [i].y+0,pads[i].x+-2,pads [i].y+-38,pads[i].x+-55,pads [i].y+-34,pads[i].x+2,pads [i].y+6);
        bezier(pads[i].x+-1,pads [i].y+1,pads[i].x+35,pads [i].y+-58,pads[i].x+-23,pads [i].y+-22,pads[i].x+0,pads [i].y+6);
        stroke(240, 200, 70);
        fill(240, 200, 70);
        ellipse(pads[i].x+-2,pads [i].y,13,13);
        
        //makes the lilypads move across the screen (decreases the x-position by one)
        pads[i].x-=1;
    }
    
    //draws a log
    noStroke();
    fill(204, 175, 97);
    rect(430,1, 120,498,30);
    
   //constantly redraws the turtle
    for(var i=0; i< turtles.length; i++){
        Turtle(turtles[i].x,turtles[i].y);
    }

};     

 function Turtle (x,y){
        
    strokeWeight(3);
    
    //head
    stroke(95, 178, 74);
    fill(121, 211, 99);
    ellipse(x,y-40,30,20);
    fill(0,0,0);
    stroke(0,0,0);
    ellipse(x-10,y-45,10,10);
    ellipse(x+10,y-45,10,10);

    //legs
    stroke(95, 178, 74);
    fill(121, 211, 99);
    ellipse(x+22,y+20,30,30);
    ellipse(x+22,y-17,30,30);
    ellipse(x-22,y+20,30,30);
    ellipse(x-22,y-17,30,30);
    
    //shell
    fill(87, 99, 47);
    ellipse(x,y,70,70);
    stroke(95, 112, 42);
    fill(119, 140, 50);
    ellipse(x,y,50,50);
        
} 

//makes a turtle appear whenever mouse is clicked
mouseClicked=function(){
    
    //calls the turtle function
    turtles.push({x:mouseX,y:mouseY});

};
  
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
