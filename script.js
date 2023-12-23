// Add your JavaScript here
document.addEventListener("DOMContentLoaded", function () {
  loadForm(1);
});

let formDataStorage = {};

let form3mode = "";
let userType;
let totalCost = 0;
let form2Data = {
  name: "",
  surname: "",
  address: "",
  number: "",
  city: "",
  telephone: 0,
  email: "",
  taxCode: "",
  iban: "",
  mobile1: 0,
  companyName: "",
  invoiceCode: "",
  vatNumber: "",
};
let form3Data = {
  form3_name: "",
  form3_surname: "",
  form3_address: "",
  form3_number: "",
  form3_city: "",
  mobile: 0,
  migrationCode: "",
};
let form4Data = {
  modem: {
    useMine: false,
    rental: false,
    purchase: false,
  },
  ip: false,
  backup: false,
};
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate an Italian phone number
function isValidItalyPhoneNumber(phoneNumber) {
  phoneNumber = "+" + phoneNumber;
  // Italian phone numbers can have various formats, for simplicity, let's check if it starts with +39 (Italy country code) and is followed by 10 digits.
  const phoneRegex = /^\+39\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

function loadForm(formNumber) {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = ""; // Clear previous form content

  switch (formNumber) {
    case 1:
      loadForm1();
      break;
    case 2:
      loadForm2();
      break;
    // Add cases for other forms as needed
    default:
      break;
  }
}

function loadForm1() {
  const formContainer = document.getElementById("form-container");

  const form1HTML = `
      <div class="form-group">
        <label for="userType">Are you a private individual or a company?</label>
        <select id="userType" name="userType" required>
          <option value="private">Private Individual</option>
          <option value="company">Company</option>
        </select>
      </div>
      <div class="form-group">
        <button onclick="submitForm1()" class="button" style="vertical-align:middle"><span>Next </span></button>
      </div>
    `;

  formContainer.innerHTML = form1HTML;
}

function submitForm1() {
  userType = document.getElementById("userType").value;
  console.log("userType", userType);
  loadForm(2); // Load the next form based on user selection
}

function loadForm2() {
  const formContainer = document.getElementById("form-container");

  const form2HTMLPrivate = `
    <div class="form2-heading">
      <h3>${userType}<h3/>
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="surname">Surname</label>
      <input type="text" id="surname" name="surname" required>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" id="address" name="address" required>
    </div>
    <div class="form-group">
      <label for="number">House Number</label>
      <input type="text" id="number" name="number" required>
    </div>
    <div class="form-group">
      <label for="city">City</label>
      <input type="text" id="city" name="city" required>
    </div>
    <div class="form-group">
      <label for="telephone">Telephone</label>
      <input type="number" id="telephone" name="telephone" required>
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="taxCode">Tax Code (Italian)</label>
      <input type="text" id="taxCode" name="taxCode" pattern="[A-Z0-9]{16}" title="Enter a valid Italian tax code" required>
    </div>
    <div class="form-group">
      <label for="iban">IBAN (Italian)</label>
      <input type="text" id="iban" name="iban" pattern="[A-Z0-9]{27}" title="Enter a valid Italian IBAN" required>
    </div>
    <div class="form-group">
      <label for="mobile1">Mobile/Contact Number 1</label>
      <input type="number" id="mobile1" name="mobile1" required>
    </div>
    <div class="form-group">
      <button onclick="submitForm2()" class="button" style="vertical-align:middle"><span>Next </span></button>
    </div>
  `;

  const form2HTMLCompany = `
    <div class="form2-heading">
      <h3>${userType}<h3/>
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="surname">Surname</label>
      <input type="text" id="surname" name="surname" required>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" id="address" name="address" required>
    </div>
    <div class="form-group">
      <label for="number">House Number</label>
      <input type="text" id="number" name="number" required>
    </div>
    <div class="form-group">
      <label for="city">City</label>
      <input type="text" id="city" name="city" required>
    </div>
    <div class="form-group">
      <label for="telephone">Telephone</label>
      <input type="number" id="telephone" name="telephone" required>
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="companyName">Company Name</label>
      <input type="text" id="companyName" name="companyName" required>
    </div>
    <div class="form-group">
      <label for="invoiceCode">Invoice Code</label>
      <input type="text" id="invoiceCode" name="invoiceCode" required>
    </div>
    <div class="form-group">
      <label for="vatNumber">VAT Number (Italian)</label>
      <input type="text" id="vatNumber" name="vatNumber" pattern="[A-Z0-9]{11}" title="Enter a valid Italian VAT number" required>
    </div>
    <div class="form-group">
      <label for="iban">IBAN (Italian)</label>
      <input type="text" id="iban" name="iban" pattern="[A-Z0-9]{27}" title="Enter a valid Italian IBAN" required>
    </div>
    <div class="form-group">
      <label for="mobile1">Mobile/Contact Number 1</label>
      <input type="number" id="mobile1" name="mobile1" required>
    </div>
    <div class="form-group">
      <button onclick="submitForm2()" class="button" style="vertical-align:middle"><span>Next </span></button>
    </div>
  `;

  const form2HTML =
    userType === "private" ? form2HTMLPrivate : form2HTMLCompany;

  formContainer.innerHTML = form2HTML;
}

function submitForm2() {
  const formElementIds = Object.keys(form2Data);
  formElementIds.forEach((elementId) => {
    form2Data[elementId] = document.getElementById(elementId)?.value;
  });
  formDataStorage.form2Data = { ...form2Data };
  // Perform basic validation
  if (
    !form2Data.name ||
    !form2Data.surname ||
    !form2Data.address ||
    !form2Data.city ||
    !form2Data.telephone ||
    !form2Data.email ||
    !form2Data.number ||
    !form2Data.iban ||
    !form2Data.mobile1
  ) {
    if (
      (userType === "company" && !form2Data.companyName) ||
      !form2Data.invoiceCode ||
      !form2Data.vatNumber
    ) {
      alert("Please fill in all required fields.");
      return;
    } else if (userType === "private" && !form2Data.taxCode) {
      alert("Please fill in all required fields.");
      return;
    }
  }

  function isValidItalianTaxCode(taxCode) {
    const regex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    return taxCode.match(regex) !== null;
  }
  function isValidIBANNumber(input) {
    var CODE_LENGTHS = {
      IT: 27,
    };
    var iban = String(input)
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, ""), // keep only alphanumeric characters
      code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
      digits;
    // check syntax and length
    if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
      return false;
    }
    // rearrange country code and check digits, and convert chars to ints
    digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
      return letter.charCodeAt(0) - 55;
    });
    // final check
    return mod97(digits) === 1;
  }

  function mod97(string) {
    var checksum = string.slice(0, 2),
      fragment;
    for (var offset = 2; offset < string.length; offset += 7) {
      fragment = String(checksum) + string.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
  }

  const isIBANValid = isValidIBANNumber(form2Data.iban);
  const isTaxCodeValid =
    userType === "private" ? isValidItalianTaxCode(form2Data.taxCode) : true;

  const isVatNumberValid =
    userType === "company" ? checkVATNumber(form2Data.vatNumber) : true;
  const isValidEmailAddress = isValidEmail(form2Data.email);
  const isValidNumber = isValidItalyPhoneNumber(form2Data.mobile1.toString());

  if (
    isIBANValid &&
    isTaxCodeValid &&
    isVatNumberValid &&
    isValidNumber &&
    isValidEmailAddress
  ) {
    loadForm3();
  } else {
    let errorMessage = "";

    if (!isIBANValid) {
      errorMessage += "Invalid IBAN number\n";
    }

    if (!isTaxCodeValid) {
      errorMessage += "Invalid Tax code\n";
    }

    if (!isVatNumberValid) {
      errorMessage += "Invalid VAT number\n";
    }

    if (!isValidEmailAddress) {
      errorMessage += "Invalid email number format => abc@gmail.com\n";
    }

    if (!isValidNumber) {
      errorMessage += "Invalid Contact Number 1 format => +391234567890\n";
    }

    alert(errorMessage.trim());
    return;
  }

  // Handle form 2 submission logic
  loadForm3(); // Load the next form
}

