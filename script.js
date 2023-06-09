// Partie AUDIO
let buttonForest = document.querySelector("#buttonForest");
let buttonWaves = document.querySelector("#buttonWaves");
let buttonRain = document.querySelector("#buttonRain");

let buttonSvg = {
    "buttonForest": `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6667 30H3.04166C2.375 30 1.88889 29.7083 1.58333 29.125C1.27777 28.5417 1.30555 27.9722 1.66666 27.4167L6.41666 20C5.75 20 5.27777 19.7017 5 19.105C4.72222 18.5083 4.77777 17.9317 5.16666 17.375L13.625 5.29168C13.9583 4.81945 14.4167 4.58334 15 4.58334C15.5833 4.58334 16.0417 4.81945 16.375 5.29168L20 10.5L23.625 5.29168C23.9583 4.81945 24.4167 4.58334 25 4.58334C25.5833 4.58334 26.0417 4.81945 26.375 5.29168L34.8333 17.375C35.2222 17.9306 35.2778 18.5072 35 19.105C34.7222 19.7028 34.25 20.0011 33.5833 20L38.3333 27.4167C38.6944 27.9722 38.7222 28.5417 38.4167 29.125C38.1111 29.7083 37.625 30 36.9583 30H28.3333V33.3333C28.3333 34.25 28.0067 35.035 27.3533 35.6883C26.7 36.3417 25.9156 36.6678 25 36.6667C24.0833 36.6667 23.2983 36.34 22.645 35.6867C21.9917 35.0333 21.6656 34.2489 21.6667 33.3333V30H18.3333V33.3333C18.3333 34.25 18.0067 35.035 17.3533 35.6883C16.7 36.3417 15.9156 36.6678 15 36.6667C14.0833 36.6667 13.2983 36.34 12.645 35.6867C11.9917 35.0333 11.6656 34.2489 11.6667 33.3333V30ZM27.875 26.6667H33.9167L27.4583 16.6667H30.25L25 9.16668L22.0417 13.375L24.8333 17.375C25.2222 17.9306 25.2778 18.5072 25 19.105C24.7222 19.7028 24.25 20.0011 23.5833 20L27.875 26.6667ZM6.08333 26.6667H23.9167L17.4583 16.6667H20.25L15 9.16668L9.75 16.6667H12.5417L6.08333 26.6667ZM6.08333 26.6667H12.5417H9.75H20.25H17.4583H23.9167H6.08333ZM27.875 26.6667H23.5833H25H22.0417H30.25H27.4583H33.9167H27.875Z" fill="black"/>
  </svg>`,
    "buttonWaves": `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.36406 12.1375C5.24737 12.0214 5.15477 11.8833 5.09159 11.7313C5.02841 11.5792 4.99588 11.4162 4.99588 11.2516C4.99588 11.0869 5.02841 10.9239 5.09159 10.7719C5.15477 10.6198 5.24737 10.4818 5.36406 10.3656C5.48437 10.2484 8.29687 7.5 13.75 7.5C16.6281 7.5 18.7875 8.93906 20.6937 10.2094C22.4594 11.3875 24.1281 12.5 26.25 12.5C27.9632 12.5256 29.6598 12.1606 31.2109 11.4328C31.8125 11.1553 32.3717 10.7939 32.8719 10.3594C32.9884 10.2438 33.1266 10.1522 33.2785 10.09C33.4304 10.0278 33.5931 9.99608 33.7573 9.99673C33.9215 9.99739 34.0839 10.0304 34.2353 10.0938C34.3868 10.1572 34.5242 10.2499 34.6398 10.3664C34.7555 10.483 34.847 10.6211 34.9092 10.7731C34.9714 10.925 35.0031 11.0877 35.0025 11.2518C35.0018 11.416 34.9688 11.5785 34.9054 11.7299C34.842 11.8813 34.7494 12.0188 34.6328 12.1344C34.5156 12.2516 31.7031 15 26.25 15C23.3719 15 21.2125 13.5609 19.3062 12.2906C17.5406 11.1125 15.8719 10 13.75 10C12.0368 9.97443 10.3402 10.3394 8.78906 11.0672C8.18747 11.3447 7.62826 11.7061 7.12812 12.1406C6.89344 12.3735 6.57606 12.5039 6.24544 12.5033C5.91483 12.5027 5.59791 12.3712 5.36406 12.1375ZM32.8719 19.1094C32.3717 19.5439 31.8125 19.9053 31.2109 20.1828C29.6598 20.9106 27.9632 21.2756 26.25 21.25C24.1281 21.25 22.4594 20.1375 20.6937 18.9594C18.7875 17.6891 16.6281 16.25 13.75 16.25C8.29687 16.25 5.48437 18.9984 5.36718 19.1156C5.1318 19.3491 4.99883 19.6666 4.99751 19.9982C4.99619 20.3297 5.12663 
    20.6482 5.36015 20.8836C5.59366 21.119 5.91112 21.252 6.24268 21.2533C6.57424 21.2546 6.89274 21.1241 7.12812 20.8906C7.62826 20.4561 8.18747 20.0947 8.78906 19.8172C10.3402 19.0894 12.0368 18.7244 13.75 18.75C15.8719 18.75 17.5406 19.8625 19.3062 21.0406C21.2125 22.3109 23.3687 23.75 26.25 23.75C31.7031 23.75 34.5156 21.0016 34.6328 20.8844C34.7494 20.7688 34.842 20.6313 34.9054 20.4799C34.9688 20.3285 35.0018 20.166 35.0025 20.0018C35.0031 19.8377 34.9714 19.675 34.9092 19.5231C34.847 19.3711 34.7555 19.233 34.6398 19.1164C34.5242 18.9999 34.3868 18.9072 34.2353 18.8438C34.0839 18.7804 33.9215 18.7474 33.7573 18.7467C33.5931 18.7461 33.4304 18.7778 33.2785 18.84C33.1266 18.9022 32.9884 18.9938 32.8719 19.1094ZM32.8719 27.8594C32.3717 28.2939 31.8125 28.6553 31.2109 28.9328C29.6598 29.6606 27.9632 30.0256 26.25 30C24.1281 30 22.4594 28.8875 20.6937 27.7094C18.7875 26.4391 16.6281 25 13.75 25C8.29687 25 5.48437 27.7484 5.36718 27.8656C5.25063 27.9812 5.158 28.1187 5.09457 28.2701C5.03114 28.4215 4.99816 28.584 4.99751 28.7482C4.99685 28.9123 5.02854 29.075 5.09077 29.2269C5.15299 29.3789 5.24452 29.517 5.36015 29.6336C5.47577 29.7501 5.61322 29.8428 5.76465 29.9062C5.91607 29.9696 6.07851 30.0026 6.24268 30.0033C6.40685 30.0039 6.56954 29.9722 6.72146 29.91C6.87339 29.8478 7.01157 29.7562 7.12812 29.6406C7.62826 29.2061 8.18747 28.8447 8.78906 28.5672C10.3402 27.8394 12.0368 27.4744 13.75 27.5C15.8719 27.5 17.5406 28.6125 19.3062 29.7906C21.2125 31.0609 23.3687 32.5 26.25 32.5C31.7031 32.5 34.5156 29.7516 34.6328 29.6344C34.8682 29.4009 35.0012 29.0834 35.0025 28.7518C35.0038 28.4203 34.8734 28.1018 34.6398 27.8664C34.4063 27.631 34.0889 27.498 33.7573 27.4967C33.4257 27.4954 33.1072 27.6259 32.8719 27.8594Z" fill="black"/>
  </svg>`,
    "buttonRain": `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_8)">
    <path d="M20 4.99999C15.9663 4.99999 12.4662 7.82249 11.5237 11.68C9.95498 12.2927 8.69137 13.4997 8.0075 15.0387C3.6375 14.7162 0 18.1937 0 22.5C0 26.6362 3.36375 30 7.5 30H10L11.25 27.5H7.5C4.74125 27.5 2.5 25.2587 2.5 22.5C2.50016 21.7504 2.66874 21.0104 2.99328 20.3347C3.31781 19.659 3.79002 19.0649 4.375 18.5961C4.95999 18.1274 5.64281 17.7962 6.37301 17.6268C7.10322 17.4574 7.86215 17.4542 8.59375 17.6175L9.84375 17.8912L10.0787 16.6787C10.3862 15.2975 11.5087 14.1987 12.8912 13.8662L13.7112 13.6725L13.8287 12.8512C14.2762 9.80999 16.9287 7.49999 20 7.49999C21.1586 7.49738 22.295 7.81762 23.2817 8.4248C24.2684 9.03198 25.0664 9.90208 25.5862 10.9375L26.055 11.9137L27.1088 11.5625C27.6963 11.3575 28.2275 11.25 28.75 11.25C31.5088 11.25 33.75 13.4912 33.75 16.25C33.75 16.3 33.755 16.3625 33.75 16.4062C33.74 16.4887 33.7212 16.5525 33.7112 16.6412L33.6325 17.5387L34.4537 17.89C35.516 18.3407 36.3898 19.1447 36.9272 20.1658C37.4646 21.1869 37.6326 22.3624 37.4027 23.4931C37.1728 24.6239 36.5592 25.6404 35.6657 26.3706C34.7723 27.1009 33.6539 27.4998 32.5 27.5H30L31.25 30H32.5C36.6363 30 40 26.6362 40 22.5C40.0013 21.1846 39.6551 19.8922 38.9967 18.7534C38.3382 17.6147 37.3907 16.6701 36.25 16.015C36.1188 11.9937 32.8025 8.74999 28.75 8.74999C28.2625 8.74999 27.7588 8.79999 27.265 8.90624C26.4734 7.7033 25.3948 6.71634 24.1265 6.03439C22.8582 5.35244 21.44 4.99695 20 4.99999ZM22.5 17.5C22.5 17.5 20 21.1187 20 22.5C20 23.8812 21.1187 25 22.5 25C23.8813 25 25 23.8812 25 22.5C25 21.1187 22.5 17.5 22.5 17.5ZM16.25 23.75C16.25 23.75 13.75 27.3687 13.75 28.75C13.75 30.1312 14.8687 31.25 16.25 31.25C17.6313 31.25 18.75 30.1312 18.75 28.75C18.75 27.3687 16.25 23.75 16.25 23.75ZM26.25 27.5C26.25 27.5 23.75 31.1187 23.75 32.5C23.75 33.8812 24.8687 35 26.25 35C27.6313 35 28.75 33.8812 28.75 32.5C28.75 31.1187 26.25 27.5 26.25 27.5Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_2_8">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
  </svg>`
} 

