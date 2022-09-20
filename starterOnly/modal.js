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

let formIsValid = false;


function first_validation() {
  const first = document.getElementById("first").value;
  const error = document.getElementById("first_error")
  if (first.length < 2) {
    error.style.display = "block"
    error.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."

    return false
  } else {
    error.style.display = "none"
    return true
  }
}

function last_validation() {
  const last = document.getElementById("last").value;
  const error = document.getElementById("last_error")
  if (last.length < 2) {
    error.style.display = "block"
    error.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    return false
  } else {
    error.style.display = "none"
    return true
  }
}

function email_validation() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("email_error")

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    error.style.display = "block"
    error.innerText = "Merci de renseigner un email valide";

    return false
  } else {
    error.style.display = "none"
    return true
  }
}

function birthdate_validation() {
  const birthdate = document.getElementById("birthdate").value;
  const error = document.getElementById("birthdate_error")

  if (birthdate.length != 10) {
    error.style.display = "block"
    error.innerText = "Vous devez entrer votre date de naissance.";

    return false
  } else {
    error.style.display = "none"
    return true
  }
}

function quantity_validation() {
  const quantity = document.getElementById("quantity").value;
  const error = document.getElementById("quantity_error")
  if (isNaN(parseInt(quantity))) {
    error.style.display = "block"
    error.innerText = "Merci de renseigner un nombre de tournoi valide";

    return false
  } else {
    error.style.display = "none"
    return true
  }
}

function location_validation() {
  const town = document.getElementsByName("location");
  const error = document.getElementById("location_error")
  let isChecked = false; // permet d'avoir l'information si la ville est cochée ou pas.

  town.forEach((ville) =>
    ville.checked ? isChecked = true : null
  )

  if (isChecked === false) {
    error.style.display = "block"
    error.innerText = "Vous devez choisir une option.";

    return false
  } else {
    error.style.display = "none"
    return true
  }
}

function checkbox_validation() {
  const CCU = document.getElementById("checkbox1").checked;
  const error = document.getElementById("checkbox_error")

  if (CCU === false) {
    error.style.display = "block"
    error.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";

    return false
  } else {
    error.style.display = "none"
    return true
  }
}


// Fonction Validate pour le Formulaire
function validate() {
  first_validation();
  last_validation();
  email_validation();
  birthdate_validation();
  quantity_validation();
  location_validation();
  checkbox_validation();

  if (first_validation() && last_validation() && email_validation() && birthdate_validation() && quantity_validation() && location_validation() && checkbox_validation()) {
    cleanForm();
  }
}

function cleanForm() {
  document.getElementsByClassName("content")[0].style.height = "inherit"
  const modalBody = document.getElementsByClassName("modal-body")[0]
  modalBody.innerHTML = `<p class="confirmation-message">Merci ! Votre réservation a été reçue.</p><br><button class="btn-signup" onClick="closeModal();">Fermer</button>`
  modalBody.style.height = "100%";
  modalBody.style.display = "flex";
  modalBody.style.alignItems = "center";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "center";
}