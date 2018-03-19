/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

 
 
 var xPos = 1;
 var yPos = 2;
 var size = 30;
 var b = 244
 var stroke = 12;


draw = function() {

    //only draws the new shape
    background();
    fill(0,0,0);
    rect(0,0,200,200);
    rect(200,200,200,200);
    //gets rid of the outline
    noStroke();
    //circle color
    fill(66, 206, b);
    //makes the circle track the mouse
    ellipse(mouseX,mouseY,30,30);
    //changes the color of the circle once the mouse crosses half of the screen
    if (mouseX>200 && mouseY>200){
        background();
        fill(0,0,0);
        rect(0,0,200,200);
        rect(200,200,200,200);
        fill(66, 206, b);
        rect(mouseX,mouseY,30,30);
    } 
    
    if (mouseX<200 && mouseY>200) {
        background();
        fill(0,0,0);
        rect(0,0,200,200);
        rect(200,200,200,200);
        fill(66, 206, b);
        ellipse(mouseX,mouseY,30,30);
        b=3
    } else {
        b=244
    }
    
    if (mouseX>200 && mouseY<200){
        background();
        fill(0,0,0);
        rect(0,0,200,200);
        rect(200,200,200,200);
        fill(66, 206, b);
        size=50
        ellipse(mouseX, mouseY, size,size);
    } else {
        size=30
    }
    
};     
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
