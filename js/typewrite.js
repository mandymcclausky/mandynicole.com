/*
https://github.com/jhauberg/jquery-typewriter
*/

(function($) {
  $.fn.typewrite = function(options) {
    var settings = {
      'selector': this,
      'cursor': '|',
      'delay': 50,
      'trim': false,
      'style': 'by-the-letter',
      'callback': null
    };

    if (options) {
      $.extend(settings, options);
    }

    function type_next_element(index, style) {
      var current_element = $(settings.selector[index]);
      var final_text = current_element.text();

      if (settings.trim) {
        final_text = $.trim(final_text);
      }

      current_element.html('').show();

      function type_next_character_or_word(element, i, style) {
        var next_part = final_text.substr(0, i);
        var should_continue = final_text.length >= i;

        if (should_continue) {
          next_part += settings.cursor;
        }

        element.html(next_part);

        var offset = 0;

        if (style === 'by-the-letter') {
          offset = 1;
        } else if (style === 'by-the-word') {
          var next_whitespace_index = final_text.indexOf(' ', i);

          if (next_whitespace_index == -1) {
            next_whitespace_index = final_text.length;
          }

          offset = (next_whitespace_index + 1) - i;
        }

        if (should_continue) {
          setTimeout(function() {
            type_next_character_or_word(element, i + offset, style);
          }, settings.delay);
        } else {
          if (++index < settings.selector.length) {
            type_next_element(index, style);
          } else if (settings.callback) {
            settings.callback();
          }
        }
      }

      type_next_character_or_word(current_element, 0, style);
    }

    type_next_element(0, settings.style);

    return this;
  };
})(jQuery);