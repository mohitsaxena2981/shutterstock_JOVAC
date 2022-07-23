'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


//filter

const btns = document.querySelectorAll(".filter-btn");
const collection = document.querySelectorAll(".collection");
for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    collection.forEach((col)=>{
      if(filter=="all"){
        col.style.display = "block"
      } else{
        if(col.classList.contains(filter)){
          col.style.display = "block";

        } else {
          col.style.display = "none"
        }
      }

    })
  })
}


var preload = document.getElementById('loadingani')
var load = $('ring');
function loading(){
    preload.style.display= 'none';
    load.style.display= 'none';
}
