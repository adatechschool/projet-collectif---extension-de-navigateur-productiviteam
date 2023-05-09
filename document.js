// Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name === "playTrack"){
        let audioElement = document.getElementById(msg.idPlayer);
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
})