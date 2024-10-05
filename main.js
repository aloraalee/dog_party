var form = document.querySelector(".hero form");
var input = document.querySelector("#dog-name"); 
var headerText = document.querySelector(".hero h1 strong");

console.log(form);
console.log(input);
console.log(headerText);

form.addEventListener("submit", function (event) {
  form.addEventListener("submit", displayDogName);

  function displayDogName(event) {
    event.preventDefault(); // Prevents the default behavior of the form which is refresh the page on form submission.
    var dogName = input.value;
    headerText.innerText = dogName;
  }
  