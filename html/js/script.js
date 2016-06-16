function set_color(col) {
	document.getElementById('col').innerHTML=col;
}

function generate() {
	var x=document.querySelector("#x");
	var y=document.querySelector("#y");
	var blur=document.querySelector("#b");
	var color=document.querySelector("#c");

	var xValue=x.value;
	var yValue=y.value;
	var blurValue=blur.value;
	var colorValue=color.value;

	var rule='';
	rule=rule+xValue+'px ';
	rule=rule+yValue+'px ';
	rule=rule+blurValue+'px ';
	rule=rule+colorValue;

	// var r=document.querySelector("#rule");
	// r.innerHTML='box-shadow:'+rule;
	
	var div=document.querySelector("#dummy-div");
	div.style.boxShadow=rule;

}