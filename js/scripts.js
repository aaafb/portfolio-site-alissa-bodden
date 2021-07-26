
function menuToggle() {
    var x = document.getElementById("myNavtoggle");

    var windowWidth = window.innerWidth;

    console.log("what's the window width: ", windowWidth)

    if (x.className === "navtoggle" && windowWidth <= 640) {
        x.className += " responsive";
    } else {
        x.className = "navtoggle";
    }
    
}

function toggleExpandText() {
	var dots = document.getElementById('dots')
	var moreText = document.getElementById('more')
	var btnTextMore = document.getElementById('readMore')
	var btnTextLess = document.getElementById('readLess')
	if (dots.style.display === 'none') {
		dots.style.display = 'inline'
		btnTextMore.innerHTML = 'read more'
		btnTextMore.style.display = 'inline'
		moreText.style.display = 'none'
		btnTextLess.style.display = 'none'
	} else {
		dots.style.display = 'none'
		btnTextLess.innerHTML = 'read less'
		btnTextLess.style.display = 'inline'
		moreText.style.display = 'inline'
		btnTextMore.style.display = 'none'
	}
}

