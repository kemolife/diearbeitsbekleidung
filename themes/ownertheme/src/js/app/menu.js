// drop menu plugin
;(function() {
    'use strict';
    // 
    // menu drop
    $.fn.mobileMenu = function(options) {
        //settings
        var settings = $.extend({
            navClose    : null,
            speed       : 300
        }, options);
      
        return this.each(function() {
            
            var navToggle 	= $(this),
                navbar    	= $('#' + navToggle.data('toggle')),
				navlink		= navbar.find('a'),
                speed     	= settings.speed;
            
            navbar.addClass('mobileMenu').attr('aria-hidden', true);
			
			function navbarClose() {
				navbar.removeClass('is-open').attr('aria-hidden', true);
			}
			
			function navbarOpen() {
				navbar.addClass('is-open').attr('aria-hidden', false);
			}
			
			$(document).on('click', function(e) {
				if(!navbar.is(e.target) && navbar.has(e.target).length === 0 && navToggle.has(e.target).length === 0) {
					navbarClose();
				}			
			});
			
				
			navlink.on('click', navbarClose);
            
            // open/close menu
            if (settings.navClose === null) {
                navToggle.on('click', navbarOpen || navbarClose);
            } else {                
                settings.navClose.on('click', navbarClose);
            }            
            
        });
    };
})(console.log('menu loaded'));
    
    /* menu */
    var navbarToggle   = $('#menuToggle');
    
    navbarToggle.mobileMenu({ speed: 500 });