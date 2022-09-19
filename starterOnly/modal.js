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
modalbg.addEventListener("submit", function (e) {
  e.preventDefault();
})

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
    const error = document.getElementById("first_error")
    error.style.display = "block"
    error.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."

    formIsValid = false
  }

  if (last.length < 2) {
    const error = document.getElementById("last_error")
    error.style.display = "block"
    error.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    formIsValid = false
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    const error = document.getElementById("email_error")
    error.style.display = "block"
    error.innerText = "Merci de renseigner un email valide";

    formIsValid = false
  }

  if (birthdate.length != 10) {
    const error = document.getElementById("birthdate_error")
    error.style.display = "block"
    error.innerText = "Vous devez entrer votre date de naissance.";

    formIsValid = false
  }

  if (isNaN(parseInt(quantity))) {
    const error = document.getElementById("quantity_error")
    error.style.display = "block"
    error.innerText = "Merci de renseigner un nombre de tournoi valide";

    formIsValid = false
  }

  town.forEach((ville) =>
    ville.checked ? isChecked = true : null
  )

  if (isChecked === false) {
    const error = document.getElementById("location_error")
    error.style.display = "block"
    error.innerText = "Vous devez choisir une option.";

    formIsValid = false
  }

  if (CCU === false) {
    const error = document.getElementById("checkbox_error")
    error.style.display = "block"
    error.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";

    formIsValid = false
  }

}