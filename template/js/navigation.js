$(function () {
    /**
     *  Collapse / uncollapse menu
     */
    $('#mainNav ul').mouseover(function (e) {
        e.stopPropagation();
        var depth = 2; // TODO calculate the depth from position of $(this) in DOM
        $(this).children().children('ul').css({
            'left': (22.5 - depth * 3) + 'em'});
    }).mouseout(function (e) {
        e.stopPropagation();
        $(this).find('ul').css({
            'left': '3em'});
    });

    /**
     *  Open / close menu
     */
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


    /** Search input:
     *  - Show on button click
     *  - Hide on loose focus if empty
     *  - Submit when visible an button is clicked
     */
    var searchInput = $('#searchbox input')
        .css({ 'width': '0' })
        .addClass('hidden');

    $('#searchbox button').click(function (e) {
        if (searchInput.hasClass('hidden')) {
            e.preventDefault();
            searchInput.css({ 'width': 'auto' });
            var targetWidth = searchInput.width();
            searchInput.css({ 'width': '0' });
            searchInput.animate({ 'width': targetWidth + 'px' }, function () {
                searchInput.removeClass('hidden');
                searchInput.focus();
            });
        }
    });

    searchInput.on('blur', function (e) {
        if (!$(this).val()) {
            searchInput.animate({ 'width': '0' }, function () {
                searchInput.addClass('hidden');
            });
        }
    });

    /**
     *  Title shrink on scroll
     */
    var scrollPos = 0;

    $(document).on('scroll', function (e) {
        var oldScrollPos = scrollPos;
        scrollPos = $(document.body).scrollTop();
        var scrollingUp = scrollPos < oldScrollPos;
        if (scrollingUp) {
            $('header').css({
                'top': '0'
            });
        } else {
            $('header').css({
                'top': -1 * scrollPos + 'px'
            });
        }
    });
});
