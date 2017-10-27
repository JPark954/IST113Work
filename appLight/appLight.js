function myFunction() {
   document.getElementById("left").style.backgroundColor="white";
   document.getElementById("body").style.backgroundColor="black";
   document.getElementById("right").style.backgroundColor="black";
   document.getElementById("slider").innerHTML="OFF";
   document.getElementById("slider").style.color="white";
   document.getElementById("left").style.cssFloat="right";
}

function myFunction2() {
	document.getElementById("left").style.backgroundColor="black";
   document.getElementById("body").style.backgroundColor="white";
   document.getElementById("right").style.backgroundColor="white";
    document.getElementById("slider").innerHTML="ON"
	 document.getElementById("slider").style.color="black";
	 document.getElementById("left").style.cssFloat="left";
}