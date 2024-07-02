// videoControl.js
import { myVideo, mainSubtitle, changeGrammarContainer, changeInfoContainer, subToggle } from './constants.js';
import { counterReset } from './button.js';




export function startGame(videos, currentVideoIndex) {
    document.getElementById("start-game-btn").remove();
    document.getElementById("start-game-container").remove();
    document.getElementById("the-game").style.display = "";
    myVideo.setAttribute("src", "/src/app/assets/videos/" + videos[currentVideoIndex].name);
}

export function showVideo(videos, currentVideoIndex) {
    myVideo.setAttribute("src", "/src/app/assets/videos/" + videos[currentVideoIndex].name);
    mainSubtitle.innerText = videos[currentVideoIndex].sub;
    changeGrammarContainer.innerText = videos[currentVideoIndex].grammar;
    changeInfoContainer.innerText = videos[currentVideoIndex].vocab;
}


// if the user click the next button, it goes to the next "video index" and disables the subtitles.
export function nextVideo(videos, currentVideoIndex) {
    currentVideoIndex++;
   counterReset();

    subToggle.disabled = true;
    if (currentVideoIndex == videos.length) {
        currentVideoIndex = 0;
    }
    showVideo(videos, currentVideoIndex);
    return currentVideoIndex;
}

export function previousVideo(videos, currentVideoIndex) {
    currentVideoIndex--;
    counterReset();
    subToggle.disabled = true;
    if (currentVideoIndex < 0) {
        currentVideoIndex = 0;
    }
    showVideo(videos, currentVideoIndex);
    return currentVideoIndex;
}

export function togglePause() {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}

