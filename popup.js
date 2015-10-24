console.log('popup.js');

$( document ).ready(function() {
  action();
});

function action(){

  chrome.tabs.executeScript(
    null,
    {file:"jquery.min.js"}
  );

  chrome.tabs.executeScript(
    null,
    {file: "js/here.js"}
  );

  window.close();
};

