const stopMusicBG = () => {
    //ici document = offscreen.html ?
    let allAudios = document.querySelectorAll("audio");
    allAudios.forEach(function(audio) {
        if(audio.duration > 0 && !audio.paused) {
            audio.pause();
        }
    });
}

// Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name === "playTrack"){
        let audioElement = document.getElementById(msg.idPlayer);
        if (audioElement.paused) {
            stopMusicBG();
            audioElement.play();
            chrome.runtime.sendMessage({name: "displayPause", idButton: msg.idButton})
        } else {
            audioElement.pause();
            chrome.runtime.sendMessage({name: "displayPause", idButton: ""})
        }
    }
})