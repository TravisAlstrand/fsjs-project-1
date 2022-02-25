/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const body = document.getElementById('body');
const quoteBox = document.getElementById('quote-box');

// ==================================================================================

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Hold on to your butts!",
    source: "Samuel L. Jackson",
    citation: "Jurassic Park",
    year: 1993,
    tags: null
  },
  {
    quote: "Fourth wall break inside of a fourth wall break? That's like... 16 walls!",
    source: "Ryan Reynolds",
    citation: "Deadpool",
    year: 2016,
    tags: "Thought provoking"
  },
  {
    quote: "Nobody normal ever accomplished anything meaningful in this world.",
    source: "Jonathan Byers",
    citation: "Stranger Things",
    year: null,
    tags: null
  },
  {
    quote: "Never tell me the odds!",
    source: "Harrison Ford",
    citation: "The Empire Strikes Back",
    year: 1980,
    tags: "Classic"
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: 1980,
    tags: "So wise"
  },
  {
    quote: "Writing the next lines and words of your life is something only you can do. We write our own stories.",
    source: "Kim Pape",
    citation: null,
    year: null,
    tags: "Worded perfectly"
  },
  {
    quote: "Maybourne, you are an idiot every day of the week. Why couldn't you have taken one day off?",
    source: "Samantha Carter",
    citation: "Stargate SG-1",
    year: null,
    tags: null
  }
];

// empty array to be changed over time in getRandomQuote()
let newQuotesArr = [];

// ==================================================================================

/*** 
 * `colors` array 
***/

const colors = [
  "#3ac162", "#a4c13a", "#c1a23a", "#c15a3a", 
  "#c13a3a", "#c13a8d", "#963ac1", "#3a3cc1", "#3ab8c1"
];

// empty array to be changed over time in getRandomColor()
let newColorsArr = [];

// ==================================================================================

/***
 * `getRandomColor` function
***/

function getRandomColor() {

  // check if newColorsArr is empty
  if (newColorsArr.length === 0) {

    // if so, duplicate colors array
    newColorsArr = [...colors];
  }
  
  // get a random number between 0 & the last number of newColorsArr
  const randomNumber = Math.floor(Math.random() * newColorsArr.length);

  // return the color in newColorsArr at random number index
  return newColorsArr[randomNumber];
}

// ==================================================================================

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  // check if newQuotesArr is empty
  if (newQuotesArr.length === 0) {

    // if so, duplicate quotes array
    newQuotesArr = [...quotes];
  }

  // get a random number between 0 & the last number of newQuotesArr
  const randomNumber = Math.floor(Math.random() * newQuotesArr.length);

  // return the object in newQuotesArr at random number index
  return newQuotesArr[randomNumber];
}

// ==================================================================================

/***
 * `printQuote` function
***/

function printQuote() {

  // call getRandomQuote and assign to 'newQuote' variable
  const newQuote = getRandomQuote();

  // call getRandomColor and assign to 'newColor' variable
  const newColor = getRandomColor();

  // variable for html replacement code
  let newHTML = `
    <p class="quote">${newQuote.quote}</p>
    <p class="source">${newQuote.source}
  `;

  // check if there is a citation value
  if (newQuote.citation !== null) {
    newHTML += `<span class="citation">${newQuote.citation}</span>`;
  }

  // check if there is a year value
  if (newQuote.year !== null) {
    newHTML += `<span class="year">${newQuote.year}</span>`
  }

  // check if there is a tags value
  if (newQuote.tags !== null) {
    newHTML +=  `</p><p class="tags">${newQuote.tags}`
  }

  // complete html markup
  newHTML += `</p>`;

  // assign html markup to DOM
  quoteBox.innerHTML = newHTML;

  // assign new bg color
  body.style.backgroundColor = newColor;

  // remove newQuote from newQuotesArr
  newQuotesArr.splice(newQuotesArr.indexOf(newQuote), 1);

  // remove new bg color from newColorsArr
  newColorsArr.splice(newColorsArr.indexOf(newColor), 1);
}

// ==================================================================================

printQuote();

// ==================================================================================

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// for button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// timer to automatically change quote/BG color
setInterval(printQuote, 6000);