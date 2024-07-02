// fetchData.js

export async function fetchVideoData() {
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
