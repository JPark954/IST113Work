"use strict";


function MyWeather()
{
	var weatherWidget = new WeatherWidget($("#weather-widget")),
	version = "8.1";

	// creating a private function
	function setStatus()
	{
		$("#weather-widget").fadeIn();
		weatherWidget.update();
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		$("#getWeather").click(setStatus);
	};
}


$(function() {
	window.app = new MyWeather();
	window.app.start();
});
