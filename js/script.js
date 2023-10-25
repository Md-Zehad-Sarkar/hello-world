function subscribe() {
  const inputEmail = document.getElementById("emailInput");
  const email=inputEmail.value
  inputEmail.value = "";
  if (validateEmail(email)) {
    alert("email subscribed succesfully " + email);
  } else {
    alert("wrong email");
  }
}

function validateEmail(email) {
  const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPatern.test(email);
}
