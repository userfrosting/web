  $(document).ready(function(){
    
    //Materialize mobile Nav
    $(".button-collapse").sideNav();
    
    //Materialize carousel      
      $('#main-carousel').carousel();
      
      //$('#features-carousel').carousel({fullWidth: true});


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
    
    //Material Box
    $('.materialboxed').materialbox();
});
  

