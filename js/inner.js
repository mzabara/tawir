$(document).ready(function() {
    $('.aside-nav > li > a').bind('click', function (e) {
        var hash = this.hash;
        e.preventDefault()
        $('.aside-nav > li.active').removeClass('active');
        $(this).tab('show')
        $('div'+hash).children('.tab-pane-content-holder').show();
        $('div'+hash).children('.tab-content').children('.tab-pane').removeClass('active');
    });

    $('.sub-nav a').bind('click', function (e) {
        e.preventDefault()
        $('.sub-nav li.active').removeClass('active');
        $(this).tab('show');
        $(this).closest('.tab-pane').children('.tab-pane-content-holder').hide();
    });

});


jQuery(document).ready(function() {
    var offset = 200;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.scroll-to-top').fadeIn(duration);
        } else {
            jQuery('.scroll-to-top').fadeOut(duration);
        }
    });

    jQuery('.scroll-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
