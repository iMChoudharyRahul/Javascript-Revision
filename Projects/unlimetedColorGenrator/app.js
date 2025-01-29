let start = document.getElementById("start");
let stop = document.getElementById("stop");

let intervalId;

function randomColorGenerator() {
  let hax = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hax[Math.floor(Math.random() * 16)];
  }
  return color;
}

//start button
start.addEventListener("click", () => {
  //add a interval
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColorGenerator();
    }, 1000);
  }
});

//stop button
stop.addEventListener("click", () => {
  //stop the interval
  clearInterval(intervalId);
  intervalId = null;
});
