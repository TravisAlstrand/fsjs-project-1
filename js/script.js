/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const body = document.getElementById('body');
const quoteBox = document.getElementById('quote-box');
let currentQuote;

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

/*** 
 * `colors` array 
***/

const colors = [
  "#3ac162", "#a4c13a", "#c1a23a", "#c15a3a", 
  "#c13a3a", "#c13a8d", "#963ac1", "#3a3cc1", "#3ab8c1"
];

/***
 * `getRandomColor` function
***/

function getRandomColor() {
  // get a random number between 0 & the last number of colors array  
  const randomNumber = Math.floor(Math.random() * colors.length);
  // return the color in colors array at random number index
  return colors[randomNumber];
}

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // get a random number between 0 & the last number of quotes array
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // return the object in quotes array at random number index
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
  // call getRandomQuote and assign to 'nextQuote' variable
  let nextQuote = getRandomQuote();
  // call getRandomColor and assign to 'newColor' variable
  let newColor = getRandomColor();

  // check if newly acquired quote object is the same as the last (currentQuote)
  if (nextQuote === currentQuote) {
    // if so, call getRandomQuote again and re assign 'nextQuote' variable
    nextQuote = getRandomQuote();
  } else {
    // if not, assign new quote to 'current quote' variable
    currentQuote = nextQuote;

    // variable for html replacement code
    let newHTML = `
      <p class="quote">${currentQuote.quote}</p>
      <p class="source">${currentQuote.source}
    `;

    // check if there is a citation value
    if (currentQuote.citation !== null) {
      newHTML += `<span class="citation">${currentQuote.citation}</span>`;
    }

    // check if there is a year value
    if (currentQuote.year !== null) {
      newHTML += `<span class="year">${currentQuote.year}</span>`
    }

    // check if there is a tags value
    if (currentQuote.tags !== null) {
      newHTML +=  `</p><p class="tags">${currentQuote.tags}`
    }

    // complete html markup
    newHTML += `</p>`;

    // assign html markup to DOM
    quoteBox.innerHTML = newHTML;

    // assign new background color
    body.style.backgroundColor = newColor;
  }
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// for button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// timer to automatically change quote/BG color
setInterval(printQuote, 6000);