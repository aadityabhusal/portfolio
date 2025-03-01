const headLink = document.getElementsByClassName("head-link");
for (let i = 0; i < headLink.length; i++) {
  headLink[i].addEventListener("click", function () {
    const clickSection = this.getAttribute("data-section");
    const scrollToElement = document.getElementById(clickSection);
    const topOffset = scrollToElement.offsetTop;
    window.scrollTo({
      top: topOffset - 60,
      left: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("scroll", function () {
  const winHeight = (25 / 100) * window.innerHeight;
  const imgLogo = document.getElementsByClassName("home-image-logo")[0];
  imgLogo.style.transform =
    window.scrollY > winHeight ? "translate(0,0)" : "translate(-150px, 0)";
});

document.getElementById("foot-year").innerHTML = new Date().getFullYear();
