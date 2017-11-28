"use strict";


function MyWeather()
{
	var weatherWidget = new WeatherWidget($("#weather-widget")),
	version = "8.3";

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
		$("#getWeather").click(getCurrentWeather);
		getLocation();
	};
	
	function getLocation()
	{
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(
			function(position)
			{
				$("#latitude").val(position.coords.latitude);
				$("#longitude").val(position.coords.longitude);
			},
			function(error)
			{
				$("#controls .error")
					.text("ERROR: " + error.message)
					.slideDown();
			});
		}
	}	
	
	function getCurrentWeather()
	{
		var lat = $("#latitude").val();
		var lon = $("#longitude").val();
		if (lat && lon)
		{
			$("#weather-widget").fadeIn();
			weatherWidget.update(lat, lon);
		}
	}
}


$(function() {
	window.app = new MyWeather();
	window.app.start();
});
