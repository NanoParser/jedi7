$(function() {

	$('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg">'
        },
        offCanvas: {
            position: 'right'
        }
    });

	var api = $('#my-menu').data('mmenu');
    api.bind('opened', function() {
        alert('opened');
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    });
});
