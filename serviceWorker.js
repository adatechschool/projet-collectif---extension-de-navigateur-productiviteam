// async function hasOffscreenDocument(path) {
//     // Check all windows controlled by the service worker to see if one 
//     // of them is the offscreen document with the given path
//     const offscreenUrl = chrome.runtime.getURL(path);
//     const matchedClients = await clients.matchAll();
//     for (const client of matchedClients) {
//       if (client.url === offscreenUrl) {
//         return true;
//       }
//     }
//     return false;
//   }

async function createOffScreen() {
    console.log("Passe dans createOffScreen")
    if (await chrome.offscreen.hasDocument()) return;
    // const offscreenDocumentPath = 'offscreen.html'
    // if (await hasOffscreenDocument(offscreenDocumentPath)) return;
    await chrome.offscreen.createDocument({
        // url: chrome.runtime.getURL(offscreenDocumentPath),
        url: "offscreen.html",
        reasons: ["AUDIO_PLAYBACK"],
        justification: "testing",
    })
}


//Listen for messages
chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
    await createOffScreen();
    if (msg.name === "sw-playTrack") {
        chrome.runtime.sendMessage({name: "playTrack", idPlayer: msg.idPlayer});
    }

})