const stopMusic = () => {
    let allAudios = document.querySelectorAll("audio");
    allAudios.forEach(function(audio) {
        if(audio.duration > 0 && !audio.paused) {
            audio.pause();
        }
    });
    let allPlayerButtons = document.querySelectorAll(".button-song");
    allPlayerButtons.forEach(function(button) {
        let buttonId = button.id;
        button.innerHTML = buttonSvg[buttonId];
    })
}

const play = (idPlayer, idButton) => {
    let player = document.querySelector("#" + idPlayer);
    let control = document.getElementById(idButton)

    if (player.paused) {
        stopMusic();
        player.play();
      
        control.innerHTML = `<svg fill="#000000" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 189.993 189.993" xml:space="preserve">
        <path d="M94.997,189.993C42.615,189.993,0,147.378,0,94.997C0,42.615,42.615,0,94.997,0c52.381,0,94.996,42.615,94.996,94.997
        C189.993,147.378,147.378,189.993,94.997,189.993z M94.997,4C44.821,4,4,44.821,4,94.997s40.821,90.996,90.997,90.996
        s90.996-40.82,90.996-90.996S145.173,4,94.997,4z M94.997,182.755c-48.39,0-87.758-39.368-87.758-87.758
        c0-48.391,39.368-87.759,87.758-87.759c1.104,0,2,0.896,2,2s-0.896,2-2,2c-46.185,0-83.758,37.574-83.758,83.759
        s37.574,83.758,83.758,83.758c1.104,0,2,0.896,2,2S96.101,182.755,94.997,182.755z M94.997,171.493
        c-42.18,0-76.497-34.316-76.497-76.496C18.5,52.816,52.817,18.5,94.997,18.5c42.18,0,76.496,34.316,76.496,76.497
        C171.493,137.177,137.177,171.493,94.997,171.493z M94.997,22.5C55.022,22.5,22.5,55.022,22.5,94.997s32.522,72.496,72.497,72.496
        s72.496-32.521,72.496-72.496S134.971,22.5,94.997,22.5z M126.314,135.64h-14.663c-6.021,0-10.919-4.897-10.919-10.918V59.558
        c0-6.021,4.898-10.918,10.919-10.918h14.663c6.021,0,10.918,4.897,10.918,10.918v65.164
        C137.232,130.742,132.335,135.64,126.314,135.64z M111.651,52.64c-3.815,0-6.919,3.104-6.919,6.918v65.164
        c0,3.814,3.104,6.918,6.919,6.918h14.663c3.814,0,6.918-3.104,6.918-6.918V59.558c0-3.814-3.104-6.918-6.918-6.918H111.651z
          M80.151,135.64H65.488c-6.021,0-10.918-4.897-10.918-10.918V59.558c0-6.021,4.898-10.918,10.918-10.918h14.664
        c6.02,0,10.918,4.897,10.918,10.918v65.164C91.069,130.742,86.171,135.64,80.151,135.64z M65.488,52.64
        c-3.815,0-6.918,3.104-6.918,6.918v65.164c0,3.814,3.104,6.918,6.918,6.918h14.664c3.814,0,6.918-3.104,6.918-6.918V59.558
        c0-3.814-3.104-6.918-6.918-6.918H65.488z"/>
        </svg>`
    } else {
        player.pause();
        control.innerHTML = buttonSvg[idButton]
  }
}

