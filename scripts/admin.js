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

	A1.innerHTML = A1New.toString();
	B1.innerHTML = B1New.toString();
	B1A.innerHTML = B1ANew.toString();
	C1.innerHTML = C1New.toString();
	C2.innerHTML = C2New.toString();

}

