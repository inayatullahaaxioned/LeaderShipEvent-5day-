/* Author:
Inayatullah
*/
//hamburger js
const hamburger = document.querySelector('.hamburger'),
  navbar = document.querySelector('.nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

//to top btn js
const scrollTop = document.querySelector(".top-btn");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});