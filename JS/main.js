const collapseFlyMenu = () => {
  document.body.classList.toggle("fly-menu");
};
(function ($) {
  $(document).ready(function ($) {
    $(".pagination-action .preview").click(function (e) {
      const contentWidth = $(".slide-item .text-content").width();
      $(".pagination-slider .wrapper").scrollLeft -= contentWidth;
    });

    $(".pagination-action .next").click(function (e) {
      const contentWidth = $(".slide-item .text-content").width();
      $(".pagination-slider .wrapper").scrollLeft += contentWidth;
    });
  });
})(jQuery);
