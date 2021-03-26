const loadPage = file => {
  document.getElementById('frame').src = file;
}

const popWindow = file => {
  window.open (file, "pop", "height=100, width=400, top=250, left=550, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no");
}

$(document).ready(() => {
  loadPage("welcome.html");

  let moveRight = true;
  $("#switch").click(function () {
    $("#nav").animate({opacity: 'toggle'}, 1000);
  });
});

/**
if(moveRight) {
  $("#nav").animate({right: '+=21%'});
  $("#content").width('100%');
} else {
  $("#nav").animate({right: '-=21%'});
  $("#content").animate({width: '80%'});
}
moveRight = !moveRight;
**/
