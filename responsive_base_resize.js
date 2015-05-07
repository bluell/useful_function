var Device;
(function ($) {
	
  // Class that control device resizes
  Device = (function() {
    object = {
      lastWindowHeight : 0,
      lastWindowWidth : 0,

      isIE8 : function() {
        return ($.browser.msie && $.browser.version == "8.0");
      },

      _getDevice : function(width) {
        switch (true) {
          case (width < 768):
            return 'mobile';
            break;
          case ((width < 1024) && (width >= 768)):
            return 'tablet';
            break;
          case (width >= 1024):
            return 'desktop';
            break;
        }
      }
    };

    object.getCurrentWidth = function() {
      return object.isIE8() ? $(window).width() : window.innerWidth;
    }

    object.getCurrentHeight = function() {
      return object.isIE8() ? $(window).height() : window.innerHeight;
    }

    object.updateLastResolution = function() {
      object.lastWindowHeight = object.getCurrentHeight();
      object.lastWindowWidth = object.getCurrentWidth();
    }

    object.wasResized = function() {
      return (object.getCurrentHeight() != object.lastWindowHeight || object.getCurrentWidth() != object.lastWindowWidth);
    }

    object.getDevice = function() {
      var currentDevice = object._getDevice(object.getCurrentWidth());
      var lastDevice = object._getDevice(object.lastWindowWidth);

      object.updateLastResolution();

      if (currentDevice == lastDevice) {
        return currentDevice;
      } else {
        return lastDevice + "-to-" + currentDevice;
      }
    }
    object.updateLastResolution();
    return object;
  })();

  $(window).resize(function (e) {

    //confirm window was actually resized
    if (Device.wasResized()) {
      switch (Device.getDevice()) {
        case 'tablet-to-desktop':
          break;
        case 'mobile-to-desktop':
          break;
        case 'desktop-to-tablet':
          break;
        case 'mobile-to-tablet':
          break;
        case 'desktop-to-mobile':
          break;
        case 'tablet-to-mobile':
          break;
        case 'tablet':
        case 'desktop':
          break;
        case 'mobile':
          break;
        default:
          break;
      }
    }
  });
}(jQuery));