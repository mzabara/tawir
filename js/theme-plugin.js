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
//var resizeVideo = function(obj) {
//    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
//    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
//    obj.css({width: w, height: h});
//}
//
//$(window).resize(function() {
//    resize_timer = setTimeout(function() {
//        resizeVideo($('#player1'));
//        resizeVideo($('#player2'));
//        resizeVideo($('#player3'));
//        resizeVideo($('#player4'));
//        clearTimeout(resize_timer);
//    }, 200);
//});


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

$(document).ready(function () {

    $('.navbar-fixed-top a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 0
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
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
                mediaElement.addEventListener('ended', function(e) {
                    mediaElement.play();
                }, false);
                mediaElement.play();
    //            resizeVideo($(mediaElement))
            }
        });
    }

    if($('#player2').length > 0) {
        new MediaElement('player2',{
            defaultVideoWidth: '1920',
            defaultVideoHeight: '1150',
            success: function(mediaElement) {
                mediaElement.addEventListener('ended', function(e) {
                    mediaElement.play();
                }, false);
                mediaElement.play();
    //            resizeVideo($(mediaElement))
            }
        });
    }
});