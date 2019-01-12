(function($){
	"use strict";
	//when dom is ready start
	$(document).ready(function(){

		$('.progress-bar').each(function(){

            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});

            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 1000,
                });
            });

        });

	});
	//when dom is ready end
})(jQuery);

$( 'bs-example-navbar-collapse-1 .navbar-nav a' ).on( 'click', function () {
    $( 'bs-example-navbar-collapse-1 .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
});