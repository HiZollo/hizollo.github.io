$(document).ready(() => {
  $(".cl-wrapper-content").hide();
  $(".cl-wrapper-title").click(function() {
    $(this).next().slideToggle();
  });
});
