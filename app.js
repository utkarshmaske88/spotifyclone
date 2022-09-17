const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");

const progress = document.getElementById("box");

const artist = document.getElementById("artist");
const songname = document.getElementById("songname");
const playingimg = document.getElementById("playingimg");

const play1 = document.getElementById("1song");
const play2 = document.getElementById("2song");
const play3 = document.getElementById("3song");
const play4 = document.getElementById("4song");
const play5 = document.getElementById("5song");
const play6 = document.getElementById("6song");

const skipp = document.getElementById("skipp");
const skipn = document.getElementById("skipn");
const replay = document.getElementById("replay");

let isplaying;
const play = document.getElementById("play2");

function isplayingcheck() {
  if (isplaying = 1) {
 
    pauseall();
    play.innerHTML = `<span class="material-icons"id="play2">play_circle_filled</span>`;
    isplaying = 2;
  }
 else {
    a.play();
    play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
  }
}

function pauseall() {
  a.pause();
  b.pause();
  c.pause();
  d.pause();
  e.pause();
  f.pause();
}

play.addEventListener("click", () => {
  if ((isplaying = 1)) {
    isplayingcheck();
  } else {
    a.play();
  }
});

play1.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    a.load();
    a.play();
  });
  pauseall();
  artist.innerHTML = "Siddhu Moosewala";
  songname.innerHTML = "295";
  playingimg.src = "./songs/s1.png";
  a.play();
  isplaying = 1;
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});
play2.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    b.load();
    b.play();
  });
  artist.innerHTML = "Arjit Singh";
  songname.innerHTML = "Deva Deva - Brahmāstra";
  playingimg.src = "./songs/s2.png";
  pauseall();
  isplaying = true;
  b.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});
play3.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    f.load();
    f.play();
  });
  artist.innerHTML = "Vikram";
  songname.innerHTML = "VIKRAM Title Track";
  playingimg.src = "./songs/s3.png";
  pauseall();
  isplaying = true;
  f.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});
play4.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    c.load();
    c.play();
  });
  artist.innerHTML = "Arjit Singh";
  songname.innerHTML = "Kesariya - Brahmāstra";
  playingimg.src = "./songs/s4.png";
  pauseall();
  isplaying = true;
  c.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});
play5.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    e.load();
    e.play();
  });
  artist.innerHTML = "Dhruv Rathee";
  songname.innerHTML = "The Truth about Freebie Politics";
  playingimg.src = "./songs/s5.png";
  pauseall();
  isplaying = true;
  e.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});
play6.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    d.load();
    d.play();
  });
  artist.innerHTML = "AP Dhillon";
  songname.innerHTML = "SUMMER HIGH";
  playingimg.src = "./songs/s6.png";
  pauseall();
  isplaying = true;
  d.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});

skipp.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    d.load();
    d.play();
  });
  artist.innerHTML = "AP Dhillon";
  songname.innerHTML = "SUMMER HIGH";
  playingimg.src = "./songs/s6.png";
  pauseall();
  isplaying = true;
  d.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});

skipn.addEventListener("click", () => {
  replay.addEventListener("click", () => {
    pauseall();
    e.load();
    e.play();
  });
  artist.innerHTML = "Dhruv Rathee";
  songname.innerHTML = "The Truth about Freebie Politics";
  playingimg.src = "./songs/s5.png";
  pauseall();
  isplaying = true;
  e.play();
  play.innerHTML = `<span class="material-icons"id="play2">pause_circle</span>`;
});

a.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  let progress1=(currentTime/duration)*100;
  progress.style.width=`${progress1}%`
});
b.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  let progress1=(currentTime/duration)*100;
  progress.style.width=`${progress1}%`
});
c.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  let progress1=(currentTime/duration)*100;
  progress.style.width=`${progress1}%`
});
d.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  let progress1=(currentTime/duration)*100;
  progress.style.width=`${progress1}%`
});
e.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  let progress1=(currentTime/duration)*100;
  progress.style.width=`${progress1}%`
});
f.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  console.log(currentTime);
  let progress1=(currentTime/duration)*100;
  progress.style.width=`${progress1}%`
});
