const controlButtons = document.querySelectorAll('.ctrl-btn');
const slideRow = document.getElementById('slideRow');
const indicator = document.querySelector('.indicator');

controlButtons.forEach(button => {
  button.addEventListener('click', function () {
    updateSlide(button);
    updateControlButtons(button);
  });
});

function updateSlide(button) {
  const id = Number(button.dataset.id) + 1;
  slideRow.className = `slide-row showing-${id}`;
}

function updateControlButtons(button) {
  const index = Number(button.dataset.id);
  indicator.querySelector('.ctrl-btn.active').classList.remove('active');
  controlButtons[index].classList.add('active');
}
