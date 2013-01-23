$(document).ready(function() {
  $(".fancybox-ubuntu").fancybox({
    autoSize : false,
    closeClick : false,
    openEffect : 'elastic',
    closeEffect	: 'elastic',
    helpers : {
      title : {
        type: 'float'
      },
      thumbs : {
        width : 50,
        height : 50
      }
    }
  });
  
  $(".fancybox-fedora").fancybox({
    autoSize : false,
    closeClick : false,
    openEffect : 'elastic',
    closeEffect	: 'elastic',
    helpers : {
      title : {
        type: 'float'
      },
      thumbs : {
        width : 50,
        height : 50
      }
    }
  });
  
  $('.fancybox-ubuntu img, .fancybox-fedora img').hover(function() {
    $(this).animate({'opacity': '1'}, 300);
  },
  function() {
    $(this).animate({'opacity': '0.75'}, 300);
  });
  
  /* opacityrollover({
    mouseOutOpacity: 0.67,
    mouseOverOpacity: 1.0,
    fadeSpeed: 'fast',
    exemptionSelector: '.selected'
  }); */

  /* $('#thumbs ul.thumbs li').opacityrollover({
    mouseOutOpacity: 0.67,
    mouseOverOpacity: 1.0,
    fadeSpeed: 'fast',
    exemptionSelector: '.selected'
  });

  var gallery = $('#thumbs').galleriffic({
    delay: 2500, // in milliseconds
    numThumbs: 30, // The number of thumbnails to show page
    preloadAhead: 40, // Set to -1 to preload all images
    enableTopPager: false,
    enableBottomPager: false,
    maxPagesToShow: 7,  // The maximum number of pages to display in either the top or bottom pager
    imageContainerSel: '#slideshow', // The CSS selector for the element within which the main slideshow image should be rendered
    //controlsContainerSel: '#controls', // The CSS selector for the element within which the slideshow controls should be rendered
    captionContainerSel: '#caption', // The CSS selector for the element within which the captions should be rendered
    //loadingContainerSel: '#loading', // The CSS selector for the element within which should be shown when an image is loading
    renderSSControls: false, // Specifies whether the slideshow's Play and Pause links should be rendered
    renderNavControls: false, // Specifies whether the slideshow's Next and Previous links should be rendered
    playLinkText: 'Play',
    pauseLinkText: 'Pause',
    prevLinkText: 'Previous',
    nextLinkText: 'Next',
    nextPageLinkText: 'Next &rsaquo;',
    prevPageLinkText: '&lsaquo; Prev',
    enableHistory: false, // Specifies whether the url's hash and the browser's history cache should update when the current slideshow image changes
    enableKeyboardNavigation: true, // Specifies whether keyboard navigation is enabled
    autoStart: false, // Specifies whether the slideshow should be playing or paused when the page first loads
    syncTransitions: false, // Specifies whether the out and in transitions occur simultaneously or distinctly
    defaultTransitionDuration: 900, // If using the default transitions, specifies the duration of the transitions
    onSlideChange: function(prevIndex, nextIndex) {
      // 'this' refers to the gallery, which is an extension of $('#thumbs')
      this.find('ul.thumbs').children()
          .eq(prevIndex).fadeTo('fast', 0.67).end()
          .eq(nextIndex).fadeTo('fast', 1.0);
    }, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
    onTransitionOut: undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
    onTransitionIn: undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
    onPageTransitionOut: function(callback) {
      this.fadeTo('fast', 0.0, callback);
    }, // accepts a delegate like such: function(callback) { ... }
    onPageTransitionIn: function() {
      this.fadeTo('fast', 1.0);
    } // accepts a delegate like such: function() { ... }
    onImageAdded: undefined, // accepts a delegate like such: function(imageData, $li) { ... }
    onImageRemoved: undefined  // accepts a delegate like such: function(imageData, $li) { ... }
  }); */
});
