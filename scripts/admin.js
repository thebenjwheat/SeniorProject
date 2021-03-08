function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './scripts/my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function updateInventory() {
	var A1New = document.getElementById("inventory").elements.namedItem("A1").value;
	var B1New = document.getElementById("inventory").elements.namedItem("B1").value;
	var B1ANew = document.getElementById("inventory").elements.namedItem("B1A").value;
	var C1New = document.getElementById("inventory").elements.namedItem("C1").value;
	var C2New = document.getElementById("inventory").elements.namedItem("C2").value;

	function init() {
	 loadJSON(function(response) {
	  // Parse JSON string into object
	    var actual_JSON = JSON.parse(response);
	    console.log(actual_JSON);
	 });
	}
	init();
}

