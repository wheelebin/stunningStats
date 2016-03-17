# stunningStats
Customizable statistics that look good!

## How to use
	1. Include the script file called "script.js"
	2. Create a canvas with the id "canvas", set width &  height
	3. Create a function called "init"
		* Add bars by running the function "createBar" passing throught the required parameters
		* Run the function "animateBars"
		* Create an interval, run the "updateBar" function, set the interval
	4. Run init

### Example
1. html & Canvas
```html
<canvas id="canvas" width=500 height=500></canvas>
<script src="script.js"></script>
<script>
	// Code goes here
</script>
```
2. Javascript
```javascript
function init() {
	createBar("Bar one", "#005F6B");
	createBar("Bar two", "#008C9E");
	createBar("Bar three", "#005F6B");
	createBar("Bar four", "#008C9E");
	animateBars();

	setInterval(function() {
		var dummyData = dummy();
		updateBar(dummyData.name, dummyData.value);
		animateBars();
	}
	, 1000);
}

init();
```