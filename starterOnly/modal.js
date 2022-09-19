function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // <= Notre modal
const modalBtn = document.querySelectorAll(".modal-btn"); // <= C'est le btn "Je m'inscris"
const formData = document.querySelectorAll(".formData"); // <= C'est les données du formulaire
const modalCloseBtn = document.querySelector(".modal-btn-close"); //<= C'est le btn "X"

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal event
modalCloseBtn.addEventListener("click", closeModal)

// Close modal form
function closeModal() {
  modalbg.style.display = "none"
}