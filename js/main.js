// === JS for menu btn and dropdown === //
const toggleBtn = document.querySelector(".toggle__btn");
const toggleBtnIcon = document.querySelector(".toggle__btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark fa-lg"
    : "fa-solid fa-bars fa-lg";
};
// Sticky Navbar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//Jquery for logIn
$(document).ready(function () {
  $("#with-email").on("click", function () {
    $("#logIn-form-email").show();
    $("#logIn-form-number").hide();
  });
  $("#with-number").on("click", function () {
    $("#logIn-form-email").hide();
    $("#logIn-form-number").show();
  });
});
//for active logIn form
var header = document.getElementsByClassName("logIn-heading");
var logHead = document.getElementsByClassName("logHead");
for (var i = 0; i < logHead.length; i++) {
  logHead[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//popUps
$.fn.multiModal = function () {
  $(this).click(function () {
    $("#explore-more").prepend('<div class="modal_bg_cover">');
    $("#explore-more").prepend('<div class="modal_cont">');
    $(".modal_cont").prepend(
      '<div class="modal_header"><span class="modal_c"><i class="fa-solid fa-circle-xmark"></i></span></div><div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>'
    );

    var dataTitle = $(this).attr('data-title');
    var dataDescription = $(this).attr('data-description');

    $(".modal_header").append(dataTitle)
    $(".mb_scroll").append(dataDescription)



    $(".modal_c,modal_bg_cover").click(function(){
      $(".modal_bg_cover").remove();
      $(".modal_cont").remove();
    })
  });
};
$("a[data-title]").multiModal();
