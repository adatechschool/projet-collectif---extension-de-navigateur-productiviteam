let playerForest = document.querySelector("#audioForest");
let playerWaves = document.querySelector("#audioWaves");
let playerRain = document.querySelector("#audioRain");

const stopMusic = () => {
    let allAudios = document.querySelectorAll("audio");
    allAudios.forEach(function(audio) {
        if(audio.duration > 0 && !audio.paused) {
            audio.pause()
        }
    });
}

const play = (idPlayer, control) => {
    let player = document.querySelector("#" + idPlayer);

    if (player.paused) {
        stopMusic();
        player.play();
        //control.textContent = 'Pause';
    } else {
        player.pause();
        //control.textContent = 'Play';
  }
}
