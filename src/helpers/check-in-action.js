import routes from '../constants/routes';

export default function checkInaction(history) {
  let timer;

  window.onload = timerReset;
  document.onkeypress = timerReset;
  document.onmousemove = timerReset;
  document.onmousedown = timerReset;
  document.ontouchstart = timerReset;
  document.onclick = timerReset;
  document.onscroll = timerReset;
  document.onkeypress = timerReset;

  function timerElapsed() {
    history.push(routes.EXPECTATION);
  }

  function timerReset() {
    clearTimeout(timer);
    timer = setTimeout(timerElapsed, 7 * 60 * 1000); // 7 min
  }
}
