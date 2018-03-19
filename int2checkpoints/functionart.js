/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(500, 500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//




background(70,150,168);

    
    function Turt (x,y){
        
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
    ellipse(x,y,70,70);
    stroke(167, 224, 109);
    fill(184, 252, 116);
    ellipse(x,y,50,50);
        
} 

mouseClicked=function(){
    Turt(mouseX,mouseY);
}
    
   
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
