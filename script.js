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