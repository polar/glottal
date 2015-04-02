var parallaxOn = true;
var smoothScrollOn = true;
var titleFadeOut = true;
var scrollFadeIn = true;
var scrollTranslateIn = true;
var scrollZoomIn = true;
var menuFadeIn = false;

$(document).ready(function () {
    InitLGScroll($('#maincontent'));
});


function InitLGScroll(element) {
    //only add scroll animations if they are not on mobile.
    if ($(window).width()>400)
        $(element).on('resize scroll', ScrollHandler);
}

function ScrollHandler() {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (parallaxOn)
        ParallaxHandler(h);

    if (titleFadeOut)
        TitleFadeOut(h);

    if (scrollFadeIn)
        ScrollFadeIn(h);

    if (scrollTranslateIn)
        ScrollTranslateIn(h);

    if (scrollZoomIn)
        ScrollZoomIn(h);

    if (menuFadeIn)
        MenuFadeIn(h);
}

function isScrolledIntoView(elem) {
    //var docViewTop = $('#maincontent').scrollTop();
    //var docViewBottom = docViewTop + $(window).height();

    //var elemTop = $(elem).offset().top;
    //var elemBottom = elemTop + $(elem).height();

    //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return true;
}


//translate in
function ScrollTranslateIn(viewHeight) {
    $('.scrollleftin').each(function (index, element) {
        if (isScrolledIntoView(element)) {
            var offset = $(element).offset().top;
            var end = $(element).height();
            var start = viewHeight - offset;

            start = start < 0 ? 0 : start;
            start = start > end ? end : start;
            var left = start - end;
            left = left > 0 ? 0 : left;

            $(element).css('left', left + 'px');
        }
    });

    $('.scrollrightin').each(function (index, element) {
        if (isScrolledIntoView(element)) {
            var offset = $(element).offset().top;
            var end = $(element).height();
            var start = viewHeight - offset;

            start = start < 0 ? 0 : start;
            start = start > end ? end : start;
            var left = start - end;
            left = left > 0 ? 0 : left;

            $(element).css('right', left + 'px');
        }
    });
}

//zoom in
function ScrollZoomIn(viewHeight) {
    $('.scrollzoomin').each(function (index, element) {
        if (isScrolledIntoView(element)) {
            var offset = $(element).offset().top;
            var end = $(element).height();
            var start = viewHeight - offset - end / 6;

            start = start < 0 ? 0 : start;
            start = start > end ? end : start;
            var scale = start / end;
            scale = scale < 0.7 ? 0.7 : scale;

            $(element).css('transform', 'scale(' + scale + ')');
        }
    });
}

//menu fade in
function MenuFadeIn(viewHeight) {
    var offset = $("#maincontent").scrollTop();

    if (offset > 400) {
        if (!$(".menumain").hasClass("menutransition")) {
            $(".menumain").addClass("menutransition");
        }
    }
    else {
        if ($(".menumain").hasClass("menutransition")) {
            $(".menumain").removeClass("menutransition");
        }
    }

}

//title fade out
function TitleFadeOut(viewHeight) {
    var offset = $("#maincontent").scrollTop();

    if (offset > 200) {
        if (!$(".titlefadeout").hasClass("titletransition")) {
            $(".titlefadeout").addClass("titletransition");
        }
    }
    else {
        if ($(".titlefadeout").hasClass("titletransition")) {
            $(".titlefadeout").removeClass("titletransition");
        }
    }
}

//fade in elements
function ScrollFadeIn(viewHeight) {
    $('.scrollfadein').each(function (index, element) {
        if (isScrolledIntoView(element)) {
            var offset = $(element).offset().top;
            var end = $(element).height();
            var start = viewHeight - offset - end / 6;

            start = start < 0 ? 0 : start;
            start = start > end ? end : start;
            var opacity = start / end;

            $(element).css('opacity', opacity);
        }
    });
}


//parallax
function ParallaxHandler(viewHeight) {
    $(".parallaxfast").each(function (index, panel) {
        if (isScrolledIntoView(panel)) {
            var offset = ($(panel).offset().top - viewHeight) / 3;
            $(panel).css('background-position', 'center ' + offset + 'px');
        }
    });

    $(".parallaxslow").each(function (index, panel) {
        if (isScrolledIntoView(panel)) {
            var offset = ($(panel).offset().top - viewHeight) / 6;
            $(panel).css('background-position', 'center ' + offset + 'px');
        }
    });
}






//smooth scroll
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        var y = $('#maincontent').scrollTop() + $($.attr(this, 'href')).offset().top - 30;
        $('#maincontent').animate({ scrollTop: y }, 400);
        return false;
    });
});
