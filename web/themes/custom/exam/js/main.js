(function ($) {
  Drupal.behaviors.exam = {
    attach: function (context, settings) {
      let temp = 0;
      $('.menu--main li').each(function (index, el) {
        if ($(el).hasClass('active')) {
          temp = 1;
        }
      })
      if (temp == 0) {
        $('.menu--main li.first').addClass('first-border');
      }
    }
  };
}(jQuery));
