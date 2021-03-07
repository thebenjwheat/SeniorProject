function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
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
	
	var A1 = document.getElementById("A1");
	var B1 = document.getElementById("B1");
	var B1A = document.getElementById("B1A");
	var C1 = document.getElementById("C1");
	var C2 = document.getElementById("C2");

	loadJSON(function(response) {
    var actual_JSON = JSON.parse(response);
 });
	console.log(actual_JSON);
}

