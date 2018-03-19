/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

 
 
 var xPos = 1;
 var yPos = 2;
 var transparency = 20;
 var b = 255
 var stroke = 12;

draw = function() {
    //gets rid of the outline
    strokeWeight(stroke);
    //sets the fill to a transparent blue
    fill(0, 191, b, transparency);
    //draws an ellipse
    ellipse(xPos,yPos,40,40);
    //changes the x-value by positive nine
    xPos= xPos + 9;
    //changes the y value by adding half of the current x-value
    yPos= yPos + xPos/2;
    //makes it more opaque each loop
    transparency= transparency+15;
    //slowly decreases the blue value
    b = b-25
    //slowly decreases the strokeweight
    stroke--;
 
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
