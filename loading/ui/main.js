
// VARIABLES
const percentprogress = document.getElementById('percentprogress');
const percentname = document.getElementById('percent');
const elementToFade = document.getElementById('resource');
const elementToKeepVisible = document.getElementById('joining');
const elementToKeepVisible2 = document.getElementById('precolisions');




// CHECK PERCENT FUNCTION
function percentCheck(value) {
	percentname.textContent = `${value}%`;
	percentprogress.style.width = `${value}%`;
	if (value == 100) {
		console.log('1 if: ' + value)
		elementToFade.style.opacity = 0.25
		elementToKeepVisible2.style.opacity = 0.25
		elementToKeepVisible.style.opacity = 1
	} else if (value > 50 && value < 100) {
		console.log('2 if: ' + value)
		elementToFade.style.opacity = 1
		elementToKeepVisible2.style.opacity = 0.5
		elementToKeepVisible.style.opacity = 0.25
	} else if (value < 50) {
		console.log('3 if: ' + value)
		elementToFade.style.opacity = 1
		elementToKeepVisible2.style.opacity = 0.5
		elementToKeepVisible.style.opacity = 0.25
	}
}

const allow = false

window.addEventListener("message", function(e) {
	if(e.data.eventName == "loadProgress") {
		percentCheck(`${Math.floor(Number(e.data.loadFraction)*100)}`);
	}
	if(e.data.action == "start") {
		allow = true
	}

})

// COPY OF THE CODE

// const percentprogress = document.getElementById('percentprogress')
// const percentname = document.getElementById('percent')
// const elementToFade = document.getElementById('resource')
// const elementToKeepVisible = document.getElementById('joining')
// const elementToKeepVisible2 = document.getElementById('precolisions')

// let value = 0
// function percentCheck(value) {
// 	percentname.textContent = `${value}%`
// 	percentprogress.style.width = `${value}%`
// 	if (value == 100) {
// 		elementToFade.style.opacity = 0.25
// 		elementToKeepVisible2.style.opacity = 0.25
// 		elementToKeepVisible.style.opacity = 1
// 	} else if (value > 50 && value < 100) {
// 		elementToKeepVisible2.style.opacity = 1
// 		elementToKeepVisible2.style.opacity = 0.5
// 		elementToKeepVisible.style.opacity = 0.25
// 	} else if (value < 50) {
// 		elementToFade.style.opacity = 1
// 		elementToKeepVisible2.style.opacity = 0.5
// 		elementToKeepVisible.style.opacity = 0.25
// 	}
// }

// setInterval(function () {
// 	if (value < 100) {
// 		value = value + 10
// 		percentCheck(value)
// 	}
// }, 1000)