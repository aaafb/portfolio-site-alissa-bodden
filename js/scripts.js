
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
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}