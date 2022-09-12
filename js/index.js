const controlButtons = document.querySelectorAll('.ctrl-btn');
const slideRow = document.getElementById('slideRow');
const indicator = document.querySelector('.indicator');

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');

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

hamburger.addEventListener('click', function (event) {
  toggleNavlinks();
  event.stopPropagation();
});

nav.addEventListener('click', function (event) {
  event.stopPropagation();
});

function toggleNavlinks() {
  hamburger.classList.toggle('showing-close');
  nav.classList.toggle('is-open');
  document.querySelector('html').classList.toggle('no-scroll');

  if (nav.classList.contains('is-open')) {
    document.body.addEventListener('click', toggleNavlinks, { once: true });
  }
}

/*
hamburger.addEventListener('click', function (event) {
  toggleNavLinks();
  event.stopPropagation();
});

function toggleNavLinks() {
  if (nav.classList.contains('is-open')) {
    document.body.removeEventListener('click', toggleNavLinks);
  } else {
    document.body.addEventListener('click', toggleNavLinks);
  }

  hamburger.classList.toggle('showing-close');
  nav.classList.toggle('is-open');
  document.querySelector('html').classList.toggle('no-scroll');
}

nav.addEventListener('click', function (event) {
  event.stopPropagation();
});
*/
