function service() {
  var click = document.querySelector(".customerservice");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}
let phone = document.querySelector(".yellow")
let phoneG = document.querySelector(".green")
let phoneI = document.querySelector(".iris")
let phoneS = document.querySelector(".skyblue")


function phoneimage(selectedPhone) {
  phone.style.display = "none";
  phoneG.style.display = "none";
  phoneI.style.display = "none";
  phoneS.style.display = "none";

  selectedPhone.style.display = "block";
}

function yellow() {
  phoneimage(phone);
}

function green() {
  phoneimage(phoneG);
}

function iris() {
  phoneimage(phoneI);
}

function skyblue() {
  phoneimage(phoneS);
}

function left1() {
  const arrow = document.querySelector(".second");
  arrow.scrollBy({
    left: -1264,
    behavior: "smooth"
  });
}

function right1() {
  const arrow = document.querySelector(".second");
 arrow.scrollBy({
    left: 1264,
    behavior: "smooth"
  });
}

function left() {
  const arrow = document.querySelector(".third");
  arrow.scrollBy({
    left: -1264,
    behavior: "smooth"
  });
}

function right() {
  const arrow = document.querySelector(".third");
 arrow.scrollBy({
    left: 1264,
    behavior: "smooth"
  });
}

function left3() {
  const arrow = document.querySelector(".fourth");
  arrow.scrollBy({
    left: -1264,
    behavior: "smooth"
  });
}

function right3() {
  const arrow = document.querySelector(".fourth");
 arrow.scrollBy({
    left: 1264,
    behavior: "smooth"
  });
}

function left4() {
  const arrow = document.querySelector(".fifth");
  arrow.scrollBy({
    left: -1264,
    behavior: "smooth"
  });
}

function right4() {
  const arrow = document.querySelector(".fifth");
 arrow.scrollBy({
    left: 1264,
    behavior: "smooth"
  });
}

function left5() {
  const arrow = document.querySelector(".sixth");
  arrow.scrollBy({
    left: -1264,
    behavior: "smooth"
  });
}

function right5() {
  const arrow = document.querySelector(".sixth");
 arrow.scrollBy({
    left: 1264,
    behavior: "smooth"
  });
}

const arrowup = document.querySelector('.returnup');

arrowup.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});