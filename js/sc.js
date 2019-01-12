$( 'bs-example-navbar-collapse-1 .navbar-nav a' ).on( 'click', function () {
    $( 'bs-example-navbar-collapse-1 .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
});