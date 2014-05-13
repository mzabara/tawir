$(document).ready(function() {
    $('.section-nav a, .section-sub-nav a').bind('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
});