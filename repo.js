function Calculate() {
	//var students = parseInt(document.getElementById('bookOne').value);
	//var teachers = parseInt(document.getElementById('bookTwo').value);
	var sat = parseInt(document.getElementById('bookThree').value);
	var ielts = parseInt(document.getElementById('bookFour').value);
	var consultations = parseInt(document.getElementById('bookFive').value);
	var satScore = parseInt(document.getElementById('bookSix').value);
	var individuals = parseInt(document.getElementById('bookSeven').value);
	var group = parseInt(document.getElementById('bookEight').value);
	var pass = parseInt(document.getElementById('bookNine').value);
	if (1350 <= satScore && 1450 >= satScore) {
		var better = "better";
		document.getElementById("repcard").innerHTML=better;
	}
	else if (1450 <= satScore && 1600 >= satScore) {
		var perfect = "perfect";
		document.getElementById("repcard").innerHTML=perfect;
	}
	else if (1200 <= satScore && 1350 >= satScore) {
		var good = "good";
		document.getElementById("repcard").innerHTML=good;
	}
	else if (satScore < 400 || satScore > 1600) {
		alert("Please write correct score");
	}
	else if (satScore >= 400 && satScore <= 1200) {
		var bad = "bad";
		document.getElementById("repcard").innerHTML=bad;
	}
	else {
		alert("Please write your score");
	}

	
	if (pass >= 0) {
		var minus = 20 - pass;
		document.getElementById("lessons").innerHTML=minus;
	}
	else  {
		alert("Please write number passes");
	}

	
}