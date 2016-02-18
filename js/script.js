var link = document.querySelector(".form-header");
var form = document.querySelector(".form-search");

link.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.toggle("form-search-show");
});
