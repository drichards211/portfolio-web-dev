/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, compLevel, options ) { 
    // Added compLevel to fine-tune font-sizing on a case-by-case basis - DR

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
    var compCalc = compLevel || 'compressor * 10'
    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        // Setting transition animation to 0s prevents centerNameVertically() from obtaining incorrect size-values - DR
        $this.css({"transition": "font-size 0s"}) 
        // centerNameVertically() is added as a jQuery callback to force re-centering of .name after font-resizing - DR
        $this.css('font-size', Math.max(Math.min($this.width() / (eval(compCalc)), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)), centerNameVertically());
      };
      
      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );