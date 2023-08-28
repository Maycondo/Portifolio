const player = document.querySelector("#player");
const display = document.querySelector("#display");
const authorName = document.querySelector("#authorName");
const musicName = document.querySelector("#musicName");
const playerPausebtn = document.querySelector("#playerPausebtn");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#naxtButton");
const currentTime = document.querySelector("#currentTime");
const progressBar = document.querySelector("#progress-bar");
const progress = document.querySelector(".progress");

import songs from "songs.js";

const textButtonPlay = `<ion-icon name="play"></ion-icon>`;
const textButtonPause = `<ion-icon name="pause"></ion-icon>`;

let index = 0;

prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playerPausebtn.onclick = () => playerPausebtn();

const prevNextMusic = (type = "next") => {
  if ((type == "next" && index + 1 === songs.length) || type === "init") {
    index = 0;
  } else if (type == "prev" && index === 0) {
    index = songs.length;
  } else {
    index = type === "prev" && index ? index - 1 : index + 1;
  }

  player.src = songs[index].src;
  musicName.innerHTML = songs[index].name;
  authorName.innerHTML = songs[index].author;
  display.display = songs[index].display;
  if (type !== "init") playerPausebtn();
};

prevNextMusic("init");
