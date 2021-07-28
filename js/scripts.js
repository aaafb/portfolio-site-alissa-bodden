// RESPONSIVE NAV BAR AND HAMBURGER MENU
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

// READ MORE/LESS LINKS ON ABOUT PAGE
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

// COPY EMAIL ADDRESS
// grab all elements with the copy-click class
const links = document.querySelectorAll('.copy-click');
// assign class names to object properties so they can be added to HTML elements dynamically, at least in part to apply CSS at specific states/times
const cls = {
  copied: 'is-copied',
  hover: 'is-hovered' };

// (i think) assigns shorter name "str" to longer initial name of const variable so it's easier to reference
const copyToClipboard = str => {
// create an input element in the HTML DOM (??) with the reference name "el"
const el = document.createElement('input');
  // ___ ? ___ : ___ is a shortform if/else statement...
  str.dataset.copyString ? el.value = str.dataset.copyString : el.value = str.text;
  // assign properties to the new input element
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.opacity = 0;
  // add the new input element to the end of the HTML body
  document.body.appendChild(el);
  // select the contents of the input element
  el.select();
  // copy the selected contents of input element
  document.execCommand('copy');
  // remove the input element from the document
  document.body.removeChild(el);
};

const clickInteraction = e => {
  e.preventDefault();
  copyToClipboard(e.target);
  e.target.classList.add(cls.copied);
  setTimeout(() => e.target.classList.remove(cls.copied), 1000);
  setTimeout(() => e.target.classList.remove(cls.hover), 700);
};

Array.from(links).forEach(link => {
  link.addEventListener('click', e => clickInteraction(e));
  link.addEventListener('keypress', e => {
    if (e.keyCode === 13) clickInteraction(e);
  });
  link.addEventListener('mouseover', e => e.target.classList.add(cls.hover));
  link.addEventListener('mouseleave', e => {
    if (!e.target.classList.contains(cls.copied)) {
      e.target.classList.remove(cls.hover);
    }
  });
});