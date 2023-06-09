// SAY HI IMAGE
function mousein(img) {
    img.src = "../img/sayhihover.png";

}

function mouseout(img) {
    img.src = "../img/sayhi.png";
}

// EYE ICON
function iconin(img) {
    img.src = "../img/witness.png";
}

function iconout(img) {
    img.src = "../img/witness2.png";
}

//NOTE: ALL THAT IS JA AND JQUERY SHOULD GO INSIDE THE NEXT LINE
$(document).ready(function () {



    // SMILE
    const smile = document.getElementById('smile');

    const eyes = document.getElementById('eyes');

    smile.addEventListener('mouseover', function () {
        console.log('over');
        eyes.style.color = '#FF77E6';
    });

    smile.addEventListener('mouseout', function () {
        eyes.style.color = '#000000';
    });

});




