var time;
var url = window.location.hash.substr(1);
if (url == 1) {
	time = 8;
}
else if (url == 2) {
	time = 4;
}
else if (url == 3) {
	time = 2;
}
else if (url == 4) {
	time = 1;
}

function countdown(minutes) {
	var seconds = 60;
	var mins = minutes
	function tick() {
		var counter = document.getElementById("timer");
		var current_minutes = mins-1
		seconds--;
		counter.innerHTML = 
		current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if( seconds > 0 ) {
			setTimeout(tick, 1000);
		} else {

			if(mins > 1){
               setTimeout(function () { countdown(mins - 1); }, 1000);
           }
       }
   }
   tick();
}

countdown(time);