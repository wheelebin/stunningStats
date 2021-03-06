# stunningStats
Customizable statistics that look good!

## How to use
	1. Include the script file called "script.js"
	2. Create a canvas with the id "canvas", set width &  height
	3. Create a function called "init"
		* Add bars by running the function "createBar" passing throught the required parameters
		* Run the function "animateBars"
		* Create an interval, run the "updateBar" function, set the interval
		* Create an instance of dummyData if you want some data to check what it looks like
	4. Run init

### Example
Html & Canvas
```html
<canvas id="canvas" width=500 height=500></canvas>
<script src="script.js"></script>
<script>
	// Code goes here
</script>
```

Javascript
```javascript
function init() {
	createBar("Bar one", "#005F6B");
	createBar("Bar two", "#008C9E");
	createBar("Bar three", "#005F6B");
	createBar("Bar four", "#008C9E");
	animateBars();

	setInterval(function() {
		var dummyData = dummy();
		// Data goes here, replace dummyData with real data
		updateBar(dummyData.name, dummyData.value);
		animateBars();
	}
	, 1000);
}

init();
```

### Default statistics
![My image](https://camo.githubusercontent.com/3a530f564a42e4bd1463870c769807b52a15b354/687474703a2f2f692e696d6775722e636f6d2f726e72634d63382e676966)
