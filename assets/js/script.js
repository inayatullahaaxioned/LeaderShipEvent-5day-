/* Author:
Inayatullah
*/
//hamburger js start
const hamburger = document.querySelector('.hamburger'),
  navbar = document.querySelector('.nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});
//hamburger js end

//to top btn js start
const scrollTop = document.querySelector(".top-btn");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//to top btn js end


//tab filter in schedule section start
let scheduleTab = document.querySelectorAll('.schedule-date'),
  meetList = document.querySelectorAll('.schedule-list');
console.log(scheduleTab);
console.log(meetList);
scheduleTab[0].classList.add('active');
meetList[0].classList.add('active');

scheduleTab.forEach(function (day) {
  day.addEventListener('click', function () {
    let dayNo = this.getAttribute('data-day');
    showSchedule(day, dayNo);
  })
})

//function for showing schedule detail
function showSchedule(day, dayNo) {
  let activeTab = document.querySelector('.schedule-date.active');
  if (activeTab) {
    activeTab.classList.remove('active');
  }
  day.classList.add('active');

  for (var item of meetList) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    if (item.getAttribute('data-item') == dayNo) {
      item.classList.add('active');
    }
  }
};
//tab filter in schedule section end

//modal video js start
const playBtn = document.querySelectorAll('.play-icon');

playBtn.forEach(function (buttons) {
  buttons.addEventListener('click', playVideo);
});

function playVideo() {
  let container = document.querySelector('.container');
  let modalBox = document.createElement('div');
  modalBox.className = "modal-box";
  modalBox.innerHTML = `<div class="modal-content">
  <video class="video" autoplay controls>
  <source src="./assets/videos/pexels-pavel-danilyuk-8716790.mp4" type="video/mp4">
  </video>
  <div class="close-btn"><span>Close Btn</span></div>
    </div>`
  container.appendChild(modalBox);
  //logic for close modal video
  modalBox.addEventListener('click', function (e) {
    let video = document.querySelector('.video');
    if (e.target !== video) {
      modalBox.parentElement.removeChild(modalBox);
    }
  });
};
//modal video js start