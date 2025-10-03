// videoControl.js
import { myVideo, mainSubtitle, changeGrammarContainer, changeInfoContainer, subToggle, controllerContainer, correctBtn } from './constants.js';
import { counterReset } from './button.js';
import { fetchVideoData } from "./fetchData.js";

const videos = fetchVideoData();





export function startGame(videos, currentVideoIndex) {
    
    document.getElementById("start-game-btn").remove();
    document.getElementById("start-game-container").remove();
    document.getElementById("the-game").style.display = "";
    myVideo.setAttribute("src", "/src/app/assets/videos/" + videos[currentVideoIndex].name);
    

    showVideo(videos, currentVideoIndex); // Initialize the display with the first video
    
    

    
}

export function showVideo(videos, currentVideoIndex) {
    myVideo.setAttribute("src", "/src/app/assets/videos/" + videos[currentVideoIndex].name);
    mainSubtitle.innerText = videos[currentVideoIndex].sub;
    changeGrammarContainer.innerText = videos[currentVideoIndex].grammar;
    changeInfoContainer.innerText = videos[currentVideoIndex].vocab;
   
    console.log(videos[currentVideoIndex].optionTrue)
    createAnswerButton();
    randomAnswer(videos, currentVideoIndex)
 
    

    
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


 function createAnswerButton() {
    // creates <button> tag
    const option1 = document.createElement("button");
    const option2 = document.createElement("button");
    const answer1 = document.querySelector(".answer-button-left");

   
    
    // adding classes to <button> tags
    option1.classList.add("answer-button-left")
    option2.classList.add("answer-button-right")
  

    // creates button in case it doesn't exist
if (!answer1) 
{
    controllerContainer.appendChild(option1);
    controllerContainer.appendChild(option2);
}
   

}

function randomiseNumber(){
return Math.floor(Math.random() * 2);
}

function randomAnswer(videos, currentVideoIndex) {
    const answer1 = document.querySelector(".answer-button-left");
    const answer2 = document.querySelector(".answer-button-right");
console.log(randomiseNumber)
let randomNumber = randomiseNumber();
    if (randomNumber == 1) {
        answer1.innerHTML = videos[currentVideoIndex].optionTrue;
        answer2.innerHTML = videos[currentVideoIndex].optionFalse;
    } else {
        answer1.innerHTML = videos[currentVideoIndex].optionFalse;
        answer2.innerHTML = videos[currentVideoIndex].optionTrue;
    }
  
}

export function correctAnswer(){
    console.log("Correcto")
}