function loadForm3() {
  const formContainer = document.getElementById("form-container");

  const form3HTML = `
    <div class="form-group">
      <p class="center">Please select an option</p>
    </div>  
    <div class="form-group-radios">
      <label class="container">Activation
        <input class="remove-input-margin" type="radio" checked="checked" name="option" value="activation" onclick="toggleFormFields('activation')">
        <span class="checkmark"></span>
      </label>
      <label class="container">Line Migration
        <input class="remove-input-margin" type="radio" name="option" value="migration" onclick="toggleFormFields('migration')">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="form-group">
      <label for="form3_name">Name2</label>
      <input type="text" id="form3_name" name="form3_name" required>
    </div>
    <div class="form-group">
      <label for="form3_surname">Surname2</label>
      <input type="text" id="form3_surname" name="form3_surname" required>
    </div>
    <div class="form-group">
      <label for="form3_address">Address2</label>
      <input type="text" id="form3_address" name="form3_address" required>
    </div>
    <div class="form-group">
      <label for="form3_number">House Number2</label>
      <input type="text" id="form3_number" name="form3_number" required>
    </div>
    <div class="form-group">
      <label for="form3_city">City2</label>
      <input type="text" id="form3_city" name="form3_city" required>
    </div>
    <div class="form-group">
      <label for="mobile">Mobile2</label>
      <input type="number" id="mobile" name="mobile" required>
    </div>
    <div class="form-group" id="migrationFields">
      <label for="migrationCode">Migration Code</label>
      <input type="text" id="migrationCode" name="migrationCode" disabled>
    </div>
    <div class="form-group">
      <button onclick="submitForm3()" class="button" style="vertical-align:middle"><span>Next </span></button>
    </div>
  `;

  formContainer.innerHTML = form3HTML;
}

