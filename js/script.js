const showSnackbarBtn = document.querySelector('.show-snackbar-btn');
const snackbar = document.querySelector('.snackbar');
const closeBtn = document.querySelector('.snackbar-close-btn');

showSnackbarBtn.addEventListener('click', () => {
  snackbar.classList.add('isShown');

  setTimeout(() => {
    snackbar.classList.remove('isShown');
  }, 6000);
});

closeBtn.addEventListener('click', () => {
  snackbar.classList.remove('isShown');
});
