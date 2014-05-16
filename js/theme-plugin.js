if($('#sectionStart').length > 0) {
    var mainbottom = $('.logo-big').offset().top + $('.logo-big').height();
    $(window).on('scroll',function(){
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar-fixed-top').addClass('white-theme');
        } else {
            $('.navbar-fixed-top').removeClass('white-theme');
        }
    });
}

$(window).on('load',function(){
    var hash = window.location.hash;
    scrollToHash(hash);
    $('ul.nav a[href="'+hash+'"]').parent().addClass('active');
});

if($('#map_canvas').length > 0) {
    function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
            center: new google.maps.LatLng(55.753718, 37.558005),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}

function scrollToHash(hash) {
    var target = hash,
        $target = $(target),
        offset_delta = 55;

    if(target == '#sectionContacts') {
        offset_delta = offset_delta = -($target.height() - $(window).height() + 2);
    }
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - offset_delta
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
}

$.html5Loader({
    filesToLoad:    'files.json'
});

$(document).ready(function () {

    $('.navbar-fixed-top a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        scrollToHash(this.hash);
    });
    $('li').click(function() {
        if ( ! $(this).hasClass('active')) {
            $('li.active').removeClass('active');
            $(this).addClass('active');
            offsetTop = $(this).offset().top - $('.nav').offset().top;
            offsetLeft = $(this).offset().left - $('.nav').offset().left;
        }
    });
    if($('#player1').length > 0) {
        new MediaElement('player1',{
            defaultVideoWidth: '1000',
            defaultVideoHeight: '1000',
            success: function(mediaElement) {
                mediaElement.addEventListener('loadeddata', function() {
                }, false);
                mediaElement.addEventListener('ended', function(e) {
                    mediaElement.play();
                }, false);
                mediaElement.play();
            }
        });
    }
});