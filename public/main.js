const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play-btn");
const previousBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const Title = document.getElementById("song-title");
const cover = document.getElementById("song-cover");
const Artist = document.getElementById("Artist");
const pauseIcon = document.getElementById("pause-icon");
const playIcon = document.getElementById("play-icon");

const songs = ["Talisman", "Point and Kill", "Plantasia"];
const Artists = ["AIR", "Little Simz", "Mort Garson"];
const covers = [
  "url(../src/assets/Talisman.jpg)",
  "url(../src/assets/speed.jpg)",
  "url(../src/assets/Plantasia.jpg)",
];
let isPlaying = false;

let songIndex = 1;
let artistIndex = songIndex;

// Initially load song info
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  Title.innerText = song;
  Artist.innerText = Artists[artistIndex];
  audio.src = `../src/music/${song}.mp3`;
  cover.style.backgroundImage = covers[songIndex];
}

function playSong() {
  playIcon.classList.add("hidden");
  pauseIcon.classList.remove("hidden");
  isPlaying = true;
  audio.play();
}

function pauseSong() {
  playIcon.classList.remove("hidden");
  pauseIcon.classList.add("hidden");
  isPlaying = false;
  audio.pause();
}

function prevSong() {
  songIndex--;
  artistIndex--;

  if (artistIndex < 0) {
    artistIndex = Artists.length - 1;
  }

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;
  artistIndex++;

  if (artistIndex > Artists.length - 1) {
    artistIndex = 0;
  }

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song events
previousBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
