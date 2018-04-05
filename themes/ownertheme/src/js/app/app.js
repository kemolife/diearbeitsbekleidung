/* Main JS */

(function() {
    
    'use strict';
	
	let app = {
		navClass:		'.navbar',
		navExtended:	'navbar__extended',
		navToggler:		'.navbar-toggler',
		navClose:		'navbar-close'
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
	
})(console.log('app.js loaded'));