function toggleFormFields(option) {
  const migrationFields = document.getElementById("migrationFields");
  const migrationCodeInput = document.getElementById("migrationCode");
  form3mode = option;

  if (option === "migration") {
    migrationFields.style.opacity = 0.5;
    migrationCodeInput.disabled = true;
  } else {
    migrationFields.style.opacity = 1;
    migrationCodeInput.disabled = false;
  }
}

function submitForm3() {
  const formElementIds = Object.keys(form3Data);
  formElementIds.forEach((elementId) => {
    form3Data[elementId] = document.getElementById(elementId)?.value;
  });

  formDataStorage.form3Data = { ...form3Data };

  if (
    !form3Data.form3_name ||
    !form3Data.form3_surname ||
    !form3Data.form3_address ||
    !form3Data.form3_city ||
    !form3Data.form3_number ||
    !form3Data.mobile
  ) {
    console.log("Please fill in all required fields.", form3Data);
    alert("Please fill in all required fields.");
    return;
  }

  const isValidNumber = isValidItalyPhoneNumber(form3Data.mobile);

  if (isValidNumber) {
    loadForm4();
  } else {
    let errorMessage = "";

    if (!isValidNumber) {
      errorMessage += "Invalid Contact Number 1 format => +391234567890\n";
    }

    alert(errorMessage.trim());
    return;
  }
}

function loadForm4() {
  const formContainer = document.getElementById("form-container");

  const form4HTML = `
    <div class="form-group">
      <h3 for="modem">Modem:</h3>

      <div class="form4-items">
        <label for="useMine" class="container">I use mine (free)
          <input class="remove-input-margin" type="radio" id="useMine" name="modem" value="useMine" onclick="updateCost()" checked="checked">
          <span class="checkmark"></span>
        </label>

        <label for="rental" class="container">Rental (€1 per month)
          <input class="remove-input-margin" type="radio" id="rental" name="modem" value="rental" onclick="updateCost()">
          <span class="checkmark"></span>
        </label>
        
        <label for="purchase" class="container">Purchase (€50 once)
          <input class="remove-input-margin" type="radio" id="purchase" name="modem" value="purchase" onclick="updateCost()"> 
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <div class="form-group">
      <h3 for="ip">IP:</h3>
 
      <label for="ip" class="container">Yes/No (for yes - €6)
        <input class="remove-input-margin" type="checkbox" id="ip" name="ip" value="ip" onclick="updateCost()">
        <span class="checkmark"></span>
      </label>
    </div>

    <div class="form-group">
      <h3 for="backup">4G Backup:</h3>

      <label for="backup" class="container">Yes/No (for yes - €200)
        <input class="remove-input-margin" type="checkbox" id="backup" name="backup" value="backup" onclick="updateCost()"> 
        <span class="checkmark"></span>
      </label>
    </div>

    <div class="form-group">
      <button onclick="submitForm4()" class="button" style="vertical-align:middle"><span>Next </span></button>
    </div>
  `;

  formContainer.innerHTML = form4HTML;
}

function updateCost() {
  // Modem options
  form4Data.modem.useMine = document.getElementById("useMine").checked;
  form4Data.modem.rental = document.getElementById("rental").checked;
  form4Data.modem.purchase = document.getElementById("purchase").checked;

  if (form4Data.modem.useMine) {
    // No additional cost
  } else if (form4Data.modem.rental) {
    totalCost += 1;
  } else if (form4Data.modem.purchase) {
    totalCost += 50;
  }

  // IP option
  form4Data.ip = document.getElementById("ip").checked;
  if (form4Data.ip) {
    totalCost += 6;
  }

  // 4G Backup option
  form4Data.backup = document.getElementById("backup").checked;
  if (form4Data.backup) {
    totalCost += 200;
  }
}

