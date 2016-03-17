var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var chartBottomY = canvas.height;
var chartBarWidth = 30
var chartBarPadding = 10;

var bars = []; // Aray for current bars

var highest_value = canvas.height;

var scale = function() {
	/* Automatically scales height of bars depending on highest value */ 
	return canvas.height/highest_value;
}

function createBar(name, color) {
	/* Creates a bar object and pushes it into the bars array */
	bars.push({
		name: name,
		value: 200,
		color: color
	});
}


function updateBar(name, value) {
	/* Updates a bar */

	if (value > highest_value) {
		highest_value = value;
		scale();
	}

	for (var i in bars) {
		var bar = bars[i];
		if (bar.name == name) {
			bar.value = value;
			return true;
		}
	}
	console.error(name + " does not exist! Makse sure to create bar before updating it!");
	return false;
}

function animateBars() {
	var x = chartBarPadding;
	chartBarWidth = (canvas.width/bars.length) - chartBarPadding;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i in bars) {
    	var name = bars[i].name;
        var value = bars[i].value;
        var color = bars[i].color;

    	// Draw names
    	ctx.fillStyle = "#343838";
		ctx.font = "bold 10px Arial";
		ctx.fillText(name, x, chartBottomY);

		// Draw values
		ctx.fillStyle = color;
		ctx.font = "bold 10px Arial";
		ctx.fillText(value, x, chartBottomY - 10);


        ctx.fillStyle = color;
        ctx.fillRect(x, chartBottomY - 20, chartBarWidth, -value * scale());
        x += chartBarWidth + chartBarPadding;
    }
}

function dummy() {
	/* Returns a bar object with a new random value */
	var randomName = bars[Math.floor(Math.random() * bars.length -1) + 1].name;
	var randomValue = Math.floor(Math.random() * 1000) + 1;
	return {name: randomName, value: randomValue};
}


