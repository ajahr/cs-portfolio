/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(500, 500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

 background(204, 244, 255);                                                  
 
 var xPos = 1;
 var yPos = 2;
 var size = 30;
 var b = 244
 var stroke = 12;



draw = function() {
noStroke();
for (var i=0; i < width; i += 30){
for (var j=0; j < height; j += 30){
fill(r,g,b);
ellipse(i,j,random(30),random(30));
var r = random(66);
var g = random(206);
}
}

};     
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
