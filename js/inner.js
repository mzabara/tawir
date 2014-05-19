$(document).ready(function() {
    $('.section-nav a').bind('click', function (e) {
        var hash = this.hash;
        e.preventDefault()
        $(this).tab('show')
        $('div'+hash).children('.tab-pane-content-holder').show();
        $('div'+hash).children('.tab-content').children('.tab-pane').removeClass('active');
    });

    $('.section-sub-nav a').bind('click', function (e) {
        var hash = this.hash;
        e.preventDefault()
        $('div'+hash).addClass('fade active in');
        $(this).tab('show');
        $(this).closest('.tab-pane').children('.tab-pane-content-holder').hide()
    });
});