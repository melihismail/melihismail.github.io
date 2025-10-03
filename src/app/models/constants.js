// constants.js

export const gameContainer = getId("the-game", "id")
export const startContainer = document.getElementById("start-game-cointainer");
export const myVideoContainer = document.querySelector(".video-container");
export const changeGrammarContainer = document.getElementById("change-grammar");
export const changeInfoContainer = document.getElementById("change-info");
export const infoContainer = document.querySelector(".info-container");
export const grammarContainer = document.querySelector(".grammar-container");

export const subToggle = document.getElementById("subtitle-toggle");



export const mainSubtitle = document.getElementById("main-subtitle");
export const myVideo = document.getElementById("video-shown");

export const filterMenu = document.getElementById("filter-menu")
export const levelFilterMenu = document.getElementById("level-filter-menu")


export const filterBtn = document.getElementById("filter-button");
export const topicBtn = document.getElementById("topic-button")
export const levelBtn = document.getElementById("level-button")
export const previousBtn = document.getElementById("previousBtn");
export const startBtn = document.getElementById("start-game-btn");
export const nextBtn = document.getElementById("nextBtn");

export const correctBtn = document.getElementsByClassName("answer-button-left")


export const controllerContainer = document.getElementById("controllers")

function getId(key, selectType){ 
    var test = "id"
    switch(selectType) {
        case "id":
          test = "getElementById"
          break;
        case "class":
          test = "querySelector"
          break;
      }
    return document[test](key)

}
