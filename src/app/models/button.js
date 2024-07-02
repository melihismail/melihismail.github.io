import { subToggle, nextBtn, previousBtn, startBtn, myVideo, infoContainer, grammarContainer, mainSubtitle } from './constants.js';
import { fetchVideoData } from './fetchData.js';
import { highlightAll, toggleSub } from './uiControl.js';
import { startGame, nextVideo, previousVideo, showVideo, togglePause } from './videoControls.js';


let videos = [];
let currentVideoIndex = 0;
nextBtn.disabled = true;
previousBtn.disabled = true;

document.addEventListener('DOMContentLoaded', async function() {
    const fetchedVideos = await fetchVideoData();
    if (fetchedVideos) {
        videos = fetchedVideos;
        showVideo(videos, currentVideoIndex); // Initialize the display with the first video
    }
});

// Event listeners
myVideo.addEventListener("click", togglePause);
subToggle.addEventListener("click", toggleSub);
nextBtn.addEventListener("click", () => {
    currentVideoIndex = nextVideo(videos, currentVideoIndex);
});
previousBtn.addEventListener("click", () => {
    currentVideoIndex = previousVideo(videos, currentVideoIndex);
});
startBtn.addEventListener("click", () => {
    startGame(videos, currentVideoIndex);
});


let videoCounterIndex = 0;

 function videoCounter() {
    if (videoCounterIndex == 0) {
        console.log(videoCounterIndex)
        console.log("1 kere")
        highlightAll(infoContainer);
        highlightAll(grammarContainer);
        videoCounterIndex++;
    } else if (videoCounterIndex == 1) {
        console.log(videoCounterIndex)
        console.log("2 kere")
        highlightAll(subToggle);
        subToggle.removeAttribute("disabled");
        videoCounterIndex++;
    } else if (videoCounterIndex == 2) {
        nextBtn.disabled = false;
        highlightAll(nextBtn)
        console.log(videoCounterIndex)
        console.log("3 kere")
        videoCounterIndex++;
    }
}
// resets the counter in videoControl.js
export function counterReset() { 
    videoCounterIndex = 0;
    mainSubtitle.style.display = "none";
    nextBtn.disabled = true
    previousBtn.disabled = false;
}

myVideo.addEventListener("ended", videoCounter)



