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
	var finalScore = parseInt(document.getElementById("bookTen").value);
	if (sat >= 0 && ielts >= 0 && consultations >= 0 && satScore >= 0 && individuals >= 0 && group >= 0 && pass >= 0 && finalScore >= 0) {
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

		var minus = 20 - pass;
		document.getElementById("lessons").innerHTML=minus;

		var payi = individuals * 120000;
		var payg = (group / 10) * 70000;
		var totalp = payg + payi;
		document.getElementById("payment").innerHTML = totalp * 0.6;
		document.getElementById("cash").innerHTML = totalp * 0.4;
		document.getElementById("income").innerHTML = totalp;

		var ratiosat = sat / ielts;
		document.getElementById("rsi").innerHTML = ratiosat;

		var ratiocons = sat / consultations;
		document.getElementById("rsc").innerHTML = ratiocons;

		var ratioielts = ielts / consultations;
		document.getElementById("ric").innerHTML = ratioielts;

		if (finalScore >= 1320 && finalScore <= 1430) {
			const arr = [
				"United States Military Academy",
				"Wesleyan University",
				"Bates College",
				"Smith College",
				"Bowdoin College",
				"United States Air Force Academy"
			]
			const random1 = arr[(Math.floor(Math.random() * (arr.length)))];
			document.getElementById("res").innerHTML = random1;
		}
		else if (finalScore >= 1450 && finalScore <= 1600) {
			const arr1 = [
				"Swarthmore College",
				"Amherst College",
				"University of Richmond",
				"Washington College",
				"Colgate University",
				"Harvey Mudd College",
				"Grinnel College",
				"Harvard University",
				"Stanford University",
				"Princeton University",
				"MIT"
			]
			const random2 = arr1[(Math.floor(Math.random() * (arr1.length)))];
			document.getElementById("res").innerHTML = random2;
		}
		else {
			document.getElementById("res").innerHTML = "NU";
		}

		if (pass > 0) {
			document.getElementById("nfc").innerHTML = pass;
			document.getElementById("ex").innerHTML = 0;
		}
		else if (pass === 0) {
			document.getElementById("nfc").innerHTML = 0;
			document.getElementById("ex").innerHTML = 0;
		}


	}

	else {
		alert("Please write correct number");
	}
}
