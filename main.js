const keys = document.querySelectorAll('.key')

const playNote = (event) => {

    let audioKeyCode = getKeyCode(event);

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    if (!key) {
        return;
    }
    playAudio(audioKeyCode);
    addPlayingClass(key);
}

const playAudio = (audioKeyCode) => {
    console.log(audioKeyCode)
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

const addPlayingClass = (key) => {
    key.classList.add('playing')
}


const getKeyCode = (event) => {
    let keyCode;
    const isKeyBoard = event.type === 'keydown';

    if (isKeyBoard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode
}
const removePlayingClass = (event) => {
    event.target.classList.remove("playing")
}
const registerEvents = () => {
    keys.forEach((key) => {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)
    // novo codigo