//addEventListener nécessaire pour l'extension chrome car "onclick" via html ne fonctionne pas 
//Pour utiliser des arguments dans une fonction appelé au clic, le formalisme suivant est nécessaire :
// buttonForest.addEventListener("click", () => { play("audioForest", "buttonForest") });
// buttonWaves.addEventListener("click",  () => { play("audioWaves", "buttonWaves")});
// buttonRain.addEventListener("click",  () => { play("audioRain", "buttonRain")});
// TESTS POUR LE BACKGROUND
const displayAllButtonsOff = () => {
  let allPlayerButtons = document.querySelectorAll(".button-song");
    allPlayerButtons.forEach(function(button) {
        let buttonId = button.id;
        button.innerHTML = buttonSvg[buttonId];
    })
}

const displayButtons = () => {
  displayAllButtonsOff();
  let idButtonPause = localStorage.getItem("idButtonAudioPlaying");
  console.log("idButtonPause issu du localStorage", idButtonPause)
  if (idButtonPause !== null && idButtonPause !== "") {
    let control = document.getElementById(idButtonPause)
    control.innerHTML = `<svg fill="#000000" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 189.993 189.993" xml:space="preserve">
        <path d="M94.997,189.993C42.615,189.993,0,147.378,0,94.997C0,42.615,42.615,0,94.997,0c52.381,0,94.996,42.615,94.996,94.997
        C189.993,147.378,147.378,189.993,94.997,189.993z M94.997,4C44.821,4,4,44.821,4,94.997s40.821,90.996,90.997,90.996
        s90.996-40.82,90.996-90.996S145.173,4,94.997,4z M94.997,182.755c-48.39,0-87.758-39.368-87.758-87.758
        c0-48.391,39.368-87.759,87.758-87.759c1.104,0,2,0.896,2,2s-0.896,2-2,2c-46.185,0-83.758,37.574-83.758,83.759
        s37.574,83.758,83.758,83.758c1.104,0,2,0.896,2,2S96.101,182.755,94.997,182.755z M94.997,171.493
        c-42.18,0-76.497-34.316-76.497-76.496C18.5,52.816,52.817,18.5,94.997,18.5c42.18,0,76.496,34.316,76.496,76.497
        C171.493,137.177,137.177,171.493,94.997,171.493z M94.997,22.5C55.022,22.5,22.5,55.022,22.5,94.997s32.522,72.496,72.497,72.496
        s72.496-32.521,72.496-72.496S134.971,22.5,94.997,22.5z M126.314,135.64h-14.663c-6.021,0-10.919-4.897-10.919-10.918V59.558
        c0-6.021,4.898-10.918,10.919-10.918h14.663c6.021,0,10.918,4.897,10.918,10.918v65.164
        C137.232,130.742,132.335,135.64,126.314,135.64z M111.651,52.64c-3.815,0-6.919,3.104-6.919,6.918v65.164
        c0,3.814,3.104,6.918,6.919,6.918h14.663c3.814,0,6.918-3.104,6.918-6.918V59.558c0-3.814-3.104-6.918-6.918-6.918H111.651z
          M80.151,135.64H65.488c-6.021,0-10.918-4.897-10.918-10.918V59.558c0-6.021,4.898-10.918,10.918-10.918h14.664
        c6.02,0,10.918,4.897,10.918,10.918v65.164C91.069,130.742,86.171,135.64,80.151,135.64z M65.488,52.64
        c-3.815,0-6.918,3.104-6.918,6.918v65.164c0,3.814,3.104,6.918,6.918,6.918h14.664c3.814,0,6.918-3.104,6.918-6.918V59.558
        c0-3.814-3.104-6.918-6.918-6.918H65.488z"/>
        </svg>`
  }
}

