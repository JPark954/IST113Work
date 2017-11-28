"use strict";


function MyGame()
{
	var version = "v0.1";
	var deck_ct = 1;
	
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
	window.app = new MyGame();
	window.app.start();
});
