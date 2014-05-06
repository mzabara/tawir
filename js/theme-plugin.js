// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#sectionStart').offset().top + $('#sectionStart').height();
// on scroll,
$(window).on('scroll',function(){
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar-fixed-top').addClass('white-theme');
    } else {
        $('.navbar-fixed-top').removeClass('white-theme');
    }
});

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
    MediaElement('player1', {success: function(me) {

        me.play();

        me.addEventListener('timeupdate', function() {
            document.getElementById('time').innerHTML = me.currentTime;
        }, false);

        document.getElementById('pp')['onclick'] = function() {
            if (me.paused)
                me.play();
            else
                me.pause();
        };

    }});
//    new MediaElementPlayer('video', {
//        enablePluginDebug: false,
//        loop: true,
//        videoWidth: '100%',
//        videoHeight: '100%',
//        enableAutosize: true,
//        alwaysShowHours: false,
//        showTimecodeFrameCount: false,
//        features: [],
//        success: function(media, node, player) {
//            media.play();
//        }
//    });
});
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