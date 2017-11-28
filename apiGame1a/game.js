"use strict";

	

function myGame()
{


	
	
	function setStatus(message)
	{
		$("#app>footer").text(message);
		
	}

	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("Ready");
	};
	
	
} 

$(function() {
	window.app = new myGame();
	window.app.start();
});
