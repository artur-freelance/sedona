var button = document.querySelector(".name-of-form");
var form = document.querySelector(".form-index-show");

var date = document.querySelector(".dates");
var adult = document.querySelector("[name=adult]");
var submit = document.querySelector("[type=submit");

form.classList.remove("form-index");

button.addEventListener("click", function(){
  form.classList.toggle("form-index");
});

submit.addEventListener("click", function() {
  if (!date.value || !adult.value) {
    form.classList.toggle("form-error");
  } else {

  }
});