/* 0001
// Create variables here
// =========================================

const episodeTitle = "The red city"
const episodeDuration = 50
let hasBeenWatched = true

console.log(typeof hasBeenWatched)

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`
*/

/*
// Create Object here
// =========================================

let episode = {
    title : "The red city",
    duration : 60,
    hasBeenWatched : true
  };
  
  
  // =========================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
  Duration: ${episode.duration} min
  ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`
  
let episodeTitle = episode.title; 
let episodeDuration = episode.duration  

episodeTitle = episode["title"]; // "L'Histoire de Tao"
episodeDuration = episode["duration"]; // 250

let propertyToAccess = "title";
episodeTitle = episode[propertyToAccess];// "The red city"

*/

// Create a class here
// =====================================

class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title,
      this.duration = duration,
      this.hasBeenWatched = hasBeenWatched
    }
  }
  
  let firstEpisode = new Episode("The red city", 60, true)
  
  let secondEpisode = new Episode("The new offer", 45, true)
  
  let thirdEpisode = new Episode("Ghost Soldiers", 60, false)
  // =====================================
  
  document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
  Duration: ${firstEpisode.duration} min
  ${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
  
  document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
  
  document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;