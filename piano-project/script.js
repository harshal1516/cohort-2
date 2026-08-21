const keys = document.querySelectorAll(".key");

function playPiano(keyName) {

    const pianoKey = document.querySelector(
        `[data-key="${keyName}"]`
    );

    const sound = document.querySelector(
        `[data-note="${keyName}"]`
    );

    if (!pianoKey) return;

    pianoKey.classList.add("active");

    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }

    setTimeout(() => {
        pianoKey.classList.remove("active");
    }, 150);
}


// Mouse click
keys.forEach((key) => {

    key.addEventListener("click", () => {

        playPiano(key.dataset.key);

    });

});


// Laptop keyboard
document.addEventListener("keydown", (event) => {

    const pressedKey = event.key.toLowerCase();

    playPiano(pressedKey);

});