buttonForest.addEventListener("click", async function () {
  chrome.runtime.sendMessage({name: "sw-playTrack", idPlayer: "audioForest", idButton: "buttonForest"});
  // displayAllButtonsOff();
})
buttonWaves.addEventListener("click", function () {
  chrome.runtime.sendMessage({name: "sw-playTrack", idPlayer: "audioWaves", idButton: "buttonWaves"});
  // displayAllButtonsOff();
})
buttonRain.addEventListener("click", function () {
  chrome.runtime.sendMessage({name: "sw-playTrack", idPlayer: "audioRain", idButton: "buttonRain"});
  // displayAllButtonsOff();
})

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === "displayPause") {
    console.log("msg.idButton dans script", msg.idButton)
    localStorage.setItem("idButtonAudioPlaying", msg.idButton)
    displayButtons();
  }
})

// Partie TO DO LIST
let buttonAddTask = document.getElementById("buttonAdd");
let taskList = document.getElementById("myTaskList");


// Renvoie un tableau contenant l'intitulé des tâches (sauvegardées dans le localStorage)
const getToDoList = () => {
  let list = localStorage.getItem("listStorage");
  if (list !== null){
    return JSON.parse(list);
  }
  else {
    return [];
  }
}

// Enregistre le tableau avec la nouvelle tâche (tableau "toDoList") dans le localStorage 
const saveToDoList = (toDoList) => {
  localStorage.setItem("listStorage", JSON.stringify(toDoList));
}

