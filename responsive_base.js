var Responsivebase = {};
(function($) {

  /**
   * Get the real device or browser.
   * @return - String
   */
  Responsivebase.get_real_device = function() {
    var agent = navigator.userAgent;
    
    // Mobile and tablet.
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)) {
      return 'mobile_tablet';
    }
    
    // IE 8.
    else if (/MSIE 8/i.test(agent)) {
      return 'IE8';
    }
    
    // IE 9.
    else if (/MSIE 9/i.test(agent)) {
      return 'IE9';
    }
  };
  
  /**
   * Verify Flash support.
   */ 
  Responsivebase.browser_flash_support = function() {
	  
    // Add a class "has-flash" or "no-flash" in <html> tag
    $('html').addClass(FlashDetect.installed ? 'has-flash' : 'no-flash');
  };
  
  /**
   * Jumps the display to the position of a given element.
   */
  Responsivebase.jump_to_element = function(element) {
    var offset = element.offset();
    if (offset) {
      $('html, body').scrollTop(offset.top);
    }
  };
  
  /**
   * Set the elements have the same height.
   * element - The elements that need set same height.
   * reset   - Is set reset the height, Boolean.
   * parent  - The element's parent also need set the same height.
   */
  Responsivebase.set_height = function(element, reset, parent) {
    var sizes = [];
    if (reset) {
      $(element).each(function() {
        $(this).css('height', 'auto');
      });
      if (parent != undefined) {
        $(element).parent(parent).css('height', 'auto');
      }
    }
    else {
      $(element).each(function() {
        $(this).css('height', 'auto');
        $(this).each(function() {
          sizes.push($(this).height());
        });
      });
	  
      var max_value = Math.max.apply(null, sizes);
      if (max_value > 0) {
        $(element).each(function() {
          $(this).css('height', (max_value) + 'px');
        });
        if (parent != undefined) {
          $(element).parent(parent).css('height', (max_value) + 'px');
        }
      }
    }
  };
  
  /**
   * Resize media elements acording to window size.
   */
  Responsivebase.resize_media_elements = function() {
  };
}(jQuery));