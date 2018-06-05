/**
 * State Search.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
    // STATE TOOLTIPS
    var $container = $('#states');
    var $tooltip = $('#state-tooltip')
    
    $('#states #outlines path').hover(function() {
        $tooltip.addClass('active');
        $tooltip.html(
            '<h6>' + $(this).data('name').toUpperCase() + '</h6>'
        );
      }, function() {
        $tooltip.html('');
        $tooltip.removeClass('active');
      });
    
      $container.on('mousemove', function(e){
        $tooltip.css({
          left:  e.pageX - $container.position().left + 15,
          top:   e.pageY - $container.position().top - 90
        });
      });

} )();
