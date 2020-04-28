function measureUS() {
	document.getElementById("topmenu").innerHTML = "<ul><li id='menuon'><a onClick='measureUS()'>US Units</a></li>"
			+ "<li><a onClick='measureMetric()'>Metric</a></li></ul>";
	document.getElementById("weight").innerHTML = "<input type='text' size='2' id='weightPound' value='100' style='text-align: right;'> lb";
	document.getElementById("height1").innerHTML = "<input type='text' size='2' id='heightFeet' value='5' style='text-align: right;'> ft";
	document.getElementById("height2").innerHTML = "<input type='text' size='2' id='heightInches' value='0' style='text-align: right;'> in";
	document.getElementById("calculate").innerHTML = "<input type='button' class='button' "
			+ "onClick='calculateBmiUS()' value='Calculate' alt='Calculate'>";
	document.getElementById("bmiWeight").innerHTML = "Choose US or "
			+ "Metric Units, enter your weight and height, than click on Calculate.";
	document.getElementById("bmiMeaning").innerHTML = "";
	document.getElementById("bmiStatement").innerHTML = "";
}

function measureMetric() {
	document.getElementById("topmenu").innerHTML = "<ul><li><a onClick='measureUS()'>US Units</a></li>"
			+ "<li id='menuon'><a onClick='measureMetric()'>Metric</a></li></ul>";
	document.getElementById("weight").innerHTML = "<input type='text' size='2' id='weightKg' value='60' style='text-align: right;'> kg";
	document.getElementById("height1").innerHTML = "<input type='text' size='2' id='heightM' value='1.8' style='text-align: right;'> m";
	document.getElementById("height2").innerHTML = "&nbsp;";
	document.getElementById("calculate").innerHTML = "<input type='button' class='button' "
			+ "onClick='calculateBmiMetric()' value='Calculate' alt='Calculate'>";
	document.getElementById("bmiWeight").innerHTML = "Choose US or "
			+ "Metric Units, enter your weight and height, than click on Calculate.";
	document.getElementById("bmiMeaning").innerHTML = "";
	document.getElementById("bmiStatement").innerHTML = "";
}

function calculateBmiUS() {
	var weightKg = parseFloat(document.getElementById("weightPound").value, 10) * 0.45359237;
	var heightIn = (parseFloat(document.getElementById("heightFeet").value, 10) * 12)
			+ parseFloat(document.getElementById("heightInches").value, 10);
	var heightM = heightIn * 0.0254;

	calculateBMI(heightIn, heightM, weightKg);
}

function calculateBmiMetric() {
	var weightKg = parseFloat(document.getElementById("weightKg").value, 10);
	var heightIn = (parseFloat(document.getElementById("heightM").value, 10) / 0.0254);
	var heightM = parseFloat(document.getElementById("heightM").value, 10);

	calculateBMI(heightIn, heightM, weightKg);
}

function calculateBMI(heightIn, heightM, weightKg) {
	if (weightKg > 18 && heightM > 0.9) {
		var minweightLb = Math.round(18.5 * heightIn * heightIn / 703);
		var maxweightLb = Math.round((23 * heightIn * heightIn / 703) - 0.1);
		var minweightKg = Math.round(18.5 * heightM * heightM);
		var maxweightKg = Math.round((23 * heightM * heightM) - 0.1);

		document.getElementById("bmiWeight").innerHTML = "The healthy weight range "
				+ "for the height you entered is between "
				+ minweightLb
				+ " lbs ("
				+ minweightKg
				+ " kg) and "
				+ maxweightLb
				+ " lbs ("
				+ maxweightKg + " kg).";

		var bmiScore = (weightKg / (heightM * heightM)).toFixed(2);
		var bmiMeaning = "Your BMI is " + bmiScore + ". ";

		if (bmiScore < 18.5) {
			bmiMeaning = bmiMeaning + "This is in the underweight range.";
		} else if (bmiScore >= 18.5 && bmiScore < 23) {
			bmiMeaning = bmiMeaning + "This is in the healthy weight range.";
		} else if (bmiScore >= 23 && bmiScore <= 27.5) {
			bmiMeaning = bmiMeaning + "This is in the overweight range.";
		} else {
			bmiMeaning = bmiMeaning + "This is in the obese weight range.";
		}

		document.getElementById("bmiMeaning").innerHTML = bmiMeaning;

		document.getElementById("bmiStatement").innerHTML = "For Asian Americans, "
				+ "a BMI less than 18.5 is underweight, a BMI from 18.5 to less than 23.0 is healthy, "
				+ "while a BMI between 23.0 to 27.5 is overweight, and a BMI above 27.5 is obese.";
	} else {
		alert("Please fill in everything correctly.");
	}
}