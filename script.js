
const clock = document.querySelector('.time');

//simple date method
//let date = new Date().toLocaleString();
//display date to show time
//setting an interval to update the time each second
setInterval(function () {
  let date = new Date();
  // date.toLocaleTimeString(); //this will give the timezone as well
  clock.innerHTML = date.toLocaleTimeString(); //this will give only time
}, 1000);
