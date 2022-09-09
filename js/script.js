// Variables
const showSnackbarBtn = document.querySelector('.show-snackbar-btn');
const snackbar = document.querySelector('.snackbar');
const closeBtn = document.querySelector('.snackbar-close-btn');

// Functions

const showSnackbar = (autohide) => {
  snackbar.classList.add('isShown');

  if (autohide) {
    setTimeout(hideSnackbar, 5000);
  }
};

const hideSnackbar = () => {
  snackbar.classList.remove('isShown');
};

// Event listeners

showSnackbarBtn.addEventListener('click', showSnackbar.bind(null, false));
closeBtn.addEventListener('click', hideSnackbar);
