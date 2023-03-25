var stop = true;
addEventListener('drag', (event) => {
  if (event.clientY < 150) {
    stop = false;
    scroll(-1)
  }
  if (event.clientY > ($(window).height() - 150)) {
    stop = false;
    scroll(1)
  }
  if (document.body.getBoundingClientRect().y === 0){
    stop = true;
  }
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    stop = true;
  }
});
addEventListener('dragend', (event) => {
  stop = true;
});

var scroll = function (step) {
  var scrollY = $(window).scrollTop();
  $(window).scrollTop(scrollY + step);
  if (!stop) {
    setTimeout(function () { scroll(step) }, 20);
  }
}