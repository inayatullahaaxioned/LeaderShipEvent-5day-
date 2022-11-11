/* Author:
Inayatullah
*/
//hamburger js start
const hamburger = document.querySelector('.hamburger'),
  navbar = document.querySelector('.nav'),
  html = document.querySelector('html');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
  html.classList.add('remove-scroll');
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
  html.classList.add('remove-scroll');
  //logic for close modal video
  modalBox.addEventListener('click', function (e) {
    let video = document.querySelector('.video');
    if (e.target !== video) {
      modalBox.parentElement.removeChild(modalBox);
    }
  });
};

//modal video js start
const form = document.querySelector('.contact-form'),
  fullName = document.querySelector('.contact-form .name'),
  email = document.querySelector('.email'),
  subject = document.querySelector('.subject'),
  message = document.querySelector('.message');
const nameRegex = /^([A-Za-z]+)*s([A-Za-z]+)$/;
const subjectRegex = /^[(A-Za-z0-9)][(\sA-Za-z0-9)]+$/;
const emailRegex = /^([A-Za-z][A-Za-z0-9\-\_\.]+[A-Za-z0-9])\@([A-Za-z]{2,})\.([A-Za-z]{2,})$/;
const messageRegex = /^([a-zA-Z0-9][a-zA-Z0-9\s]+)$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateInput(fullName, nameRegex);
  validateInput(subject, subjectRegex);
  validateInput(email, emailRegex);
  validateInput(message,250);
  let error = document.querySelectorAll('.error');
  if (error.length == 0) {
    const successSpan = document.createElement('span'),
          inputBox = document.querySelector('.input-box');
          successSpan.className = "success-msg";
          successSpan.innerText = "Your form submit successfully";
          inputBox.appendChild(successSpan);
  } else {
    console.log('error');
  }
})


function validateInput(input, regex = "", limit = 30) {
  let inputWrap = input.parentElement;
  var error = inputWrap.querySelector('.error');
  if (error) {
    error.remove();
  }
  if (input.value == "") {
    appendSpan(input, '*field is required');
  } else if (input.value.length < 4) {
    appendSpan(input, '"*It should have atleast 4 character"');
  } else if (input.value.length > limit) {
    appendSpan(input, `*It should have max ${limit} character`);
  } else if (!regex.test(input.value)) {
    appendSpan(input, `*Please enter valid  ${input.name}`);
  }
};

//appending span function for showing error
function appendSpan(input, errorMsg) {
  let errorSpan = document.createElement('span');
  errorSpan.className = 'error';
  let inputWrap = input.parentElement;
  inputWrap.appendChild(errorSpan);
  errorSpan.innerText = errorMsg;
};