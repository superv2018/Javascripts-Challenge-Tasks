var place = 0;

setInterval(function() {

  var pickList = ["url(runner/runner2.png)", "url(runner/runner3.png)", "url(runner/runner4.png)"];

  place++;

  if (place === pickList.length) place = 0;

  document.body.style.backgroundImage = pickList[place];

}, 50);
