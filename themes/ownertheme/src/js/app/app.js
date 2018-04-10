/* Main JS */
// chenge default buttons in slick.js
const slick = require('slick-carousel-browserify');

(function() {
    
    'use strict';
	
	let app = {
		navClass:		'.navbar',
		navExtended:	'navbar__extended',
		navToggler:		'.navbar-toggler',
		navClose:		'navbar-close',
		// home beruf
		berufList:		'.section__beruf--list'
	};
	
	/*$(app.navToggler).toggle(function() {
		$(app.navClass).addClass(app.navExtended);
		$(this).closest('.col-4').siblings('.col-4').fadeOut();
		$(this).addClass(app.navClose);
	}, function() {
		$(app.navClass).removeClass(app.navExtended);
		$(this).closest('.col-4').siblings('.col-4').fadeIn();
		$(this).removeClass(app.navClose);
	});*/
	
	$(app.navToggler).on('click', function() {
		$(app.navClass).toggleClass(app.navExtended);
		$(this).closest('.col-4').siblings('.col-4').fadeToggle();
		$(this).toggleClass(app.navClose);
		$('body').toggleClass('overflow-y');
	});
	/*$('.'+app.navClose).on('click', function() {
		$(this).removeClass(app.navClose).closest('.col-4').siblings('.col-4').fadeIn();
	});*/
	
	
	if(window.innerWidth > 1199) {
		if($(app.berufList.length)) {
			slick($(app.berufList), {
				variableWidth: true,
				slidesToShow: 3,
				speed: 500
			});
		}
	} else {
			console.log('window not 1200px');
		}
	
})(console.log('app.js loaded'));