function submitForm4() {
  // Handle form 4 submission logic
  console.log("Total Cost: €" + totalCost);
  loadForm5(); // Load the next form
}

function loadForm5() {
  const formContainer = document.getElementById("form-container");

  const form5HTML = `
    <div class="form-group">
      <h2>Summary of Your Entries</h2>

      <h3>Form 2 Data</h3>
      <p>User Type: ${userType}</p>
      <p>Name: ${form2Data.name}</p>
      <p>Surname: ${form2Data.surname}</p>
      <p>Address: ${form2Data.address}</p>
      <p>Number: ${form2Data.number}</p>
      <p>City: ${form2Data.city}</p>
      <p>Mobile: ${form2Data.telephone}</p>
      <p>Email: ${form2Data.email}</p>
      <p>IBAN: ${form2Data.iban}</p>
      ${
        userType === "company"
          ? `<p>Company Name: ${form2Data.companyName}</p>`
          : `<p>Tax code: ${form2Data.taxCode}</p>`
      }
      ${
        userType === "company"
          ? `<p>Invoice Code: ${form2Data.invoiceCode}</p>`
          : ""
      }
      ${
        userType === "company"
          ? `<p>VAT Number: ${form2Data.vatNumber}</p>`
          : ""
      }
      <p>IBAN: ${form2Data.iban}</p>
      <p>Mobile/Contact Number 1: +${form2Data.mobile1}</p>
    </div>

    <hr class="divider" />

    <div class="form-group">
      <h3>Form 3 Data</h3>
      <p>Name: ${form3Data.form3_name}</p>
      <p>Surname: ${form3Data.form3_surname}</p>
      <p>Address: ${form3Data.form3_address}</p>
      <p>Number: ${form3Data.form3_number}</p>
      <p>City: ${form3Data.form3_city}</p>
      <p>Mobile: +${form3Data.mobile}</p>
      ${
        form3Data.migrationCode === ""
          ? ""
          : `<p>Migration Code: ${form3Data.migrationCode}</p>`
      }
    </div>

    <hr class="divider" />
    <div class="form-group">
      <h3>Form 4 Data</h3>
      <h4>Modem Options:</h4>
      <p>${getSelectedOptions()}</p>
      <p>IP: ${form4Data.ip ? "Yes (€6)" : "No"}</p>
      <p>4G Backup: ${form4Data.backup ? "Yes (€200)" : "No"}</p>
    </div>
    <hr class="divider" />
    <div class="form-group-btn">
      <button onclick="modifyEntries()" class="button-86">Modify Entries</button>
      <button onclick="submitForm5()" class="button-86">Submit</button>
    </div>
  `;

  formContainer.innerHTML = form5HTML;
}

function getSelectedOptions() {
  console.log("getSelectedOptions", form4Data);
  const modemOptions = form4Data.modem;
  const selectedOptions = [];

  for (const option in modemOptions) {
    selectedOptions.push(`${option}: ${modemOptions[option] ? "Yes" : "No"}`);
  }

  return selectedOptions.join("<br>");
}

