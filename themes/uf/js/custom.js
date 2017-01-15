  $(document).ready(function(){
    $(".button-collapse").sideNav(); //Materialize mobile Nav

    var url = window.location;
    var element = $('.navbar-fixed li a').filter(function() {
        // Strip out everything after the hash, if present
        var url_head = url.href.split('#', 1)[0];
        return this.href ==url_head;  // || url.href.indexOf(this.href) == 0   // Include this if you want to color all parent URIs as well
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});