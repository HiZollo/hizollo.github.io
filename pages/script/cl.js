$(document).ready(() => {
  $(".cl-wrapper-content").hide();
  $(".cl-wrapper-title").click(function() {
    $(".cl-wrapper-content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  $(".dc-spoiler").click(function() {
    $(this).css({
      "background-color": "#E5E5E5",
      "cursor": "text"
    });
  })
});
