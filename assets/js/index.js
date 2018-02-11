console.log("TASKS");
console.log("X   Replace right menu with social media icons");
console.log("X   Create toggle bar for tablet/mobile window");
console.log("X   Make toggle bar responsive using pure CSS or JS");
console.log("    Create store items for sale.  Visitor should have option to make the items block view or grid view.");
console.log("    Footer");



var toggleBtn = document.getElementsByClassName("toggle-x");
var navContainer = document.getElementsByClassName("navContainer");
var menuMain = document.getElementsByClassName("menuMain");
var social = document.getElementsByClassName("social");



toggleBtn[0].addEventListener("click",function() {
  this.classList.toggle("toggle-x");
  this.classList.add("test");
  this.classList.add("top");
  menuMain[0].classList.toggle("menu-mobile");
  social[0].classList.toggle("hide");
  navContainer[0].classList.add("test");
  navContainer[0].classList.toggle("navContainerHide");

  // navContainer.classList.remove("navContainer");
	}
)
