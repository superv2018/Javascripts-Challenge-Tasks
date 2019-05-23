window.onscroll = function() {scrollFunction()};

let elem = document.getElementById('hideDisplay');



function scrollFunction() {

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

    document.getElementById("hideDisplay").className = "hide";

  } else {

    document.getElementById("hideDisplay").className = "";

  }

};
