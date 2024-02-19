// counter
$(document).ready(function(){
    $('.counter').countUp(
        {
        delay: 10,
        time: 1500
        }
    );
})


// courses slider
$('.courses-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// aos
AOS.init();