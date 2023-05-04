function service() {
  var click = document.querySelector(".customerservice");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

const myVideo = document.getElementById("myVideo");
const hoveriphone = document.getElementById("hoveriphone");

myVideo.addEventListener("ended", function () {
 
  hoveriphone.style.display = "flex";
});

hoveriphone.addEventListener("click", function () {
  hoveriphone.style.display = "none";
  myVideo.play();
});

const arrowup = document.querySelector(".returnup");

arrowup.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
