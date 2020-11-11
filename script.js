var menu = document.getElementById("menu");
var scrollToTop = document.getElementById("scroll-to-top");

document
  .getElementsByClassName("menu-open")[0]
  .addEventListener("click", function () {
    menu.style.transform = "translate(0,0)";
  });

document
  .getElementsByClassName("menu-close")[0]
  .addEventListener("click", function () {
    menu.style.transform = "translate(100vw,0)";
  });

document.addEventListener("scroll", function () {
  var winHeight = (60 / 100) * window.innerHeight;
  var headSection = document.getElementById("head-section");
  var imgLogo = document.getElementsByClassName("home-image-logo")[0];

  if (window.pageYOffset > winHeight) {
    headSection.style.background = "rgba(53, 59, 72,1)";
    imgLogo.style.transform = "translate(0,0)";
    scrollToTop.style.display = "block";
  } else {
    headSection.style.background = "rgba(0, 0, 0, 0)";
    imgLogo.style.transform = "translate(-150px, 0)";
    scrollToTop.style.display = "none";
  }
});

var header = document.getElementById("main-bg");
function scroll() {
  var offset = window.pageYOffset;
  var rate = offset / 2;
  header.style.backgroundPosition = "50% calc(50% + " + rate + "px)";
}

document.addEventListener("scroll", scroll);

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var headLink = document.getElementsByClassName("head-link");
for (var i = 0; i < headLink.length; i++) {
  headLink[i].addEventListener("click", function () {
    menu.style.transform = "translate(100vw,0)";
    var clickSection = this.getAttribute("data-section");
    var scrollToElement = document.getElementById(clickSection);
    var topOffset = scrollToElement.offsetTop;
    window.scrollTo({
      top: topOffset - 60,
      left: 0,
      behavior: "smooth",
    });
  });
}

document.getElementById("foot-year").innerHTML = new Date().getFullYear();
