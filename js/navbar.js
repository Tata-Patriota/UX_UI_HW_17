//NOTE: ALL THAT IS JA AND JQUERY SHOULD GO INSIDE THE NEXT LINE
$(document).ready(function () {

    $('.nav-item').on("click", function () {
        console.log('hi')
        if ($(this).is("#Renav")) {
            $(this).addClass("activere");
            $('#nav-item-about').removeClass("active");
            $('#nav-item-contact').removeClass("active");
            $('#nav-item-work').removeClass("active");
        } if ($(this).is("#Refooter")) {
            $(this).addClass("activere");
            $('#nav-item-about').removeClass("active");
            $('#nav-item-contact').removeClass("active");
            $('#nav-item-work').removeClass("active");
        } else if ($(this).is("#nav-item-contact")) {
            $('#Renav').removeClass("activere");
            $('#nav-item-contact').addClass("active");
            $('#nav-item-work').removeClass("active");
            $('#nav-item-about').removeClass("active");
        } else if ($(this).is("#nav-item-work")) {
            $('#Renav').removeClass("activere");
            $('#nav-item-contact').removeClass("active");
            $('#nav-item-work').addClass("active");
            $('#nav-item-about').removeClass("active");
        } else {
            $('#Renav').removeClass("activere");
            $('#nav-item-contact').removeClass("active");
            $('#nav-item-work').removeClass("active");
            $('#nav-item-about').addClass("active");
        }
    });

    $(window).on("resize", function () {
        closemenu()
    });
});

// RESPONSIVE NAV BAR
function openmenu() {
    var openedmenu = document.getElementById('openedmenu')
    openedmenu.style.display = 'flex';

    console.log("open world!");
}

function closemenu() {
    var openedmenu = document.getElementById('openedmenu')
    openedmenu.style.display = 'none'
    console.log("close world!");

}

//ADD OVERLAY

// function on() {
//     document.getElementById("openedmenu").style.display = "block";
//     console.log("add overlay!");
// }

// function off() {
//     document.getElementById("openedmenu").style.display = "none";
//     console.log("remove overlay!");
// }

