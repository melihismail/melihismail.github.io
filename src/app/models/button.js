

async function fetchVideoData() {
    try {
        const response = await fetch('/src/app/models/videos.json'); // Adjust the path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const videos = await response.json();
        return videos;
    } catch (e) {
        console.error("Could not fetch videos:", e);
    }
}
let videos = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchVideoData().then(fetchedVideos => {
        if (fetchedVideos) {
            videos = fetchedVideos;
            showVideo(); // Initialize the display with the first video
        }
    });
});


const myVideo = document.getElementById("video-shown");
const myVideoContainer = document.querySelector(".video-container")
const mainSubtitle = document.getElementById("main-subtitle");

const subToggle = document.getElementById("subtitle-toggle");

const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const changeGrammarContainer = document.getElementById("change-grammar");
const changeInfoContainer = document.getElementById("change-info");

const infoContainer = document.querySelector(".info-container")
const grammarContainer = document.querySelector(".grammar-container")

const startBtn = document.getElementById("start-game-btn")
const gameContainer = document.getElementById("the-game")
const startContainer = document.getElementById("start-game-cointainer")

// Initially hide the subtitle element
mainSubtitle.style.display = "none";

// Array of video objects with name and subtitle properties
// hey // heysasdasd

// Variable to keep track of the current video index
let currentVideoIndex  = 0;
console.log(currentVideoIndex)

function startGame(){
    startBtn.remove();
    startContainer.remove();
    gameContainer.style.display = ""
    myVideo.setAttribute("src", "/src/app/assets/videos/" + videos[currentVideoIndex].name);
}


// Function to switch to the next video

function nextVideoBtn() {
    
    currentVideoIndex ++; // Increment the index
    console.log(currentVideoIndex)
    videoCounterIndex = 0
    subToggle.disabled = true;
    // If we've reached the end of the array, reset the index to 0
    if (currentVideoIndex  == videos.length) {
        currentVideoIndex  = 0;
        console.log("looped the array!")
    }
    showVideo();
}



function previousVideoBtn() {
    
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
        console.log("looped to the last video!");
    }
    showVideo();
}
function showVideo() {
    myVideo.setAttribute("src", "/src/app/assets/videos/" +  videos[currentVideoIndex].name);
    mainSubtitle.innerText = videos[currentVideoIndex].sub;
    changeGrammarContainer.innerText = videos[currentVideoIndex].grammar;
    changeInfoContainer.innerText = videos[currentVideoIndex].vocab;

}


// Function to toggle the visibility of the subtitle
function toggleSub() {
    if (mainSubtitle.style.display === "none") {
        mainSubtitle.style.display = "block"; // Show the subtitle
    } else {
        mainSubtitle.style.display = "none"; // Hide the subtitle
        console.log("deneme"); // Log a message
    }
}

// Function to toggle play/pause state of the video
function togglePause() {
    if (myVideo.paused) {
        myVideo.play(); // Play the video
    } else {
        myVideo.pause(); // Pause the video
    }
}

// Function to toggle full screen mode for the video
function toggleFullScreen() {
    myVideo.requestFullscreen(); // Request full screen mode
}

// Event listeners
myVideo.addEventListener("click", togglePause); // Toggle play/pause on single click
myVideo.addEventListener("dblclick", toggleFullScreen); // Toggle full screen on double click
subToggle.addEventListener("click", toggleSub); // Toggle subtitle visibility on click
nextBtn.addEventListener("click", nextVideoBtn); // Switch to next video on click
previousBtn.addEventListener("click", previousVideoBtn); // Switch to next video on click
startBtn.addEventListener("click", startGame)
myVideo.addEventListener("ended", videoCounter)

let videoCounterIndex = 0;
function videoCounter(){

if (videoCounterIndex == 0){
    highlightAll(infoContainer);
    highlightAll(grammarContainer);
    videoCounterIndex++;
    
} else if (videoCounterIndex == 1){
    
    highlightAll(subToggle);
    subToggle.removeAttribute("disabled")
   

} else if (videoCounterIndex == 2) {
    activateSub();
    videoCounterIndex++;
}
}


// it highlights the container twice.
function highlightAll(element) {
    element.style.boxShadow = "0px 0px 20px 6px rgb(241, 196, 15)";
    element.style.transition = "box-shadow 700ms ease-in-out";

    setTimeout(() => {
        element.style.boxShadow = "0px 0px 0px 0px rgb(241, 196, 15)";
    }, 700);

    setTimeout(() => {
        element.style.boxShadow = "0px 0px 20px 6px rgb(241, 196, 15)";
    }, 1400);

    setTimeout(() => {
        element.style.boxShadow = "0px 0px 0px 0px rgb(241, 196, 15)";
    }, 2100);
}