const saveCurrentList = () => {
  let tasks = document.querySelectorAll(".task")
  let toDoList = []
  tasks.forEach(task => {
    let taskName = task.innerText;
    let isChecked = task.querySelector("input").checked; //"checked" est true ou false en fonction de si la checkbox est cochee ou pas
    let taskToAdd = {name: taskName, checked: isChecked};
    toDoList.push(taskToAdd);
  })
  saveToDoList(toDoList);
}
// Génère dans la page HTML la to do list à partir de celle sauvegardée dans le localStorage
const generateToDoList = () => {
  taskList.innerHTML = "";
  let tasks = getToDoList();
  tasks.forEach(task => {
    let li = document.createElement("li");
    li.classList.add("task");
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = task.checked;
    li.appendChild(checkbox)
    let t = document.createTextNode(task.name);
    li.appendChild(t);
    taskList.appendChild(li);
  })
}

const newElement = () => {
  let taskInputValue = document.getElementById("taskInput").value;

  if (taskInputValue === "") {
    console.log("You must write something before adding a task !")
  } else {
    saveCurrentList();
    let toDoList = getToDoList(); // tableau issu du local storage
    let newTask = {name: taskInputValue, checked: false};
    toDoList.push(newTask);
    saveToDoList(toDoList); // met la nouvelle todoList dans le local storage
    generateToDoList(); // régénère la todoList
  }
  document.getElementById("taskInput").value = "";
}

buttonAddTask.addEventListener("click", () => { newElement() });

document.getElementById("taskInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    newElement();
  }
})

let buttonClear = document.getElementById("buttonClear");

const effacer = () => {
  saveCurrentList();
  let currentToDoList = getToDoList();
  let newToDoList = [];
  
  currentToDoList.forEach(task => {
    if (task.checked === false){
      newToDoList.push(task)
    }
  })
  saveToDoList(newToDoList);
  generateToDoList();
}

buttonClear.addEventListener("click", () => {effacer()});


// GESTION OUVERTURE ET FERMETURE DE L'EXTENSION
const windowOnLoad = async () => {
  let audioIsPlaying = await chrome.runtime.sendMessage({name: "isPlaying"})
  if (!audioIsPlaying) {
    localStorage.removeItem("idButtonAudioPlaying")
  }
  displayButtons();
  generateToDoList();
}

window.onload = windowOnLoad;
window.onunload = saveCurrentList;