const songs = [
    { name: "Song 1", file: "songs/song1.mp3" },
    { name: "Song 2", file: "songs/song2.mp3" },
    { name: "Song 3", file: "songs/song3.mp3" }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("song-title");
let progress = document.getElementById("progress");

function loadSong(index) {
    audio.src = songs[index].file;
    title.innerText = songs[index].name;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek song
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Load first song
loadSong(currentSong);
