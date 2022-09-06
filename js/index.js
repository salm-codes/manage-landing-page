var btn = document.getElementsByClassName('btn');

btn[0].onclick = function () {
  document.getElementById('slide').classList.replace('showing-2', 'showing-1');

  btn[1].classList.remove('active');
  btn[0].classList.add('active');
};

btn[1].onclick = function () {
  document.getElementById('slide').classList.replace('showing-1', 'showing-2');

  btn[0].classList.remove('active');
  btn[1].classList.add('active');
};
