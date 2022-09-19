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


// Fonction Validate pour le Formulaire
function validate() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const town = document.getElementsByName("location");
  const CCU = document.getElementById("checkbox1").checked;
  const submitBtn = document.getElementsByClassName("btn-submit");

  let isChecked = false; // permet d'avoir l'information si la ville est cochée ou pas.
  let formIsValid = true;

  if (first.length < 2) {
    alert("Merci de renseigner un prenom valide");
    formIsValid = false
  }

  if (last.length < 2) {
    alert("Merci de renseigner un nom valide");
    formIsValid = false
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Merci de renseigner un email valide");
    formIsValid = false
  }

  if (isNaN(parseInt(quantity))) {
    alert("Merci de renseigner un nombre de tournoi valide");
    formIsValid = false
  }

  town.forEach((ville) =>
    ville.checked ? isChecked = true : null
  )

  if (isChecked === false) {
    alert("Merci de selectionner la ville");
    formIsValid = false
  }

  if (CCU === false) {
    alert("Merci d'accepter les conditions d'utilisation");
    formIsValid = false
  }

}