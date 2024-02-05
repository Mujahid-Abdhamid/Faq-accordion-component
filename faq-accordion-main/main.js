"use strict";

const btnOpenModal = document.querySelectorAll(".open");
const btnCloseModal = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".accordion-modal");
const hidden = document.querySelector(".hidden");

// Hide the close btn by default
btnCloseModal.forEach((close) => {
  close.classList.add("hidden");
});

//Implementing the open btn functionality
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    // Hide all modals
    modals.forEach((modal) => {
      modal.classList.add("hidden");
    });

    // Hide the open button and display the close btn
    btnOpenModal[i].classList.add("hidden");
    // btnCloseModal[i].style.display = "block";
    btnCloseModal[i].classList.remove("hidden");

    // Show the corresponding modal
    modals[i].classList.remove("hidden");
  });
}

//Implementing the cloe btn functionality
for (let i = 0; i < btnCloseModal.length; i++) {
  // Hide the corresponding modal and toggle visibility of open and close buttons
  btnCloseModal[i].addEventListener("click", function () {
    modals[i].classList.add("hidden");
    btnOpenModal[i].classList.remove("hidden");
    btnCloseModal[i].classList.add("hidden");
    // btnCloseModal[i].style.display = "none";
  });
}
