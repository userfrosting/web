$(document).ready(function(){
	
	//Materialize mobile nav
	$(".button-collapse").sideNav();
	
	//Materialize carousel      
	  $('#main-carousel').carousel();

  //Materialize dropdown
  $(".dropdown-button").dropdown({
    hover: true, 
    inDuration: 300,
    outDuration: 225,
    alignment: "left", // Aligns dropdown to left or right edge (works with constrain_width)
    gutter: 0, // Spacing from edge
    belowOrigin: true,
    }
  );
  
  //Materialize box
	$('.materialboxed').materialbox();

	//Active Nav Li a
	var url = window.location;
	var element = $('.navbar-fixed li a').filter(function() {
		// Strip out everything after the hash, if present
		var url_head = url.href.split('#', 1)[0];
		return this.href ==url_head;  // || url.href.indexOf(this.href) == 0   // Include this if you want to color all parent URIs as well
	}).addClass('nav-active').parent().parent().addClass('in').parent();
	if (element.is('li')) {
		element.addClass('active');
	}
	
	//Match Height
	$(function() {
	  $('.hover-img').matchHeight({
		  target: $('.hc')
	  });
	});
	
	//Match Width
	$('.hover-img').matchWidth($('.hc'));
	
});
  
$(document).ready(function(){
   $('.slick-slider').slick({
	  variableWidth: true,
	  centerMode: true,
   });
 });
 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
 