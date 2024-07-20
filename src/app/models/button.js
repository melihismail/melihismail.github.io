import { filterBtn, subToggle, nextBtn, previousBtn, startBtn, myVideo, infoContainer, grammarContainer, mainSubtitle, topicBtn, filterMenu } from './constants.js';
import { fetchVideoData } from './fetchData.js';
import { highlightAll, toggleSub, toggleFilter } from './uiControl.js';
import { startGame, nextVideo, previousVideo, showVideo, togglePause  } from './videoControls.js';

let videoData = []; //fetched videos, these don't change
let videos = []; //these videos are changed through filtering
let checkBoxArray = []; //values of the checkboxes that I use for filtering


let currentVideoIndex = 0;
nextBtn.disabled = false;
previousBtn.disabled = true;



async function getVideo(){ // gets and resets the videos.
    
    const fetchedVideos = await fetchVideoData();
    if (fetchedVideos) {
        videos = fetchedVideos;
        videoData = fetchedVideos;
        console.log("çalış")
    }
}
getVideo();


// Event listeners
topicBtn.addEventListener("click", toggleFilter)
myVideo.addEventListener("click", togglePause);
subToggle.addEventListener("click", toggleSub);
filterBtn.addEventListener("click", filterAll)
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
    
    previousBtn.disabled = false;
}

myVideo.addEventListener("ended", videoCounter)



// multi-select function will be added
// runs when you click the filter button
// Filters everything and pushes everything into videos array so the player can show them on site.


function filterAll() {
  videos = videoData;
  newFilter();
  videos = videoData.filter(video =>
    checkBoxArray.every(value => video.grammarFilter.includes(value))
  );
  showVideo(videos, currentVideoIndex); // also shows the video when you click the button
}

// puts everything in checkBoxArray
function newFilter() {
  checkBoxArray = [];
  const checkBoxes = document.querySelectorAll(".grammar-checkbox");
  checkBoxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkBoxArray.push(checkbox.value);
    }
  });
}

