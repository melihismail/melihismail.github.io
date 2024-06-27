const myVideo = document.getElementById("video-shown");
const mainSubtitle = document.getElementById("main-subtitle");
const subToggle = document.getElementById("subtitle-toggle")
const nextBtn = document.getElementById("myButton")




mainSubtitle.style.display = "none";



const videos = [
    {
    name:"valo.mp4",
    sub:"kill me",
}, 
{
    name:"thedanger.mp4",
    sub:"I am not in danger. I am the danger."
}]

let x = 0;

function nextVideoBtn() {
    console.log(x)
    removeVideo = myVideo.getAttribute("src")
    myVideo.removeAttribute("src", removeVideo);
    myVideo.setAttribute("src", videos[x].name)

mainSubtitle.innerText = videos[x].sub


    x++;

    if (x == 2) {
        x = 0
        console.log(x)
        console.log("buradayım")
    }
}


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


myVideo.addEventListener("click", togglePause);
myVideo.addEventListener("dblclick", toggleFullScreen);
subToggle.addEventListener("click", toggleSub);
nextBtn.addEventListener("click", nextVideoBtn)