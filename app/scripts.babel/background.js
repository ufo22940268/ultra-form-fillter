'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});


console.log('\'Allo \'Allo! Event Page for Browser Action');


function fillForm() {
  new TextFormFiller().fill();
}

chrome.browserAction.onClicked.addListener(() =>
  chrome.tabs.query({active: true}, tab => chrome.tabs.executeScript(tab.id, {file: './scripts/filler.js'}))
);