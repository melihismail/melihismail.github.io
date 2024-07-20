// uiControl.js
import { mainSubtitle, filterMenu } from './constants.js';

export function toggleSub() {
    if (mainSubtitle.style.display === "none") {
        mainSubtitle.style.display = "block";
    } else {
        mainSubtitle.style.display = "none";
    }
}

export function highlightAll(element, color = "rgb(241, 196, 15)", duration = 700, pulses = 2) {
    const interval = duration * 2;

    for (let i = 0; i < pulses; i++) {
        setTimeout(() => {
            element.style.boxShadow = `0px 0px 20px 6px ${color}`;
        }, i * interval);

        setTimeout(() => {
            element.style.boxShadow = "0px 0px 0px 0px";
        }, i * interval + duration);
    }

    element.style.transition = `box-shadow ${duration}ms ease-in-out`;
}


export function toggleFilter() {
    if (filterMenu.style.display === "none") {
        filterMenu.style.display = "block";
    } else {
        filterMenu.style.display = "none";
    }
}