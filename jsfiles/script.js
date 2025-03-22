// Get the button
var mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight - 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}
