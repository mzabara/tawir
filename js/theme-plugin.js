if($('#sectionStart').length > 0) {
    var mainbottom = $('.slogan').offset().top - $('.container').height();
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
});

if($('#map_canvas').length > 0) {
    function initialize() {
        var myLatlng = new google.maps.LatLng(55.754929, 37.557051);

        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
            center: new google.maps.LatLng(55.756218, 37.565705),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        }
        var map = new google.maps.Map(map_canvas, map_options)
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Title'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}

function scrollToHash(hash) {
    var target = hash,
        $target = $(target),
        offset_delta = 0;

    if(hash == '') return;

    if(!$('#sectionStart').length) {
        offset_delta = $(window).height() < 1270 ? 80 : 85;
    }

    if($('#sectionStart').length > 0) {
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - offset_delta
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    } else {
        $(window).scrollTop($target.offset().top - offset_delta);
    }


}

$(document).ready(function () {

    $('.navbar-fixed-top a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        scrollToHash(this.hash);
    });

    $('li > a').click(function() {
        var $li = $(this).parent();
        if ( ! $li.hasClass('active')) {
            $li.addClass('active');
        }
        scrollToHash($(this).attr('href'));
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