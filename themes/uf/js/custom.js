$(document).ready(function() {
	//Materialize mobile nav
	$('.button-collapse').sideNav();

    //Materialize dropdown
    $('.dropdown-button').dropdown({
      hover: true,
      inDuration: 300,
      outDuration: 225,
      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
      gutter: 0, // Spacing from edge
      belowOrigin: true
    });

    //Active Nav Li a
	var url = window.location;
	var element = $('.navbar-fixed li a').filter(function() {
		// Strip out everything after the hash, if present
		var url_head = url.href.split('#', 1)[0];
		return (this.href == url_head);  // || url.href.indexOf(this.href) == 0   // Include this if you want to color all parent URIs as well
	}).addClass('nav-active').parent().parent().addClass('in').parent();

	if (element.is('li')) {
		element.addClass('active');
	}

    // Carousel for site gallery
    $('.slick-slider').slick({
       variableWidth: true,
       centerMode: true
    });
});
