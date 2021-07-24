$(document).ready(() => {
  $(".cl-wrapper-content").hide();
  $(".cl-wrapper-title").click(function() {
    $(this).next().slideToggle();
  });

  $(".dc-spoiler").click(function() {
    $(this).css({
      "background-color": "#E5E5E5",
      "cursor": "default"
    });
  })
});
