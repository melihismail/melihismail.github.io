import { filterBtn, subToggle, nextBtn, previousBtn, startBtn, myVideo, infoContainer, grammarContainer, mainSubtitle, topicBtn, filterMenu, levelFilterMenu, levelBtn, correctBtn } from './constants.js';
import { fetchVideoData } from './fetchData.js';
import { highlightAll, toggleSub, toggleFilter, toggleDisplay } from './uiControl.js';
import { startGame, nextVideo, previousVideo, showVideo, togglePause, correctAnswer  } from './videoControls.js';

let videoData = []; //fetched videos, these don't change
let videos = []; //these videos are changed through filtering
let checkBoxArray = []; //values of the checkboxes that I use for filtering
let levelCheckboxArray = [];


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
topicBtn.addEventListener("click", () => toggleDisplay(filterMenu))
levelBtn.addEventListener("click", () => toggleDisplay(levelFilterMenu))

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
    console.log(correctBtn[0])
    console.log(correctBtn)
    console.log(correctBtn)
    correctBtn.addEventListener("click", () => {console.log("hey")})

});


let videoCounterIndex = 0;

 function videoCounter() {
    if (videoCounterIndex == 0) {
        highlightAll(infoContainer);
        highlightAll(grammarContainer);
        videoCounterIndex++;
    } else if (videoCounterIndex == 1) {
        highlightAll(subToggle);
        subToggle.removeAttribute("disabled");
        videoCounterIndex++;
    } else if (videoCounterIndex == 2) {
        nextBtn.disabled = false;
        highlightAll(nextBtn)
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
   grammarCheckbox();
   videos = filterSubject(videos);
  //  levelCheckbox();
  //  videos = filterLevel(videos);
   
  // videos = videoData.filter(video =>
  //   checkBoxArray.every(value => video.grammarFilter.includes(value))
  // );
  showVideo(videos, currentVideoIndex); // also shows the video when you click the button
}

function filterSubject(test) {
  
  test = videoData.filter(video =>
    checkBoxArray.every(value => video.grammarFilter.includes(value))
  );

  return test;
}

function filterLevel(test) {
  
  test = videoData.filter(video =>
    checkBoxArray.every(value => video.levelFilter.includes(value))
  );

  return test;
}


// puts everything in checkBoxArray
function grammarCheckbox() {
  checkBoxArray = [];
  const checkBoxes = chooseTag("grammar-checkbox")
  checkBoxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkBoxArray.push(checkbox.value);
    }
  });
}

function levelCheckbox() {
  levelCheckboxArray = [];
  const checkBoxes = document.querySelectorAll(".level-checkbox");
  checkBoxes.forEach(checkbox => {
    if (checkbox.checked) {
      levelCheckboxArray.push(checkbox.value);
    }
  });
}

function chooseTag(key){
 return document.querySelectorAll("." + key);
}


