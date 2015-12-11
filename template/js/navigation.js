$(function () {
    $('#toggleMenu').click(function (e) {
        e.preventDefault();

        var mainNav = $('#mainNav');

        if (mainNav.hasClass('open')) {
            mainNav.animate({'width': '3em'}, function () {
                mainNav.removeClass('open');
            });
        } else {
            // mainNav.css('width', 'auto');
            // var targetWidth = mainNav.width();
            // mainNav.css('width', '3em');
            mainNav.animate({'width': '22.5em'}, function () {
                mainNav.addClass('open');
            });
        }
        $('#mainNav').toggleClass('open');
    });
});
