
var attempts = 0;
var win = false;

function playGame(){
	
var numb1 = document.getElementById("input").value;
var numb2 = document.getElementById("input2").value;
	
		if(parseInt (numb2) == numb1){
				attempts++;
				alert("You won! It took you " + attempts + " attempt(s)");
				win = true;
		}
		if (parseInt (numb2) > numb1){
			attempts++;
			alert("Try again to high");
		}
		if (parseInt (numb2) < numb1){
			attempts++;
			alert("Try again to low");
		}
}
	
	

