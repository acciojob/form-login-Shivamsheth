function getFormvalue() {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form by its ID
  const form = document.getElementById("form1");

  // Trim values to remove extra spaces
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();

  // Combine names and alert
  const fullName = `${fname} ${lname}`;
  alert(fullName);
}
