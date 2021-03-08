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
 function init(){
     loadJSON(function(response){
        actual_JSON = JSON.parse(response);
        document.getElementById("A1").innerHTML = actual_JSON.A1;
        document.getElementById("B1").innerHTML = actual_JSON.B1;
        document.getElementById("B1A").innerHTML = actual_JSON.B1A;
        document.getElementById("C1").innerHTML = actual_JSON.C1;
        document.getElementById("C2").innerHTML = actual_JSON.C2;
     });
}
window.onload = init;