function modifyEntries() {
  const formContainer = document.getElementById("form-container");

  // Create a new form element
  const modificationForm = document.createElement("form");
  modificationForm.id = "modificationForm";

  // Populate the form with existing data
  for (const field in form2Data) {
    // Check userType and exclude fields accordingly
    if (
      !(userType === "company" && ["taxCode"].includes(field)) &&
      !(
        userType === "private" &&
        ["vatNumber", "invoiceCode", "companyName"].includes(field)
      )
    ) {
      const label = document.createElement("label");
      label.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}:`;

      const input = document.createElement("input");
      if (["mobile1", "mobile2", "mobile3", "telephone"].includes(field)) {
        input.type = "number";
      } else {
        input.type = "text";
      }
      input.id = field;
      input.name = field;
      input.value = form2Data[field];

      modificationForm.appendChild(label);
      modificationForm.appendChild(input);
    }
  }

  // Add a separator
  const separator = document.createElement("hr");
  modificationForm.appendChild(separator);

  for (const field in form3Data) {
    if (field === "migrationCode" && form3mode !== "migration") {
      continue; // Skip the iteration for migrationCode
    }
    const label = document.createElement("label");
    label.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}:`;

    const input = document.createElement("input");
    if (["mobile"].includes(field)) {
      input.type = "number";
    } else {
      input.type = "text";
    }
    input.id = field;
    input.name = field;
    input.value = form3Data[field];

    modificationForm.appendChild(label);
    modificationForm.appendChild(input);
  }

  // Add a separator
  const separator2 = document.createElement("hr");
  modificationForm.appendChild(separator2);

  // Populate the form with existing data from form4Data
  for (const modemOption in form4Data.modem) {
    const label = document.createElement("label");
    label.textContent = `${
      modemOption.charAt(0).toUpperCase() + modemOption.slice(1)
    }:`;

    const input = document.createElement("input");
    input.type = "radio";
    input.id = modemOption;
    input.name = "modem";
    input.value = modemOption;
    input.checked = form4Data.modem[modemOption];

    modificationForm.appendChild(label);
    modificationForm.appendChild(input);
  }

  // Add checkbox inputs for ip and backup in form4Data
  for (const option in form4Data) {
    if (option !== "modem") {
      const label = document.createElement("label");
      label.textContent = `${
        option.charAt(0).toUpperCase() + option.slice(1)
      }:`;

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = option;
      input.name = option;
      input.checked = form4Data[option];

      modificationForm.appendChild(label);
      modificationForm.appendChild(input);
    }
  }

  const separator3 = document.createElement("hr");
  modificationForm.appendChild(separator3);

  // Add a button to update form data
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update Entries";
  updateButton.onclick = updateFormData;
  modificationForm.appendChild(updateButton);

  // Append the form to the form container
  formContainer.innerHTML = ""; // Clear previous content
  formContainer.appendChild(modificationForm);
}

function updateFormData(event) {
  event.preventDefault();
  // Update the form data objects with the modified values
  for (const field in form2Data) {
    const element = document.getElementById(field);
    if (element) {
      form2Data[field] = element.value;
    } else {
      console.error(`Element with ID '${field}' not found.`);
    }
  }
  // Update the form data objects with the modified values for form3Data
  for (const field in form3Data) {
    const element = document.getElementById(field);
    if (element) {
      form3Data[field] = element.value;
    } else {
      console.error(`Element with ID '${field}' not found.`);
    }
  }
  // Update the form data objects with the modified values for form4Data
  for (const group in form4Data) {
    for (const option in form4Data[group]) {
      form4Data[group][option] = document.getElementById(option).checked;
    }
  }

  // You can perform additional actions here if needed
  alert("Form data updated successfully!");
  loadForm5();
}

function submitForm5() {
  const allFormData = {
    userType,
    totalCost,
    form2Data,
    form3Data,
    form4Data,
  };

  // Log the combined JSON object to the console
  console.log(JSON.stringify(allFormData, null, 2));
  alert("Form 5 submitted successfully!");
  window.location.reload();
}

function checkVATNumber(toCheck) {
  var vatexp = new Array();

  var defCCode = "GB";

  vatexp.push(/^(IT)(\d{11})$/); //** Italy

  var VATNumber = toCheck.toUpperCase();

  VATNumber = VATNumber.replace(/(\s|-|\.)+/g, "");

  var valid = false;

  for (var i = 0; i < vatexp.length; i++) {
    if (vatexp[i].test(VATNumber)) {
      var cCode = RegExp.$1; // Isolate country code
      var cNumber = RegExp.$2; // Isolate the number
      if (cCode.length == 0) cCode = defCCode; // Set up default country code

      if (eval(cCode + "VATCheckDigit ('" + cNumber + "')")) valid = VATNumber;
      break;
    }
  }

  return valid;
}

function ITVATCheckDigit(vatnumber) {
  var total = 0;
  var multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  var temp;

  if (Number(vatnumber.slice(0, 7)) == 0) return false;
  temp = Number(vatnumber.slice(7, 10));
  if (temp < 1 || (temp > 201 && temp != 999 && temp != 888)) return false;

  for (var i = 0; i < 10; i++) {
    temp = Number(vatnumber.charAt(i)) * multipliers[i];
    if (temp > 9) total += Math.floor(temp / 10) + (temp % 10);
    else total += temp;
  }

  total = 10 - (total % 10);
  if (total > 9) {
    total = 0;
  }

  if (total == vatnumber.slice(10, 11)) return true;
  else return false;
}
