/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
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
    year: 1993
  },
  {
    quote: "Fourth wall break inside of a fourth wall break? That's like... 16 walls!",
    source: "Ryan Reynolds",
    citation: "Deadpool",
    year: 2016
  },
  {
    quote: "Nobody normal ever accomplished anything meaningful in this world.",
    source: "Jonathan Byers",
    citation: "Stranger Things",
    year: null
  },
  {
    quote: "Never tell me the odds!",
    source: "Harrison Ford",
    citation: "The Empire Strikes Back",
    year: 1980
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: 1980
  },
  {
    quote: "Writing the next lines and words of your life is something only you can do. We write our own stories.",
    source: "Kim Pape",
    citation: null,
    year: null
  },
  {
    quote: "Maybourne, you are an idiot every day of the week. Why couldn't you have taken one day off?",
    source: "Samantha Carter",
    citation: "Stargate SG-1",
    year: null
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let nextQuote = getRandomQuote();
  if (nextQuote === currentQuote) {
    nextQuote = getRandomQuote();
  } else {
    currentQuote = nextQuote;
    let newHTML = `
      <p class="quote">${currentQuote.quote}</p>
      <p class="source">${currentQuote.source}
    `;

    if (currentQuote.citation !== null) {
      newHTML += `<span class="citation">${currentQuote.citation}</span>`;
    }

    if (currentQuote.year !== null) {
      newHTML += `<span class="year">${currentQuote.year}</span>`
    }

    newHTML += `</p>`;

    quoteBox.innerHTML = newHTML;
  }
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);