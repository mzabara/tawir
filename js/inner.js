$(document).ready(function() {
    $('.section-nav a').bind('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
});