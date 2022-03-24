function validateFirstName() {
    var firstName = document.forms["subscriber_form"]["fname"].value;
    if (firstName == "") {
      errors.push("First name is required.")
      Rollbar.error("First name is required.");
    }
    return;
  }


  function validateLastName() {
    var lastName = document.forms["subscriber_form"]["lname"].value;
    if (lastName == "") {
      errors.push("Not having last name will start a server fire!")
      Rollbar.critical('Not having last name will start a server fire!')
    }
    return;
  }

  function validateEmail() {
    var email = document.forms["subscriber_form"]["email"].value;
    if (email != "") {
      Rollbar.info("No big deal, just informative", {emailAddr: email})
    }
    return;
  }

  function validateNumber() {
    var cell = document.forms["subscriber_form"]["cell"].value;
    if (cell == "") {
      Rollbar.debug("Now I'm just debugging...")
    }
    return;
  }

  function validateForm() {
    errors = [];
    const firstName = validateFirstName();
    if (firstName) { 
      errors.push(firstName);
     }

    const lastName = validateLastName();
    if (lastName) { errors.push(lastName) }
    
    const emailAddr = validateEmail();
    if (emailAddr) { errors.push(emailAddr) }
    
    const phoneNumber = validateNumber()
    if (phoneNumber) { errors.push(phoneNumber) }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Success!");
    }
    return false; 
  }