let clickCount = 0;

$(document).ready(() => {
  $(".cl-wrapper-content").hide();
  $(".cl-wrapper-title").click(function() {
    $(".cl-wrapper-content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  $("h1").click(function() {
    clickCount++;
    if (clickCount === 15)
      document.querySelector('.displaynone').classList.remove('displaynone');
  })

  $(".dc-spoiler").click(function() {
    $(this).css({
      "background-color": "#E5E5E5",
      "cursor": "inherit"
    });
  });
});
