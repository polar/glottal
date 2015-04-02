




$(document).ready(function () {

    if (isAppleDevice()) {
        fixMobileSafariViewport();
    }

    StartSlider();
    InitPhotoSetGallery();
});

//hack because mobile safari doeesnt work with 100vh when dealing with DOM manipulation
function fixMobileSafariViewport() {
    $.stylesheet('.screenheight', 'height', '1500px');
    $.stylesheet('.screenheight', 'min-height', '1500px');
    $.stylesheet('.halfscreen', 'height', '750px');
    $.stylesheet('.halfscreen', 'min-height', '750px');
}

function isAppleDevice() {
    return (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
}



//slider
function StartSlider() {
    $('.slider').glide({
        autoplay: 5000,
        arrows: true,
        arrowRightText: '',
        arrowLeftText: '',
        navigation: true,
        arrowRightClass: "slider__arrows-item--right fa fa-chevron-circle-right fa-4x",
        arrowLeftClass: "slider__arrows-item--left fa fa-chevron-circle-left fa-4x"
    });
}

//photogrid
function InitPhotoSetGallery() {
    $('.photoset-grid-custom').photosetGrid({
        highresLinks: true,
        gutter: '5px',
        layout: '413',  // 4 images first row, 1 image second row, 3 images third row
        //rel: 'gallery1',

        onInit: function () { },
        onComplete: function () {
            // Show the grid after it renders
            $('.gallery1').attr('style', '');

            $('.gallery1').magnificPopup({
                delegate: 'a', // child items selector, by clicking on it popup will open
                type: 'image',
                gallery: { enabled: true }
            });
        }
    });
}


