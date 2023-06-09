//NOTE: ALL THAT IS JA AND JQUERY SHOULD GO INSIDE THE NEXT LINE
$(document).ready(function () {

    //SHOW NAV BAR ON SCROLL 
    // .scroll() creates an event when the user scrolls
    $(window).scroll(function () {
        console.log('hi')

        // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
        var scroll = $(window).scrollTop();

        var objectSelect = $('.aboutpage2');

        // .offset() retrieves current position of element relative to document
        var objectPosition = objectSelect.offset().top;

        if (scroll > objectPosition - 155) {
            $('.scrollover').addClass('show');
        } else {
            $('.scrollover').removeClass('show');
        }
    });
});