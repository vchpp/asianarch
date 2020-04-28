function measureUS() {
	document.getElementById("topmenu").innerHTML = "<ul><li id='menuon'><a onClick='measureUS()'>US ft/lb Units</a></li>"
			+ "<li><a onClick='measureMetric()'>Metric m/kg Units</a></li></ul>";
	document.getElementById("weight").innerHTML = "<input id='weightPounds' type='text' size='5' value='100' style='text-align: right;'> lb";
	document.getElementById("height1").innerHTML = "<input type='text' size='5' id='heightFeet' value='5' style='text-align: right;'> ft";
	document.getElementById("height2").innerHTML = "<input type='text' size='5' id='heightInches' value='0' style='text-align: right;'> in";
	document.getElementById("calculate").innerHTML = "<input type='button' class='button' "
			+ "onClick='calculateBmiUS()' value='Calculate' alt='Calculate'>";
	document.getElementById("measureType").value = "US";
	document.getElementById("bmiWeight").innerHTML = "";
	document.getElementById("bmiMeaning").innerHTML = "";
}

function measureMetric() {
	document.getElementById("topmenu").innerHTML = "<ul><li><a onClick='measureUS()'>US ft/lb Units</a></li>"
			+ "<li id='menuon'><a onClick='measureMetric()'>Metric m/kg Units</a></li></ul>";
	document.getElementById("weight").innerHTML = "<input id='weightKg' type='text' size='5' value='60' style='text-align: right;'> kg";
	document.getElementById("height1").innerHTML = "<input type='text' size='5' id='heightM' value='1.8' style='text-align: right;'> m";
	document.getElementById("height2").innerHTML = "&nbsp;";
	document.getElementById("calculate").innerHTML = "<input type='button' class='button' "
			+ "onClick='calculateBmiMetric()' value='Calculate' alt='Calculate'>";
	document.getElementById("measureType").value = "Metric";
	document.getElementById("bmiWeight").innerHTML = "";
	document.getElementById("bmiMeaning").innerHTML = "";
}

function calculateBmiUS() {
	var weightKg = parseFloat(document.getElementById("weightPounds").value,
			10) * 0.45359237;
	var heightIn = (parseFloat(document.getElementById("heightFeet").value, 10) * 12)
			+ parseFloat(document.getElementById("heightInches").value, 10);
	var heightM = heightIn * 0.0254;

	calculateBMI(heightIn, heightM, weightKg);
}

function calculateBmiMetric() {
	var weightKg = parseFloat(document.getElementById("weightKg").value,
			10);
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
		var measureType = document.getElementById("measureType").value;
		
		if (measureType == 'US') {
			document.getElementById("bmiWeight").innerHTML = "The healthy weight range "
					+ "for the height you entered is between "
					+ minweightLb
					+ " lbs ("
					+ minweightKg
					+ " kg) and "
					+ maxweightLb
					+ " lbs (" + maxweightKg + " kg).";
		} else {
			document.getElementById("bmiWeight").innerHTML = "The healthy weight range "
					+ "for the height you entered is between "
					+ minweightKg
					+ " kg ("
					+ minweightLb
					+ " lbs) and "
					+ maxweightKg
					+ " kg (" + maxweightLb + " lbs).";
		}

		var bmiScore = (weightKg / (heightM * heightM)).toFixed(1);
		var bmiMeaning = "Your BMI is " + bmiScore + ". ";

		if (bmiScore < 18.5) {
			bmiMeaning = "<font color='green'>" + bmiMeaning + "</font>This is in the underweight range.";
		} else if (bmiScore >= 18.5 && bmiScore < 23) {
			bmiMeaning = "<font color='green'>" + bmiMeaning + "</font>This is in the healthy weight range.";
		} else if (bmiScore >= 23 && bmiScore <= 27.5) {
			bmiMeaning = "<font color='red'>" + bmiMeaning + "</font>This is in the overweight range.";
		} else {
			bmiMeaning = "<font color='red'>" + bmiMeaning + "</font>This is in the obese weight range.";
		}

		document.getElementById("bmiMeaning").innerHTML = bmiMeaning;
	} else {
		alert("Please fill in everything correctly.");
	}
}