"use strict";

const btnOpenModal = document.querySelectorAll(".open");
const btnCloseModal = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".accordion-modal");

// Hide the close btn by default
btnCloseModal.forEach((close) => {
  close.classList.add("hidden");
});

// Implementing the open btn functionality
btnOpenModal.forEach((open, index) => {
  open.addEventListener("click", function () {
    // Hide all modals and reset icons
    modals.forEach((modal, i) => {
      modal.classList.add("hidden");
      btnOpenModal[i].classList.remove("hidden");
      btnCloseModal[i].classList.add("hidden");
      // Reset max-height to 0 for all accordions
      modal.style.maxHeight = "0";
    });

    // Hide the open button and display the close btn
    open.classList.add("hidden");
    btnCloseModal[index].classList.remove("hidden");

    // Show the corresponding modal and set max-height to the content height
    const currentModal = modals[index];
    currentModal.classList.remove("hidden");
    currentModal.style.maxHeight = currentModal.scrollHeight + "px";
  });
});

// Implementing the close btn functionality
btnCloseModal.forEach((close, index) => {
  close.addEventListener("click", function () {
    // Hide the corresponding modal and toggle visibility of open and close buttons
    modals[index].classList.add("hidden");
    btnOpenModal[index].classList.remove("hidden");
    close.classList.add("hidden");

    // Reset max-height to 0 when hidden
    modals[index].style.maxHeight = "0";
  });
});
