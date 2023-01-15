function Bigbox() {
  var myForm = window.document.getElementById("myform");
  myForm.style.height = "85vh";
  myForm.style.margin = "5vh auto";
}
function Smallbox() {
  var myForm = window.document.getElementById("myform");
  myForm.style.height = "400px";
  myForm.style.margin = "25vh auto";
}
function ShowLogin() {
    var myForm = window.document.getElementById("myform");
    myForm.classList.add("active-form");
    var myForm = window.document.getElementById("form-background");
    myForm.classList.add("active-form");
}
function HideLogin() {
  var myForm = window.document.getElementById("myform");
  myForm.classList.remove("active-form");
  var myForm = window.document.getElementById("form-background");
  myForm.classList.remove("active-form");
}