//Creates Variables and Assigns DOM ELementss to Each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");
//Listens for when button is clicked
colorChangeButton.addEventListener("click",function(){
    //changes the background color to the value in the input box when button is clicked
    document.body.style.backgroundColor = newBGColor.value;
});