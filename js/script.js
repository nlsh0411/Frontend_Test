document
  .getElementById("developmentIntegration")
  .addEventListener("click", function () {
    scrollToSection("developmentContent");
  });

document.getElementById("uiUx").addEventListener("click", function () {
  scrollToSection("uiUxContent");
});

document.getElementById("connect").addEventListener("click", function () {
  scrollToSection("connectContent");
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - document.querySelector(".header").offsetHeight, // Adjust for fixed header height
    behavior: "smooth",
  });
}

// Validation for Connect Form
document.getElementById("connectButton").addEventListener("click", function () {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var contactInput = document.getElementById("contact");
  var helpInput = document.getElementById("help");

  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var contactValue = contactInput.value.trim();
  var helpValue = helpInput.value.trim();

  const nameRegex = /^[a-zA-Z\s]*$/; // only contain alphabets
  const emailRegex = /\S+@\S+\.\S+/; // must have '@'
  const contactRegex = /^[0-9]+$/; // only contain numbers

  if (nameValue === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  } else if (emailValue === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return;
  } else if (contactValue === "") {
    alert("Please enter your contact no.");
    contactInput.focus();
    return;
  } else if (helpValue === "") {
    alert("Please enter your inquiry in the 'How can we help?' field.");
    helpInput.focus();
    return;
  }

  if (!nameRegex.test(nameValue)) {
    alert("Please enter only alphabets for your name.");
    nameInput.focus();
    return;
  }

  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (!contactRegex.test(contactValue)) {
    alert("Please enter only numbers for your contact number.");
    contactInput.focus();
    return;
  }

  alert("Your form has been successfully submitted!");
});

// Clear Connect Form
document.getElementById("clearButton").addEventListener("click", function () {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var contactInput = document.getElementById("contact");
  var helpInput = document.getElementById("help");

  nameInput.value = "";
  emailInput.value = "";
  contactInput.value = "";
  helpInput.value = "";
});
