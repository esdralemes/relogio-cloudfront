const nameEl = document.querySelector('h1');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const dateEl = document.querySelector('.date');

function getTime() {
  const nowDate = new Date();

  const hours = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const seconds = nowDate.getSeconds();

  hourEl.innerHTML = formatTime(hours);
  minuteEl.innerHTML = formatTime(minutes);
  secondEl.innerHTML = formatTime(seconds);

  const day = nowDate.getDate();
  const month = nowDate.getMonth() + 1;
  const year = nowDate.getFullYear();
  dateEl.innerHTML = `${formatTime(day)}/${formatTime(month)}/${year}`;
}

function formatTime(time) {
  return time > 9 ? time : `0${time}`;
}

nameEl.style.textAlign = 'center';
nameEl.style.marginTop = '1rem';
nameEl.style.marginBottom = '2rem';
nameEl.style.fontSize = '2rem';

hourEl.style.fontSize = '7rem';
minuteEl.style.fontSize = '7rem';
secondEl.style.fontSize = '7rem';

dateEl.style.textAlign = 'center';
dateEl.style.marginTop = '2rem';
dateEl.style.fontSize = '2rem';

setInterval(getTime, 1000);