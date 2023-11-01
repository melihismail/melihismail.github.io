const myVideo = document.getElementById("video1");


document.getElementById("right-choice").addEventListener("click", removeSub);
document.getElementById("left-choice").addEventListener("click", addSub);
myVideo.addEventListener("click", togglePause);
myVideo.addEventListener("dblclick", toggleFullScreen);



function removeSub() {
    document.getElementById("main-subtitle").style.display = "none";
}

function addSub() {
    document.getElementById("main-subtitle").style.display = "block";
}



function togglePause() {
if(myVideo.paused){
myVideo.play();
}
else {
myVideo.pause();
}
}

function toggleFullScreen() {
myVideo.requestFullscreen();
}