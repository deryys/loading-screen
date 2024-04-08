// VARIABLES

const percentprogress = document.getElementById('percentprogress')
const percentname = document.getElementById('percent')
const elementToFade = document.getElementById('resourcestage')
const elementToKeepVisible = document.getElementById('joiningstage')
const elementToKeepVisible2 = document.getElementById('precolisionstage')

// CHECK PERCENT FUNCTION
function percentCheck(value) {
	console.log(value)
	percentprogress.style.width = value + '%'
	percentname.textContent = value + '%'
	if (value == 100) {
		document.getElementById('resourcestage').style.opacity = '0.25'
		elementToKeepVisible2.style.opacity = '0.25'
		elementToKeepVisible.style.opacity = '1'
	} else if (value > 50 && value < 100) {
		document.getElementById('resourcestage').style.opacity = '1'
		elementToKeepVisible2.style.opacity = '0.5'
		elementToKeepVisible.style.opacity = '0.25'
	} else if (value < 50) {
		document.getElementById('resourcestage').style.opacity = '1'
		elementToKeepVisible2.style.opacity = '0.5'
		elementToKeepVisible.style.opacity = '0.25'
	}
}

window.addEventListener('message', function (e) {
	if (e.data.eventName === 'loadProgress') {
		percentCheck(parseInt(e.data.loadFraction * 100))
	}
})
