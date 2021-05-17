// ========================================================================== 
// SLIDES
// ========================================================================== 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
    	  slideIndex = 1
    	}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// ==========================================================================
// INPUT
// ==========================================================================
(function () {
  const inputs = document.querySelectorAll('[class*="__input"]');
  if (inputs) {
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
        input.classList.add("focused");
        input.parentElement.classList.add("highlight");
      });
      input.addEventListener("blur", function () {
          input.parentElement.classList.remove("highlight");
          if (input.value == "") {
            input.classList.remove("focused");
          } else {
            return;
          }
      });
      input.value != "" ? input.classList.add("focused") : true;
    });
  }
})();


// ==========================================================================
// PASSWORD
// ==========================================================================
function show() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
}

function hide() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
}

let pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
  if (pwShown == 0) {
      pwShown = 1;
      show();
  } else {
      pwShown = 0;
      hide();
  }
}, false);

function changeImage() {
  let image = document.getElementById('myImage');
  if (image.src.match("on")) {
      image.src = "../assets/svg/icon-eyeon.svg";
  } else {
      image.src = "../assets/svg/icon-eyeoff.svg";
  }
}


var button = document.getElementById('menu-button');

function toggle(){
  elem.classList.toggle('bg');
}

button.addEventListener('click', toggle, false);