function menuToggle() {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle") {
        x.className += " responsive";
    } else {
        x.className = "navtoggle";
    }
    
}

function expandText() {
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