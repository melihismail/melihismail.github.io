const myVideo = document.getElementById("video1");


document.getElementById("subtitle-toggle").addEventListener("click", toggleSub);
myVideo.addEventListener("click", togglePause);
myVideo.addEventListener("dblclick", toggleFullScreen);
const mainSubtitle = document.getElementById("main-subtitle");
mainSubtitle.style.display = "none";


function toggleSub() {
    
if (mainSubtitle.style.display === "none") {
    mainSubtitle.style.display = "block";
}
else{
    mainSubtitle.style.display = "none";
    console.log("deneme")
}
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