"use strict";

var attempts=0;
var win=false;

// using a function contructor form to create an object
function MyApp()
{
var numb1 = document.getElementById("input").value;
var numb2 = document.getElementById("input2").value;
	
		if(parseInt (numb2) == numb1){
				attempts++;
				alert("You won! It took you " + attempts + " attempt(s)");
				win = true;
		}
		if (parseInt (numb2) > numb1){
			attempts++;
			alert("Try again too high");
		}
		if (parseInt (numb2) < numb1){
			attempts++;
			alert("Try again too low");
		}
}
	var version = "v1.0";

	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");
	};
 // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyApp();
	window.app.start();
});
