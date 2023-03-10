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

/*
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
  
  let thirdEpisode = new Episode("The Unexpected Climax", 60, false)
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
  */

 /*

  class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('Dark Beginnings', 45, true);
  let secondEpisode = new Episode('The Mystery Continues', 45, false);
  let thirdEpisode = new Episode('An Unexpected Climax', 60, false);
  let forthEpisode = new Episode("The tailor's lab", 60, false);
  
  // Create your array here
  // ====================================
  
  let episodes = [firstEpisode, secondEpisode, thirdEpisode, forthEpisode]
  
  
  // ====================================
  
  const body = document.querySelector('body');
  
  for(let i = 0; i < 12; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episodes[i].title}
  ${episodes[i].duration} minutes
  ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }

  */

 /*

  class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('Dark Beginnings', 45, true);
  let secondEpisode = new Episode('The Mystery Continues', 45, false);
  let thirdEpisode = new Episode('An Unexpected Climax', 60, false);
  
  // Modify the array here
  // ====================================
  let episodes = [];
  
  episodes.push(firstEpisode, secondEpisode, thirdEpisode)
  episodes.pop()
  
  let numberOfEpisodes = episodes.length
  
  
  // ====================================
  
  const body = document.querySelector('body');
  
  document.querySelector('#episodes').innerText = numberOfEpisodes;
  
  for(let episode of episodes) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episode.title}
  ${episode.duration} minutes
  ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }

  */

  class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let episodes = [
    new Episode('Dark Beginnings', 45, true),
    new Episode('The Mystery Continues', 45, false),
    new Episode('An Unexpected Climax', 60, false)
  ];

  let numberOfEpisodes = episodes.length;
  
  // Add logic here
  // ======================
  
  for (let i = 0 ; i < episodes.length ; i++) {
      episodes[i].hasBeenWatched = false;
  }
  /*
  
  for (let episode of episodes) {
  episode.hasBeenWatched = false;
}
  */     
  // ======================
  
  const body = document.querySelector('body');

  document.querySelector('#episodes').innerText = numberOfEpisodes;
  
  for(let episode of episodes) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episode.title}
  ${episode.duration} minutes
  ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }

  
  /* add a function code
  // Modify the code here
// ======================

const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0
  }
  
  let sum = 0
  
  for (let i = 0 ; i < ratings.length ; i++) {
    sum += ratings[i]
  }
return sum / ratings.length;
}

//============================= or // const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }
  
  return sum / ratings.length;

} 
// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
}

*/

/* ======================= add 

class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);
const narcos = new Show('Narcos', 3, 10);

const shows = [tau, meldrum, clara, narcos];

// Modify the following code
// ======================

const showComponent = (show) => {
  const titleText = show.title;
const seasonsText = show.numberOfSeasons + ' seasons';
const episodesText = show.episodesPerSeason + ' episodes per season';
return {
  titleText,
  seasonsText,
  episodesText
};
}

const tauComponent = showComponent(tau)
const meldrumComponent = showComponent(meldrum)
const claraComponent = showComponent(clara)
const narcosComponent = showComponent(narcos)

const showComponents = [tauComponent, meldrumComponent, claraComponent, narcosComponent];

// ======================
// Modify the code above

const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.titleText;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.seasonsText;
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();

*/


/* count word 

const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    return wordArray.length;
}
    
const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    let totalLetters = 0;
    
    for (let word of wordArray) {
        word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }
    
    return totalLetters;
}
    
const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
}
    
const printStringStats = (stringToTest) => {
    console.log({
        wordCount: getWordCount(stringToTest),
        letterCount: getLetterCount(stringToTest),
        averageWordLength: getAverageWordLength(stringToTest)
    })
}

*/

/*

//-----CODE NON DRY------

//variable de diff??rentes personnes
let students = ["Jean", "Paul", "Marcel", "Abbass"];

const countNumberOfLetters = (student) => {
//On met la premi??re lettre en majuscule, on salue la premi??re personne et on donne le nombre de lettre dans son pr??nom        
    student = student[0].toUpperCase() + student.substr(1);    
    const nameLength = student.length;    
    console.log(`Bonjour ${student}, ton pr??nom contient ${nameLength} lettres`);     
}

const insertStudents = (studentsArray) => {  
  for (let i = 0 ; i < studentsArray.length ; i++) {    
    countNumberOfLetters(studentsArray[i]);    
  }  
}

insertStudents(students);

//-----CODE MAL NOMM??------

//tableau des ages des ??l??ves dans la classe
const studentsAge = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'??l??ves
const numberOfSudents = studentsAge.length;
// variable pour calculer la somme des ages
let agesSomme = 0;
for(let studentAge of studentsAge){
  agesSomme += studentAge;
}
//moyenne d'age dans la classe
const averageAge = agesSomme / numberOfSudents;
console.log('Il y a ' + numberOfSudents + " ??l??ves dans la classe et la moyenne d'age est " + averageAge);
    


//-----CODE MAL MIS EN FORME------

const temperature = 9;

if(temperature < 0) {  
  console.log("Il fait tr??s froid");  
}

else if(temperature < 10) {  
console.log("Il fait froid");  
}

else if(temperature < 10) {  
  console.log("Il fait frais");  
}

else if(temperature < 20) {  
console.log("Il fait doux");  
} 

else if(temperature < 30) {  
  console.log("Il fait bon");
} 

else {  
  console.log("Il fait chaud");  
}

*/